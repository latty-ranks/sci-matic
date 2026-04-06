import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BookOpen, Calculator, FlaskConical, X } from "lucide-react";
import { topics } from "@/data/topics";

interface SearchResult {
  type: "topic" | "formula" | "tool";
  title: string;
  subtitle: string;
  subject?: string;
  level?: number;
  link: string;
}

const toolEntries: SearchResult[] = [
  { type: "tool", title: "Pythagoras Calculator", subtitle: "Calculate hypotenuse or side of a right triangle", link: "/tools" },
  { type: "tool", title: "Area Calculator", subtitle: "Rectangle, triangle and circle areas", link: "/tools" },
  { type: "tool", title: "Quadratic Solver", subtitle: "Solve ax² + bx + c = 0 using the quadratic formula", link: "/tools" },
  { type: "tool", title: "Trigonometry Calculator", subtitle: "Calculate sin, cos and tan values", link: "/tools" },
];

const subjectLabels: Record<string, string> = {
  math: "Mathematics",
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
};

const subjectColors: Record<string, string> = {
  math: "bg-math",
  physics: "bg-physics",
  chemistry: "bg-chemistry",
  biology: "bg-biology",
};

const buildIndex = (): SearchResult[] => {
  const results: SearchResult[] = [];

  topics.forEach((topic) => {
    results.push({
      type: "topic",
      title: topic.title,
      subtitle: topic.description,
      subject: topic.subject,
      level: topic.level,
      link: `/topics?subject=${topic.subject}`,
    });

    topic.formulas?.forEach((formula) => {
      results.push({
        type: "formula",
        title: formula,
        subtitle: `${topic.title} — ${subjectLabels[topic.subject]} S.${topic.level}`,
        subject: topic.subject,
        level: topic.level,
        link: `/topics?subject=${topic.subject}`,
      });
    });
  });

  return [...results, ...toolEntries];
};

const SearchDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return index
      .filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.subtitle.toLowerCase().includes(q)
      )
      .slice(0, 15);
  }, [query, index]);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  // Keyboard shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
        else onClose(); // parent toggles
      }
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const handleSelect = (result: SearchResult) => {
    navigate(result.link);
    onClose();
  };

  if (!open) return null;

  const iconFor = (type: string) => {
    if (type === "formula") return FlaskConical;
    if (type === "tool") return Calculator;
    return BookOpen;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh]">
      {/* backdrop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative mx-4 w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics, formulas, tools…"
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button onClick={onClose} className="rounded-md p-1 text-muted-foreground hover:bg-muted">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[50vh] overflow-y-auto">
          {query.trim() === "" ? (
            <div className="px-4 py-8 text-center text-sm text-muted-foreground">
              Start typing to search across all subjects…
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-muted-foreground">
              No results for "{query}"
            </div>
          ) : (
            <ul className="p-2">
              {results.map((r, i) => {
                const Icon = iconFor(r.type);
                return (
                  <li key={i}>
                    <button
                      onClick={() => handleSelect(r)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-muted"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-foreground">
                          {r.type === "formula" ? (
                            <code className="font-mono">{r.title}</code>
                          ) : (
                            r.title
                          )}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">{r.subtitle}</p>
                      </div>
                      {r.subject && (
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold text-primary-foreground ${subjectColors[r.subject]}`}>
                          S.{r.level}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer hint */}
        <div className="border-t border-border px-4 py-2 text-center text-xs text-muted-foreground">
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono">Esc</kbd> to close
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
