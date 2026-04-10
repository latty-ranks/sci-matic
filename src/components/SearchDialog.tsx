import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BookOpen, Calculator, FlaskConical, X, Sparkles, Loader2 } from "lucide-react";
import { topics } from "@/data/topics";
import { supabase } from "@/integrations/supabase/client";

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

type Tab = "search" | "ai";

const SearchDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<Tab>("search");
  const [aiAnswer, setAiAnswer] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const navigate = useNavigate();
  const index = useMemo(buildIndex, []);
  const inputRef = useRef<HTMLInputElement>(null);

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
      setAiAnswer("");
      setAiError("");
      setAiLoading(false);
    } else {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
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

  const handleAiSearch = async () => {
    if (!query.trim() || aiLoading) return;
    setAiLoading(true);
    setAiAnswer("");
    setAiError("");

    try {
      const { data, error } = await supabase.functions.invoke("ai-search", {
        body: { query: query.trim() },
      });

      if (error) {
        setAiError("Something went wrong. Please try again.");
        console.error("AI search error:", error);
      } else if (data?.error) {
        setAiError(data.error);
      } else {
        setAiAnswer(data?.answer || "No answer received.");
      }
    } catch (err) {
      setAiError("Failed to connect. Please check your internet connection.");
      console.error(err);
    } finally {
      setAiLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tab === "ai") {
      e.preventDefault();
      handleAiSearch();
    }
  };

  if (!open) return null;

  const iconFor = (type: string) => {
    if (type === "formula") return FlaskConical;
    if (type === "tool") return Calculator;
    return BookOpen;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh]">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative mx-4 w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
        {/* Tabs */}
        <div className="flex border-b border-border">
          <button
            onClick={() => setTab("search")}
            className={`flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
              tab === "search"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Search className="h-4 w-4" />
            Search
          </button>
          <button
            onClick={() => setTab("ai")}
            className={`flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
              tab === "ai"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles className="h-4 w-4" />
            Ask AI
          </button>
        </div>

        {/* Input */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          {tab === "ai" ? (
            <Sparkles className="h-5 w-5 shrink-0 text-primary" />
          ) : (
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
          )}
          <input
            ref={inputRef}
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              tab === "ai"
                ? "Ask anything about your subjects…"
                : "Search topics, formulas, tools…"
            }
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          {tab === "ai" && query.trim() && (
            <button
              onClick={handleAiSearch}
              disabled={aiLoading}
              className="shrink-0 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              {aiLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : "Ask"}
            </button>
          )}
          <button onClick={onClose} className="rounded-md p-1 text-muted-foreground hover:bg-muted">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[50vh] overflow-y-auto">
          {tab === "search" ? (
            /* Regular search */
            query.trim() === "" ? (
              <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                Start typing to search across all subjects…
              </div>
            ) : results.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                No results for "{query}".{" "}
                <button
                  onClick={() => setTab("ai")}
                  className="text-primary underline hover:no-underline"
                >
                  Try asking AI
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
                            {r.type === "formula" ? (
                              <code className="font-mono">{r.title}</code>
                            ) : (
                              r.title
                            )}
                          </p>
                          <p className="truncate text-xs text-muted-foreground">{r.subtitle}</p>
                        </div>
                        {r.subject && (
                          <span
                            className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold text-primary-foreground ${subjectColors[r.subject]}`}
                          >
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
            /* AI tab */
            <div className="p-4">
              {aiLoading ? (
                <div className="flex flex-col items-center gap-3 py-8">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">Thinking…</p>
                </div>
              ) : aiError ? (
                <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                  {aiError}
                </div>
              ) : aiAnswer ? (
                <div className="prose prose-sm max-w-none text-foreground">
                  <AiMarkdown text={aiAnswer} />
                </div>
              ) : (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  <Sparkles className="mx-auto mb-2 h-8 w-8 text-primary/40" />
                  <p className="font-medium text-foreground">Ask your study assistant</p>
                  <p className="mt-1">
                    Type a question and press <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono">Enter</kbd> or click Ask
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {["Explain Newton's laws", "What is photosynthesis?", "Solve x² - 5x + 6 = 0"].map(
                      (example) => (
                        <button
                          key={example}
                          onClick={() => {
                            setQuery(example);
                            setTimeout(handleAiSearch, 0);
                          }}
                          className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {example}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border px-4 py-2 text-center text-xs text-muted-foreground">
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono">Esc</kbd> to close
          {tab === "ai" && " · AI answers may not always be accurate"}
        </div>
      </div>
    </div>
  );
};

/** Simple markdown renderer for AI responses */
const AiMarkdown = ({ text }: { text: string }) => {
  const lines = text.split("\n");
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        if (!line.trim()) return <br key={i} />;
        // Bold
        const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Bullet points
        if (line.trim().startsWith("- ") || line.trim().startsWith("• ")) {
          return (
            <div key={i} className="flex gap-2 pl-2">
              <span className="text-primary">•</span>
              <span dangerouslySetInnerHTML={{ __html: formatted.replace(/^[\s]*[-•]\s*/, '') }} />
            </div>
          );
        }
        // Headers
        if (line.trim().startsWith("### ")) {
          return <h4 key={i} className="font-semibold text-foreground mt-2" dangerouslySetInnerHTML={{ __html: formatted.replace(/^###\s*/, '') }} />;
        }
        if (line.trim().startsWith("## ")) {
          return <h3 key={i} className="font-bold text-foreground mt-3" dangerouslySetInnerHTML={{ __html: formatted.replace(/^##\s*/, '') }} />;
        }
        return <p key={i} dangerouslySetInnerHTML={{ __html: formatted }} />;
      })}
    </div>
  );
};

export default SearchDialog;
