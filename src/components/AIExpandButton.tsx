import { useState, useRef, useCallback } from "react";
import { Sparkles, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { streamAI } from "@/lib/streamAI";
import ReactMarkdown from "react-markdown";

interface AIExpandButtonProps {
  topicTitle: string;
  subject: string;
  level: number;
}

const AIExpandButton = ({ topicTitle, subject, level }: AIExpandButtonProps) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  const handleExpand = useCallback(() => {
    if (open) { setOpen(false); return; }
    setOpen(true);
    setContent("");
    setError("");
    setLoading(true);

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    let accumulated = "";
    streamAI({
      topic: topicTitle,
      subject,
      level,
      mode: "expand",
      signal: ctrl.signal,
      onDelta: (text) => {
        accumulated += text;
        setContent(accumulated);
      },
      onDone: () => setLoading(false),
      onError: (msg) => { setError(msg); setLoading(false); },
    });
  }, [open, topicTitle, subject, level]);

  const handleClose = () => {
    abortRef.current?.abort();
    setOpen(false);
    setLoading(false);
  };

  return (
    <div>
      <Button
        onClick={handleExpand}
        size="sm"
        className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
      >
        <Sparkles className="h-4 w-4" />
        {open ? "Hide AI Explanation" : "Expand with AI"}
      </Button>

      {open && (
        <div className="mt-4 rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-5 dark:from-purple-950/30 dark:to-blue-950/30 dark:border-purple-800">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="flex items-center gap-2 text-sm font-bold text-purple-700 dark:text-purple-300">
              <Sparkles className="h-4 w-4" />
              AI-Powered Explanation
            </h4>
            <button onClick={handleClose} className="rounded-md p-1 text-muted-foreground hover:bg-muted">
              <X className="h-4 w-4" />
            </button>
          </div>

          {loading && !content && (
            <div className="flex items-center gap-2 py-4 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating explanation...
            </div>
          )}

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}

          {content && (
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}

          {loading && content && (
            <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
              <Loader2 className="h-3 w-3 animate-spin" />
              Still generating...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIExpandButton;
