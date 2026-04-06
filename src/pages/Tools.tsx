import { useState } from "react";
import { Calculator, Triangle, Square, Circle } from "lucide-react";

const Tools = () => {
  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">Math Tools</h1>
        <p className="text-muted-foreground">Interactive calculators to help you solve problems</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <PythagorasCalculator />
        <AreaCalculator />
        <QuadraticSolver />
        <TrigCalculator />
      </div>
    </div>
  );
};

const ToolCard = ({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) => (
  <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-math/10">
        <Icon className="h-5 w-5 text-math" />
      </div>
      <h3 className="font-semibold text-foreground">{title}</h3>
    </div>
    {children}
  </div>
);

const InputField = ({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) => (
  <div>
    <label className="mb-1 block text-xs font-medium text-muted-foreground">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
    />
  </div>
);

const ResultDisplay = ({ label, value }: { label: string; value: string | null }) => {
  if (!value) return null;
  return (
    <div className="mt-4 rounded-lg bg-primary/10 p-3">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="text-lg font-bold text-primary">{value}</p>
    </div>
  );
};

const PythagorasCalculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    if (isNaN(aNum) || isNaN(bNum)) return;
    const c = Math.sqrt(aNum ** 2 + bNum ** 2);
    setResult(c.toFixed(4));
  };

  return (
    <ToolCard title="Pythagoras' Theorem" icon={Triangle}>
      <p className="mb-3 text-xs text-muted-foreground">Find the hypotenuse: c = √(a² + b²)</p>
      <div className="grid grid-cols-2 gap-3">
        <InputField label="Side a" value={a} onChange={setA} placeholder="3" />
        <InputField label="Side b" value={b} onChange={setB} placeholder="4" />
      </div>
      <button onClick={calculate} className="mt-3 w-full rounded-lg bg-math py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
        Calculate
      </button>
      <ResultDisplay label="Hypotenuse (c)" value={result} />
    </ToolCard>
  );
};

const AreaCalculator = () => {
  const [shape, setShape] = useState<"rectangle" | "circle" | "triangle">("rectangle");
  const [dim1, setDim1] = useState("");
  const [dim2, setDim2] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const d1 = parseFloat(dim1);
    const d2 = parseFloat(dim2);
    if (isNaN(d1)) return;
    let area: number;
    if (shape === "rectangle") {
      if (isNaN(d2)) return;
      area = d1 * d2;
    } else if (shape === "circle") {
      area = Math.PI * d1 ** 2;
    } else {
      if (isNaN(d2)) return;
      area = 0.5 * d1 * d2;
    }
    setResult(area.toFixed(4));
  };

  return (
    <ToolCard title="Area Calculator" icon={Square}>
      <div className="mb-3 flex gap-2">
        {(["rectangle", "circle", "triangle"] as const).map((s) => (
          <button
            key={s}
            onClick={() => { setShape(s); setResult(null); }}
            className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
              shape === s ? "bg-math text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <InputField
          label={shape === "circle" ? "Radius" : shape === "triangle" ? "Base" : "Length"}
          value={dim1}
          onChange={setDim1}
        />
        {shape !== "circle" && (
          <InputField
            label={shape === "triangle" ? "Height" : "Width"}
            value={dim2}
            onChange={setDim2}
          />
        )}
      </div>
      <button onClick={calculate} className="mt-3 w-full rounded-lg bg-math py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
        Calculate Area
      </button>
      <ResultDisplay label="Area" value={result ? `${result} sq. units` : null} />
    </ToolCard>
  );
};

const QuadraticSolver = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);
    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum) || aNum === 0) return;
    const disc = bNum ** 2 - 4 * aNum * cNum;
    if (disc < 0) {
      setResult("No real roots (discriminant < 0)");
    } else if (disc === 0) {
      const x = -bNum / (2 * aNum);
      setResult(`x = ${x.toFixed(4)} (repeated root)`);
    } else {
      const x1 = (-bNum + Math.sqrt(disc)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(disc)) / (2 * aNum);
      setResult(`x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`);
    }
  };

  return (
    <ToolCard title="Quadratic Solver" icon={Calculator}>
      <p className="mb-3 text-xs text-muted-foreground">Solve ax² + bx + c = 0</p>
      <div className="grid grid-cols-3 gap-3">
        <InputField label="a" value={a} onChange={setA} placeholder="1" />
        <InputField label="b" value={b} onChange={setB} placeholder="-5" />
        <InputField label="c" value={c} onChange={setC} placeholder="6" />
      </div>
      <button onClick={calculate} className="mt-3 w-full rounded-lg bg-math py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
        Solve
      </button>
      <ResultDisplay label="Solutions" value={result} />
    </ToolCard>
  );
};

const TrigCalculator = () => {
  const [angle, setAngle] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const deg = parseFloat(angle);
    if (isNaN(deg)) return;
    const rad = (deg * Math.PI) / 180;
    const sin = Math.sin(rad).toFixed(4);
    const cos = Math.cos(rad).toFixed(4);
    const tan = Math.abs(deg % 180) === 90 ? "undefined" : Math.tan(rad).toFixed(4);
    setResult(`sin = ${sin}, cos = ${cos}, tan = ${tan}`);
  };

  return (
    <ToolCard title="Trigonometry" icon={Circle}>
      <p className="mb-3 text-xs text-muted-foreground">Find sin, cos, tan of an angle</p>
      <InputField label="Angle (degrees)" value={angle} onChange={setAngle} placeholder="45" />
      <button onClick={calculate} className="mt-3 w-full rounded-lg bg-math py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90">
        Calculate
      </button>
      <ResultDisplay label="Results" value={result} />
    </ToolCard>
  );
};

export default Tools;
