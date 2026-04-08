import { useState, useMemo } from "react";
import { CheckCircle2, XCircle, Trophy, RotateCcw, ArrowRight, BookOpen } from "lucide-react";
import ClassLevelSelector from "@/components/ClassLevelSelector";
import { topics } from "@/data/topics";
import { quizQuestions, QuizQuestion } from "@/data/quizzes";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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

type Phase = "setup" | "quiz" | "results";

const Quiz = () => {
  const [phase, setPhase] = useState<Phase>("setup");
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const availableTopics = useMemo(
    () => topics.filter((t) => t.subject === selectedSubject && t.level === selectedLevel),
    [selectedSubject, selectedLevel]
  );

  const questions = useMemo(() => {
    if (!selectedTopicId) return [];
    return quizQuestions.filter((q) => q.topicId === selectedTopicId);
  }, [selectedTopicId]);

  const currentQ: QuizQuestion | undefined = questions[currentIdx];
  const progress = questions.length > 0 ? ((currentIdx + (confirmed ? 1 : 0)) / questions.length) * 100 : 0;

  const startQuiz = (topicId: string) => {
    const qs = quizQuestions.filter((q) => q.topicId === topicId);
    if (qs.length === 0) return;
    setSelectedTopicId(topicId);
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setConfirmed(false);
    setAnswers([]);
    setPhase("quiz");
  };

  const confirmAnswer = () => {
    if (selectedAnswer === null) return;
    setConfirmed(true);
    setAnswers((prev) => [...prev, parseInt(selectedAnswer)]);
  };

  const nextQuestion = () => {
    if (currentIdx + 1 >= questions.length) {
      setPhase("results");
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedAnswer(null);
      setConfirmed(false);
    }
  };

  const resetQuiz = () => {
    setPhase("setup");
    setSelectedTopicId(null);
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setConfirmed(false);
    setAnswers([]);
  };

  const score = answers.filter((a, i) => a === questions[i]?.correctIndex).length;

  // ── SETUP ──
  if (phase === "setup") {
    return (
      <div className="mx-auto min-h-screen max-w-4xl px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">Quiz &amp; Practice</h1>
          <p className="text-muted-foreground">Test your knowledge on any topic</p>
        </div>

        {/* Subject tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {Object.entries(subjectLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => { setSelectedSubject(key); setSelectedTopicId(null); }}
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
          <ClassLevelSelector selected={selectedLevel} onChange={(l) => { setSelectedLevel(l); setSelectedTopicId(null); }} />
        </div>

        {/* Topics */}
        <div className="grid gap-3 sm:grid-cols-2">
          {availableTopics.length === 0 ? (
            <div className="col-span-full rounded-xl border border-border bg-card p-8 text-center">
              <BookOpen className="mx-auto mb-3 h-10 w-10 text-muted-foreground/50" />
              <p className="text-muted-foreground">No topics available yet for this level.</p>
            </div>
          ) : (
            availableTopics.map((topic) => {
              const count = quizQuestions.filter((q) => q.topicId === topic.id).length;
              return (
                <button
                  key={topic.id}
                  disabled={count === 0}
                  onClick={() => startQuiz(topic.id)}
                  className="group rounded-xl border border-border bg-card p-5 text-left shadow-sm transition-all hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{topic.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{topic.description}</p>
                  <p className="mt-2 text-xs font-medium text-primary">
                    {count > 0 ? `${count} question${count > 1 ? "s" : ""}` : "Coming soon"}
                  </p>
                </button>
              );
            })
          )}
        </div>
      </div>
    );
  }

  // ── RESULTS ──
  if (phase === "results") {
    const pct = Math.round((score / questions.length) * 100);
    const topicTitle = topics.find((t) => t.id === selectedTopicId)?.title || "";
    return (
      <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-4 py-12">
        <Card className="w-full text-center">
          <CardHeader>
            <Trophy className={`mx-auto h-16 w-16 ${pct >= 70 ? "text-secondary" : "text-muted-foreground"}`} />
            <CardTitle className="mt-4 text-2xl">Quiz Complete!</CardTitle>
            <p className="text-muted-foreground">{topicTitle}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-5xl font-bold text-foreground">{pct}%</p>
              <p className="mt-1 text-muted-foreground">{score} of {questions.length} correct</p>
            </div>
            <Progress value={pct} className="h-3" />
            <p className="text-sm text-muted-foreground">
              {pct >= 80 ? "Excellent work! 🎉" : pct >= 60 ? "Good effort! Keep practising." : "Keep studying — you'll get there! 💪"}
            </p>

            {/* Review answers */}
            <div className="space-y-3 text-left">
              {questions.map((q, i) => {
                const correct = answers[i] === q.correctIndex;
                return (
                  <div key={q.id} className={`rounded-lg border p-3 ${correct ? "border-success/40 bg-success/5" : "border-destructive/40 bg-destructive/5"}`}>
                    <p className="text-sm font-medium text-foreground">{i + 1}. {q.question}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Your answer: <span className={correct ? "text-success font-semibold" : "text-destructive font-semibold"}>{q.options[answers[i]!]}</span>
                      {!correct && <> · Correct: <span className="text-success font-semibold">{q.options[q.correctIndex]}</span></>}
                    </p>
                    {q.explanation && <p className="mt-1 text-xs text-muted-foreground italic">{q.explanation}</p>}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Button onClick={() => startQuiz(selectedTopicId!)} variant="default">
                <RotateCcw className="mr-2 h-4 w-4" /> Retry
              </Button>
              <Button onClick={resetQuiz} variant="outline">Choose another topic</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ── QUIZ ──
  if (!currentQ) return null;
  const isCorrect = confirmed && parseInt(selectedAnswer!) === currentQ.correctIndex;
  const isWrong = confirmed && parseInt(selectedAnswer!) !== currentQ.correctIndex;

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 py-8">
      {/* Progress bar */}
      <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
        <span>Question {currentIdx + 1} of {questions.length}</span>
        <button onClick={resetQuiz} className="text-xs underline hover:text-foreground">Exit quiz</button>
      </div>
      <Progress value={progress} className="mb-8 h-2" />

      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-lg leading-relaxed">{currentQ.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={selectedAnswer ?? ""}
            onValueChange={(v) => !confirmed && setSelectedAnswer(v)}
            className="space-y-3"
          >
            {currentQ.options.map((opt, i) => {
              const idx = String(i);
              let ring = "";
              if (confirmed && i === currentQ.correctIndex) ring = "border-success bg-success/10";
              else if (confirmed && parseInt(selectedAnswer!) === i && i !== currentQ.correctIndex) ring = "border-destructive bg-destructive/10";

              return (
                <label
                  key={i}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-all ${
                    ring || (selectedAnswer === idx ? "border-primary bg-primary/5" : "border-border hover:border-primary/40")
                  } ${confirmed ? "pointer-events-none" : ""}`}
                >
                  <RadioGroupItem value={idx} id={`opt-${i}`} />
                  <span className="text-sm text-foreground">{opt}</span>
                  {confirmed && i === currentQ.correctIndex && <CheckCircle2 className="ml-auto h-5 w-5 text-success" />}
                  {confirmed && parseInt(selectedAnswer!) === i && i !== currentQ.correctIndex && <XCircle className="ml-auto h-5 w-5 text-destructive" />}
                </label>
              );
            })}
          </RadioGroup>

          {/* Explanation */}
          {confirmed && currentQ.explanation && (
            <div className="rounded-lg bg-muted p-3 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Explanation:</span> {currentQ.explanation}
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-2">
            {!confirmed ? (
              <Button onClick={confirmAnswer} disabled={selectedAnswer === null}>
                Check Answer
              </Button>
            ) : (
              <Button onClick={nextQuestion}>
                {currentIdx + 1 >= questions.length ? "See Results" : "Next"} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;
