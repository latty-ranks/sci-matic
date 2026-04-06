interface ClassLevelSelectorProps {
  selected: number;
  onChange: (level: number) => void;
}

const ClassLevelSelector = ({ selected, onChange }: ClassLevelSelectorProps) => {
  const levels = [1, 2, 3, 4];

  return (
    <div className="flex gap-2">
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onChange(level)}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
            selected === level
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
          }`}
        >
          S.{level}
        </button>
      ))}
    </div>
  );
};

export default ClassLevelSelector;
