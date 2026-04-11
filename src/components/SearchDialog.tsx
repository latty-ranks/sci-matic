import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BookOpen, Calculator, FlaskConical, X, Sparkles, Loader2, Send } from "lucide-react";
import { topics } from "@/data/topics";
import { streamAI } from "@/lib/streamAI";
import ReactMarkdown from "react-markdown";

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
      link: `/notes?subject=${topic.subject}&level=${topic.level}`,
    });
    topic.formulas?.forEach((formula) => {
      results.push({
        type: "formula",
        title: formula,
        subtitle: `${topic.title} — ${subjectLabels[topic.subject]} S.${topic.level}`,
        subject: topic.subject,
        level: topic.level,
        link: `/notes?subject=${topic.subject}&level=${topic.level}`,
      });
    });
  });
  return [...results, ...toolEntries];
};

const SearchDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"search" | "ai">("search");
  const [aiContent, setAiContent] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const navigate = useNavigate();
  const index = useMemo(buildIndex, []);
  const abortRef = useRef<AbortController | null>(null);

  const results = useMemo(() => {
    if (!query.trim() || tab === "ai") return [];
    const q = query.toLowerCase();
    return index
      .filter((r) => r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q))
      .slice(0, 15);
  }, [query, index, tab]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setTab("search");
      setAiContent("");
      setAiError("");
      abortRef.current?.abort();
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
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

  const handleAskAI = useCallback(() => {
    if (!query.trim() || aiLoading) return;
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    setAiContent("");
    setAiError("");
    setAiLoading(true);

    let accumulated = "";
    streamAI({
      topic: query,
      subject: "general",
      level: 1,
      mode: "search",
      signal: ctrl.signal,
      onDelta: (text) => {
        accumulated += text;
        setAiContent(accumulated);
      },
      onDone: () => setAiLoading(false),
      onError: (msg) => { setAiError(msg); setAiLoading(false); },
    });
  }, [query, aiLoading]);

  if (!open) return null;

  const iconFor = (type: string) => {
    if (type === "formula") return FlaskConical;
    if (type === "tool") return Calculator;
    return BookOpen;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[8vh]">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative mx-4 w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
        {/* Tab buttons */}
        <div className="flex border-b border-border">
          <button
            onClick={() => setTab("search")}
            className={`flex-1 py-2.5 text-xs font-semibold transition-colors ${
              tab === "search" ? "bg-primary/10 text-primary border-b-2 border-primary" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <Search className="mr-1 inline h-3 w-3" /> Search
          </button>
          <button
            onClick={() => setTab("ai")}
            className={`flex-1 py-2.5 text-xs font-semibold transition-colors ${
              tab === "ai" ? "bg-accent/10 text-accent border-b-2 border-accent" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <Sparkles className="mr-1 inline h-3 w-3" /> Ask AI
          </button>
        </div>

        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          {tab === "ai" ? <Sparkles className="h-5 w-5 shrink-0 text-accent" /> : <Search className="h-5 w-5 shrink-0 text-muted-foreground" />}
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && tab === "ai") handleAskAI();
            }}
            placeholder={tab === "ai" ? "Ask anything… e.g. 'Explain Newton's Laws simply'" : "Search topics, formulas, tools…"}
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          {tab === "ai" && (
            <button
              onClick={handleAskAI}
              disabled={aiLoading || !query.trim()}
              className="rounded-lg bg-accent p-1.5 text-accent-foreground disabled:opacity-50"
            >
              {aiLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </button>
          )}
          <button onClick={onClose} className="rounded-md p-1 text-muted-foreground hover:bg-muted">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[50vh] overflow-y-auto">
          {tab === "search" ? (
            query.trim() === "" ? (
              <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                Start typing to search across all subjects…
              </div>
            ) : results.length === 0 ? (
              <div className="px-4 py-6 text-center">
                <p className="text-sm text-muted-foreground">No results for "{query}"</p>
                <button
                  onClick={() => { setTab("ai"); handleAskAI(); }}
                  className="mt-2 inline-flex items-center gap-1 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/20"
                >
                  <Sparkles className="h-3 w-3" /> Ask AI instead
                </button>
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
                            {r.type === "formula" ? <code className="font-mono">{r.title}</code> : r.title}
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
            )
          ) : (
            /* AI Tab */
            <div className="p-4">
              {!aiContent && !aiLoading && !aiError && (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  <Sparkles className="mx-auto mb-2 h-8 w-8 text-accent/50" />
                  <p>Ask any question about your subjects!</p>
                  <p className="mt-1 text-xs">e.g. "What is Boyle's Law?", "Solve x² + 5x + 6 = 0"</p>
                </div>
              )}

              {aiLoading && !aiContent && (
                <div className="flex items-center justify-center gap-2 py-8 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Thinking...
                </div>
              )}

              {aiError && <p className="text-sm text-destructive">{aiError}</p>}

              {aiContent && (
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <ReactMarkdown>{aiContent}</ReactMarkdown>
                </div>
              )}

              {aiLoading && aiContent && (
                <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <Loader2 className="h-3 w-3 animate-spin" /> Generating...
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border px-4 py-2 text-center text-xs text-muted-foreground">
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono">Esc</kbd> to close
          {tab === "ai" && " · "}
          {tab === "ai" && <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono">Enter</kbd>}
          {tab === "ai" && " to ask"}
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
