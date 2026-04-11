import { useState, useMemo } from "react";
import { BookOpen, ChevronDown, FileText, Lightbulb, Printer, Save, ClipboardList } from "lucide-react";
import ClassLevelSelector from "@/components/ClassLevelSelector";
import AIExpandButton from "@/components/AIExpandButton";
import SubjectToolboxCard from "@/components/SubjectToolboxCard";
import { topics } from "@/data/topics";
import { topicNotes } from "@/data/notes";
import { Button } from "@/components/ui/button";
import { BRAND, subjectLabels } from "@/lib/constants";
import { printNotes } from "@/lib/printNotes";

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

  const filteredNotes = useMemo(
    () => topicNotes.filter((n) => filteredTopics.some((t) => t.id === n.topicId)),
    [filteredTopics]
  );

  const handlePrint = (mode: "full" | "practice") => {
    printNotes({
      subject: selectedSubject,
      level: selectedLevel,
      topics: filteredTopics,
      notes: filteredNotes,
      mode,
    });
  };

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-6">
      {/* Branding Header */}
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-6 text-center text-primary-foreground shadow-lg">
        <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">{BRAND.name}</h1>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] opacity-80">× {BRAND.partner}</p>
        <p className="mt-2 text-sm opacity-90">Comprehensive Study Notes — Uganda S.1–S.4 Curriculum</p>
      </div>

      {/* Subject tabs */}
      <div className="mb-4 flex flex-wrap gap-2">
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
      <div className="mb-4">
        <p className="mb-2 text-sm font-medium text-muted-foreground">Class Level</p>
        <ClassLevelSelector selected={selectedLevel} onChange={(l) => { setSelectedLevel(l); setExpandedTopic(null); }} />
      </div>

      {/* Print buttons */}
      <div className="mb-6 flex flex-wrap gap-2">
        <Button onClick={() => handlePrint("full")} variant="outline" className="gap-2">
          <Printer className="h-4 w-4" />
          Print Full Notes
        </Button>
        <Button onClick={() => handlePrint("practice")} variant="outline" className="gap-2">
          <ClipboardList className="h-4 w-4" />
          Print Practice Paper
        </Button>
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
                {/* Topic header */}
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

                {/* Expanded content - 3 Section Rule */}
                {isExpanded && note && (
                  <div className="border-t border-border bg-muted/20 px-5 py-6 space-y-6">

                    {/* Key Formulas */}
                    {topic.formulas && topic.formulas.length > 0 && (
                      <div className="rounded-lg bg-primary/5 p-4 border border-primary/10">
                        <h4 className="mb-2 text-sm font-semibold text-primary flex items-center gap-1">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                          📐 Key Formulas
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

                    {/* SECTION 1: Detailed Notes */}
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
                        <FileText className="h-4 w-4" />
                        Section 1: Detailed Notes
                      </h4>
                      <div className="space-y-3">
                        {note.sections.map((section, i) => (
                          <div key={i} className="rounded-lg bg-card p-3 border border-border">
                            <h5 className="mb-1.5 text-sm font-bold text-foreground">{section.heading}</h5>
                            <p className="text-sm leading-relaxed text-muted-foreground">{section.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SECTION 2: Worked Examples */}
                    {note.examples && note.examples.length > 0 && (
                      <div>
                        <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-secondary">
                          <Lightbulb className="h-4 w-4" />
                          Section 2: Worked Examples
                        </h4>
                        <div className="space-y-3">
                          {note.examples.map((ex, i) => (
                            <div key={i} className="rounded-lg border border-secondary/20 bg-secondary/5 p-4">
                              <p className="text-sm font-medium text-foreground"><strong>Example {i + 1}:</strong> {ex.problem}</p>
                              <p className="mt-2 text-sm text-muted-foreground">
                                <span className="font-semibold text-primary">Solution:</span> {ex.solution}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SECTION 3: Review & Practice */}
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent">
                        <BookOpen className="h-4 w-4" />
                        Section 3: Review & Key Points
                      </h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {topic.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 rounded-lg bg-accent/5 p-2 text-sm text-muted-foreground border border-accent/10">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Subject Toolbox */}
                    <SubjectToolboxCard subject={selectedSubject} />

                    {/* AI Expand Button */}
                    <AIExpandButton
                      topicTitle={topic.title}
                      subject={selectedSubject}
                      level={selectedLevel}
                    />
                  </div>
                )}

                {isExpanded && !note && (
                  <div className="border-t border-border bg-muted/20 px-5 py-6 text-center">
                    <p className="text-sm text-muted-foreground">Detailed notes coming soon for this topic.</p>
                    <div className="mt-3">
                      <AIExpandButton
                        topicTitle={topic.title}
                        subject={selectedSubject}
                        level={selectedLevel}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Footer */}
      <div className="mt-10 rounded-xl bg-muted/50 p-4 text-center text-xs text-muted-foreground border border-border">
        <p className="font-medium">{BRAND.footer}</p>
      </div>
    </div>
  );
};

export default Notes;
