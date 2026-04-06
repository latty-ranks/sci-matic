import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BookOpen, ChevronRight } from "lucide-react";
import ClassLevelSelector from "@/components/ClassLevelSelector";
import { topics, Topic } from "@/data/topics";

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

const Topics = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState(searchParams.get("subject") || "math");
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const filteredTopics = topics.filter(
    (t) => t.subject === selectedSubject && t.level === selectedLevel
  );

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject);
    setSearchParams({ subject });
    setExpandedTopic(null);
  };

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">Topic Explorer</h1>
        <p className="text-muted-foreground">Browse topics by subject and class level</p>
      </div>

      {/* Subject tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {Object.entries(subjectLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => handleSubjectChange(key)}
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

      {/* Topics list */}
      <div className="space-y-4">
        {filteredTopics.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <BookOpen className="mx-auto mb-3 h-10 w-10 text-muted-foreground/50" />
            <p className="text-muted-foreground">More topics coming soon for {subjectLabels[selectedSubject]} S.{selectedLevel}!</p>
          </div>
        ) : (
          filteredTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              expanded={expandedTopic === topic.id}
              onToggle={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

const TopicCard = ({ topic, expanded, onToggle }: { topic: Topic; expanded: boolean; onToggle: () => void }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <button onClick={onToggle} className="flex w-full items-center justify-between p-5 text-left">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{topic.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{topic.description}</p>
        </div>
        <ChevronRight className={`ml-4 h-5 w-5 shrink-0 text-muted-foreground transition-transform ${expanded ? "rotate-90" : ""}`} />
      </button>

      {expanded && (
        <div className="border-t border-border bg-muted/30 px-5 py-4">
          {topic.formulas && topic.formulas.length > 0 && (
            <div className="mb-4">
              <h4 className="mb-2 text-sm font-semibold text-primary">Key Formulas</h4>
              <div className="flex flex-wrap gap-2">
                {topic.formulas.map((f, i) => (
                  <code key={i} className="rounded-md bg-primary/10 px-3 py-1.5 text-sm font-mono font-semibold text-primary">
                    {f}
                  </code>
                ))}
              </div>
            </div>
          )}
          <div>
            <h4 className="mb-2 text-sm font-semibold text-foreground">Key Points</h4>
            <ul className="grid gap-2 sm:grid-cols-2">
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
    </div>
  );
};

export default Topics;
