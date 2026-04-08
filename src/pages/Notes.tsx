import { useState, useMemo } from "react";
import { BookOpen, ChevronDown, FileText, Lightbulb } from "lucide-react";
import ClassLevelSelector from "@/components/ClassLevelSelector";
import { topics } from "@/data/topics";
import { topicNotes } from "@/data/notes";

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

const subjectBorders: Record<string, string> = {
  math: "border-l-math",
  physics: "border-l-physics",
  chemistry: "border-l-chemistry",
  biology: "border-l-biology",
};

const Notes = () => {
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const filteredTopics = useMemo(
    () => topics.filter((t) => t.subject === selectedSubject && t.level === selectedLevel),
    [selectedSubject, selectedLevel]
  );

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
          <FileText className="mr-2 inline h-7 w-7 text-primary" />
          Study Notes
        </h1>
        <p className="text-muted-foreground">Comprehensive notes following the Uganda secondary curriculum</p>
      </div>

      {/* Subject tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {Object.entries(subjectLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => { setSelectedSubject(key); setExpandedTopic(null); }}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
              selectedSubject === key
                ? `${subjectColors[key]} text-primary-foreground shadow-md`
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Class level */}
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium text-muted-foreground">Class Level</p>
        <ClassLevelSelector selected={selectedLevel} onChange={(l) => { setSelectedLevel(l); setExpandedTopic(null); }} />
      </div>

      {/* Notes list */}
      <div className="space-y-4">
        {filteredTopics.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <BookOpen className="mx-auto mb-3 h-10 w-10 text-muted-foreground/50" />
            <p className="text-muted-foreground">Notes coming soon for {subjectLabels[selectedSubject]} S.{selectedLevel}!</p>
          </div>
        ) : (
          filteredTopics.map((topic) => {
            const note = topicNotes.find((n) => n.topicId === topic.id);
            const isExpanded = expandedTopic === topic.id;

            return (
              <div
                key={topic.id}
                className={`overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md ${subjectBorders[selectedSubject]} border-l-4`}
              >
                <button
                  onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{topic.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{topic.description}</p>
                    {note && (
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                        <FileText className="h-3 w-3" />
                        {note.sections.length} sections
                        {note.examples && ` · ${note.examples.length} worked example${note.examples.length > 1 ? "s" : ""}`}
                      </span>
                    )}
                  </div>
                  <ChevronDown className={`ml-4 h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </button>

                {isExpanded && note && (
                  <div className="border-t border-border bg-muted/20 px-5 py-6 space-y-6">
                    {/* Key Formulas */}
                    {topic.formulas && topic.formulas.length > 0 && (
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-primary flex items-center gap-1">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                          Key Formulas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {topic.formulas.map((f, i) => (
                            <code key={i} className="rounded-md bg-primary/10 px-3 py-1.5 text-sm font-mono font-semibold text-primary">
                              {f}
                            </code>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Note Sections */}
                    {note.sections.map((section, i) => (
                      <div key={i}>
                        <h4 className="mb-1.5 text-sm font-bold text-foreground">{section.heading}</h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">{section.content}</p>
                      </div>
                    ))}

                    {/* Worked Examples */}
                    {note.examples && note.examples.length > 0 && (
                      <div className="rounded-lg border border-secondary/30 bg-secondary/5 p-4">
                        <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-secondary">
                          <Lightbulb className="h-4 w-4" />
                          Worked Examples
                        </h4>
                        <div className="space-y-3">
                          {note.examples.map((ex, i) => (
                            <div key={i} className="text-sm">
                              <p className="font-medium text-foreground">Q: {ex.problem}</p>
                              <p className="mt-1 text-muted-foreground"><span className="font-semibold text-primary">A:</span> {ex.solution}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Points */}
                    <div>
                      <h4 className="mb-2 text-sm font-bold text-foreground">Summary Points</h4>
                      <ul className="grid gap-1.5 sm:grid-cols-2">
                        {topic.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {isExpanded && !note && (
                  <div className="border-t border-border bg-muted/20 px-5 py-6 text-center">
                    <p className="text-sm text-muted-foreground">Detailed notes coming soon for this topic.</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Notes;
