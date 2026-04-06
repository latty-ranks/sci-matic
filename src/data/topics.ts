export interface Topic {
  id: string;
  title: string;
  subject: "math" | "physics" | "chemistry" | "biology";
  level: number;
  description: string;
  formulas?: string[];
  keyPoints: string[];
}

export const topics: Topic[] = [
  // MATH S1
  { id: "m1-1", title: "Number Systems", subject: "math", level: 1, description: "Natural numbers, integers, fractions, and decimals.", keyPoints: ["Place value", "Operations with fractions", "Converting decimals to fractions", "BODMAS rule"] },
  { id: "m1-2", title: "Basic Algebra", subject: "math", level: 1, description: "Introduction to variables, expressions and simple equations.", keyPoints: ["Variables and constants", "Simplifying expressions", "Solving linear equations", "Word problems"] },
  { id: "m1-3", title: "Geometry Basics", subject: "math", level: 1, description: "Lines, angles, triangles and basic shapes.", keyPoints: ["Types of angles", "Properties of triangles", "Perimeter and area", "Parallel and perpendicular lines"] },

  // MATH S2
  { id: "m2-1", title: "Pythagoras' Theorem", subject: "math", level: 2, description: "The relationship between the sides of a right-angled triangle.", formulas: ["a² + b² = c²", "c = √(a² + b²)", "a = √(c² - b²)"], keyPoints: ["Hypotenuse is the longest side", "Only works for right-angled triangles", "Pythagorean triples (3,4,5)", "Applications in real life"] },
  { id: "m2-2", title: "Trigonometry Basics", subject: "math", level: 2, description: "Sine, cosine and tangent ratios.", formulas: ["sin θ = opposite/hypotenuse", "cos θ = adjacent/hypotenuse", "tan θ = opposite/adjacent"], keyPoints: ["SOH CAH TOA", "Finding missing sides", "Finding missing angles", "Angles of elevation and depression"] },
  { id: "m2-3", title: "Simultaneous Equations", subject: "math", level: 2, description: "Solving two equations with two unknowns.", keyPoints: ["Substitution method", "Elimination method", "Graphical method", "Word problems"] },

  // MATH S3
  { id: "m3-1", title: "Quadratic Equations", subject: "math", level: 3, description: "Equations of the form ax² + bx + c = 0.", formulas: ["x = (-b ± √(b²-4ac)) / 2a"], keyPoints: ["Factorisation", "Completing the square", "Quadratic formula", "Nature of roots (discriminant)"] },
  { id: "m3-2", title: "Circle Theorems", subject: "math", level: 3, description: "Properties of circles, chords, tangents and arcs.", keyPoints: ["Angle at centre = 2× angle at circumference", "Angles in same segment are equal", "Tangent perpendicular to radius", "Cyclic quadrilateral properties"] },

  // MATH S4
  { id: "m4-1", title: "Matrices & Transformations", subject: "math", level: 4, description: "Matrix operations and geometric transformations.", keyPoints: ["Matrix addition/subtraction", "Matrix multiplication", "Determinant and inverse", "Reflection, rotation, enlargement"] },
  { id: "m4-2", title: "Statistics & Probability", subject: "math", level: 4, description: "Data analysis, probability and distributions.", keyPoints: ["Mean, median, mode", "Standard deviation", "Probability rules", "Cumulative frequency"] },

  // PHYSICS
  { id: "p1-1", title: "Measurement", subject: "physics", level: 1, description: "Units, instruments and measurement techniques.", keyPoints: ["SI units", "Vernier calipers", "Micrometer screw gauge", "Significant figures"] },
  { id: "p2-1", title: "Forces & Motion", subject: "physics", level: 2, description: "Newton's laws, speed, velocity and acceleration.", formulas: ["v = u + at", "s = ut + ½at²", "v² = u² + 2as", "F = ma"], keyPoints: ["Newton's three laws", "Free body diagrams", "Friction", "Momentum"] },
  { id: "p3-1", title: "Electricity", subject: "physics", level: 3, description: "Current, voltage, resistance and circuits.", formulas: ["V = IR", "P = IV", "R = R₁ + R₂ (series)", "1/R = 1/R₁ + 1/R₂ (parallel)"], keyPoints: ["Ohm's law", "Series vs parallel circuits", "Electrical energy", "Safety in electricity"] },
  { id: "p4-1", title: "Waves & Optics", subject: "physics", level: 4, description: "Properties of waves, light and sound.", formulas: ["v = fλ", "n = sin i / sin r"], keyPoints: ["Wave properties", "Reflection and refraction", "Snell's law", "Total internal reflection"] },

  // CHEMISTRY
  { id: "c1-1", title: "Introduction to Chemistry", subject: "chemistry", level: 1, description: "Matter, elements, compounds and mixtures.", keyPoints: ["States of matter", "Physical vs chemical changes", "Separation techniques", "Elements and symbols"] },
  { id: "c2-1", title: "Atomic Structure", subject: "chemistry", level: 2, description: "Atoms, ions, isotopes and electronic configuration.", keyPoints: ["Protons, neutrons, electrons", "Atomic and mass number", "Isotopes", "Electron arrangement"] },
  { id: "c3-1", title: "Chemical Bonding", subject: "chemistry", level: 3, description: "Ionic, covalent and metallic bonds.", keyPoints: ["Ionic bonding", "Covalent bonding", "Metallic bonding", "Properties of compounds"] },
  { id: "c4-1", title: "Organic Chemistry", subject: "chemistry", level: 4, description: "Hydrocarbons, functional groups and reactions.", keyPoints: ["Alkanes and alkenes", "Naming organic compounds", "Addition & substitution reactions", "Polymers"] },

  // BIOLOGY
  { id: "b1-1", title: "Cell Biology", subject: "biology", level: 1, description: "Cell structure, types and functions.", keyPoints: ["Plant vs animal cells", "Cell organelles", "Cell membrane", "Microscopy"] },
  { id: "b2-1", title: "Human Body Systems", subject: "biology", level: 2, description: "Digestive, circulatory and respiratory systems.", keyPoints: ["Digestive system", "Blood circulation", "Gas exchange", "Nutrients and enzymes"] },
  { id: "b3-1", title: "Ecology & Environment", subject: "biology", level: 3, description: "Ecosystems, food chains and conservation.", keyPoints: ["Food webs", "Energy flow", "Carbon and water cycles", "Environmental conservation"] },
  { id: "b4-1", title: "Genetics & Evolution", subject: "biology", level: 4, description: "Heredity, DNA, natural selection.", keyPoints: ["DNA structure", "Mendel's laws", "Genetic crosses", "Natural selection"] },
];
