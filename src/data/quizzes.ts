export interface QuizQuestion {
  id: string;
  topicId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export const quizQuestions: QuizQuestion[] = [
  // ═══════════════════════════════════════
  // MATHEMATICS
  // ═══════════════════════════════════════

  // Math S1 - Number Systems
  { id: "q-m1-1a", topicId: "m1-1", question: "What is the LCM of 12 and 18?", options: ["6", "36", "72", "24"], correctIndex: 1, explanation: "12 = 2²×3, 18 = 2×3². LCM = 2²×3² = 36." },
  { id: "q-m1-1b", topicId: "m1-1", question: "What is ¾ + ⅔?", options: ["7/12", "17/12", "5/7", "1"], correctIndex: 1, explanation: "¾ + ⅔ = 9/12 + 8/12 = 17/12." },
  { id: "q-m1-1c", topicId: "m1-1", question: "Using BODMAS, evaluate: 3 + 4 × 2", options: ["14", "11", "10", "9"], correctIndex: 1, explanation: "Multiplication first: 4×2=8, then 3+8=11." },

  // Math S1 - Basic Algebra
  { id: "q-m1-2a", topicId: "m1-2", question: "Solve: 2x + 5 = 13", options: ["x = 3", "x = 4", "x = 9", "x = 6"], correctIndex: 1, explanation: "2x = 13 - 5 = 8, x = 4." },
  { id: "q-m1-2b", topicId: "m1-2", question: "Simplify: 3a + 2b + 4a - b", options: ["7a + b", "7a + 3b", "7ab", "7a - b"], correctIndex: 0, explanation: "Combine like terms: (3a+4a)=7a, (2b-b)=b." },
  { id: "q-m1-2c", topicId: "m1-2", question: "If y = 3, what is 2y² + 1?", options: ["19", "13", "7", "10"], correctIndex: 0, explanation: "2(3²)+1 = 2(9)+1 = 19." },

  // Math S1 - Geometry Basics
  { id: "q-m1-3a", topicId: "m1-3", question: "What is the sum of angles in a triangle?", options: ["90°", "180°", "270°", "360°"], correctIndex: 1 },
  { id: "q-m1-3b", topicId: "m1-3", question: "An angle of 135° is called:", options: ["Acute", "Right", "Obtuse", "Reflex"], correctIndex: 2, explanation: "Obtuse angles are between 90° and 180°." },

  // Math S1 - Fractions, Decimals & Percentages
  { id: "q-m1-4a", topicId: "m1-4", question: "What is 25% of 240?", options: ["48", "60", "50", "72"], correctIndex: 1, explanation: "25/100 × 240 = 60." },
  { id: "q-m1-4b", topicId: "m1-4", question: "Convert 0.375 to a fraction:", options: ["3/8", "3/7", "37/100", "5/8"], correctIndex: 0 },

  // Math S1 - Ratio and Proportion
  { id: "q-m1-5a", topicId: "m1-5", question: "Share 120 in the ratio 3:5. What is the larger share?", options: ["45", "60", "75", "80"], correctIndex: 2, explanation: "Total parts = 8. Larger = 5/8 × 120 = 75." },

  // Math S1 - Area and Perimeter
  { id: "q-m1-6a", topicId: "m1-6", question: "Area of a circle with radius 7 cm (use π = 22/7):", options: ["44 cm²", "154 cm²", "22 cm²", "308 cm²"], correctIndex: 1, explanation: "πr² = 22/7 × 49 = 154 cm²." },
  { id: "q-m1-6b", topicId: "m1-6", question: "Perimeter of a rectangle 8 cm by 5 cm:", options: ["40 cm", "26 cm", "13 cm", "80 cm"], correctIndex: 1, explanation: "P = 2(8+5) = 26 cm." },

  // Math S1 - Indices
  { id: "q-m1-7a", topicId: "m1-7", question: "Simplify: 2³ × 2⁴", options: ["2⁷", "2¹²", "4⁷", "2¹"], correctIndex: 0, explanation: "Same base: add indices. 2³⁺⁴ = 2⁷." },
  { id: "q-m1-7b", topicId: "m1-7", question: "What is 5⁰?", options: ["0", "5", "1", "50"], correctIndex: 2, explanation: "Any number to the power 0 equals 1." },

  // Math S2 - Pythagoras' Theorem
  { id: "q-m2-1a", topicId: "m2-1", question: "A right triangle has legs 3 and 4. What is the hypotenuse?", options: ["5", "6", "7", "25"], correctIndex: 0, explanation: "c = √(9+16) = √25 = 5." },
  { id: "q-m2-1b", topicId: "m2-1", question: "Hypotenuse is 13, one leg is 5. Find the other leg.", options: ["8", "12", "10", "14"], correctIndex: 1, explanation: "a = √(169-25) = √144 = 12." },

  // Math S2 - Trigonometry
  { id: "q-m2-2a", topicId: "m2-2", question: "In SOH CAH TOA, what does TOA stand for?", options: ["Tangent = Opposite / Adjacent", "Tangent = Adjacent / Opposite", "Tangent = Opposite / Hypotenuse", "Tan = Opposite × Adjacent"], correctIndex: 0 },
  { id: "q-m2-2b", topicId: "m2-2", question: "sin 30° equals:", options: ["1", "√3/2", "1/2", "√2/2"], correctIndex: 2 },

  // Math S2 - Simultaneous Equations
  { id: "q-m2-3a", topicId: "m2-3", question: "Solve: x + y = 7 and x - y = 3", options: ["x=5, y=2", "x=4, y=3", "x=3, y=4", "x=6, y=1"], correctIndex: 0, explanation: "Add equations: 2x=10, x=5. Then y=2." },

  // Math S2 - Linear Graphs
  { id: "q-m2-5a", topicId: "m2-5", question: "What is the gradient of y = 3x - 7?", options: ["-7", "3", "7", "-3"], correctIndex: 1, explanation: "In y=mx+c, m is the gradient. m=3." },

  // Math S3 - Quadratic Equations
  { id: "q-m3-1a", topicId: "m3-1", question: "Solve x² - 5x + 6 = 0", options: ["x=2, x=3", "x=-2, x=-3", "x=1, x=6", "x=-1, x=-6"], correctIndex: 0, explanation: "(x-2)(x-3)=0, so x=2 or x=3." },
  { id: "q-m3-1b", topicId: "m3-1", question: "In the quadratic formula, what is the discriminant?", options: ["b² - 4ac", "2a", "-b", "4ac"], correctIndex: 0 },

  // Math S3 - Circle Theorems
  { id: "q-m3-2a", topicId: "m3-2", question: "An angle at the centre is ___ the angle at the circumference.", options: ["Equal to", "Twice", "Half", "Three times"], correctIndex: 1 },

  // Math S4 - Calculus Intro
  { id: "q-m4-1a", topicId: "m4-1", question: "Differentiate y = x³", options: ["3x²", "x⁴/4", "3x", "x²"], correctIndex: 0, explanation: "dy/dx = 3x²." },
  { id: "q-m4-1b", topicId: "m4-1", question: "What is ∫2x dx?", options: ["x²+C", "2x²+C", "x+C", "2+C"], correctIndex: 0, explanation: "∫2x dx = x² + C." },

  // Math S4 - Matrices
  { id: "q-m4-2a", topicId: "m4-2", question: "A 2×3 matrix multiplied by a 3×2 matrix gives:", options: ["2×2 matrix", "3×3 matrix", "2×3 matrix", "Not possible"], correctIndex: 0 },

  // ═══════════════════════════════════════
  // PHYSICS
  // ═══════════════════════════════════════

  // Physics S1
  { id: "q-p1-1a", topicId: "p1-1", question: "What is the SI unit of length?", options: ["Centimetre", "Metre", "Kilometre", "Foot"], correctIndex: 1 },
  { id: "q-p1-1b", topicId: "p1-1", question: "Which instrument measures temperature?", options: ["Ammeter", "Voltmeter", "Thermometer", "Barometer"], correctIndex: 2 },
  { id: "q-p1-2a", topicId: "p1-2", question: "Density = ?", options: ["Mass × Volume", "Mass / Volume", "Volume / Mass", "Weight / Volume"], correctIndex: 1 },
  { id: "q-p1-2b", topicId: "p1-2", question: "An object with density less than water will:", options: ["Sink", "Float", "Dissolve", "Remain suspended"], correctIndex: 1 },

  // Physics S2
  { id: "q-p2-1a", topicId: "p2-1", question: "Speed = ?", options: ["Distance × Time", "Distance / Time", "Time / Distance", "Distance + Time"], correctIndex: 1 },
  { id: "q-p2-1b", topicId: "p2-1", question: "What is the unit of acceleration?", options: ["m/s", "m/s²", "km/h", "m²/s"], correctIndex: 1 },
  { id: "q-p2-2a", topicId: "p2-2", question: "According to Newton's 2nd law, F = ?", options: ["m/a", "ma", "m + a", "a/m"], correctIndex: 1 },
  { id: "q-p2-2b", topicId: "p2-2", question: "Weight is measured in:", options: ["Kilograms", "Newtons", "Metres", "Joules"], correctIndex: 1 },

  // Physics S3
  { id: "q-p3-1a", topicId: "p3-1", question: "Work done = ?", options: ["Force × Distance", "Force / Distance", "Force + Distance", "Force × Time"], correctIndex: 0 },
  { id: "q-p3-1b", topicId: "p3-1", question: "The SI unit of energy is:", options: ["Watt", "Joule", "Newton", "Pascal"], correctIndex: 1 },
  { id: "q-p3-2a", topicId: "p3-2", question: "Ohm's Law states V = ?", options: ["I/R", "IR", "R/I", "I+R"], correctIndex: 1 },
  { id: "q-p3-2b", topicId: "p3-2", question: "Resistance is measured in:", options: ["Amps", "Volts", "Ohms", "Watts"], correctIndex: 2 },

  // Physics S4
  { id: "q-p4-1a", topicId: "p4-1", question: "The speed of light is approximately:", options: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"], correctIndex: 1 },
  { id: "q-p4-1b", topicId: "p4-1", question: "Which wave does NOT need a medium?", options: ["Sound", "Water", "Electromagnetic", "Seismic P-wave"], correctIndex: 2 },
  { id: "q-p4-2a", topicId: "p4-2", question: "E = mc² relates energy to:", options: ["Momentum", "Mass", "Charge", "Volume"], correctIndex: 1 },
  { id: "q-p4-2b", topicId: "p4-2", question: "An atom's nucleus contains:", options: ["Electrons", "Protons and neutrons", "Only protons", "Photons"], correctIndex: 1 },

  // ═══════════════════════════════════════
  // CHEMISTRY
  // ═══════════════════════════════════════

  // Chemistry S1
  { id: "q-c1-1a", topicId: "c1-1", question: "Which is NOT a state of matter?", options: ["Solid", "Liquid", "Gas", "Energy"], correctIndex: 3 },
  { id: "q-c1-1b", topicId: "c1-1", question: "What happens to particles when heated?", options: ["Move slower", "Move faster", "Stop moving", "Shrink"], correctIndex: 1 },
  { id: "q-c1-2a", topicId: "c1-2", question: "A pure substance that cannot be broken down further is:", options: ["Compound", "Mixture", "Element", "Solution"], correctIndex: 2 },
  { id: "q-c1-2b", topicId: "c1-2", question: "Which separation technique uses boiling points?", options: ["Filtration", "Distillation", "Chromatography", "Decanting"], correctIndex: 1 },

  // Chemistry S2
  { id: "q-c2-1a", topicId: "c2-1", question: "The atomic number tells us the number of:", options: ["Neutrons", "Protons", "Electrons and neutrons", "Mass"], correctIndex: 1 },
  { id: "q-c2-1b", topicId: "c2-1", question: "How many electrons in the first shell?", options: ["1", "2", "8", "18"], correctIndex: 1 },
  { id: "q-c2-2a", topicId: "c2-2", question: "An ionic bond involves:", options: ["Sharing electrons", "Transferring electrons", "Sharing protons", "Magnetic attraction"], correctIndex: 1 },

  // Chemistry S3
  { id: "q-c3-1a", topicId: "c3-1", question: "Moles = ?", options: ["Mass × Mr", "Mass / Mr", "Mr / Mass", "Mass + Mr"], correctIndex: 1, explanation: "n = mass / molar mass." },
  { id: "q-c3-1b", topicId: "c3-1", question: "What is Avogadro's number?", options: ["6.02 × 10²³", "3.14 × 10²³", "6.02 × 10⁶", "1.6 × 10⁻¹⁹"], correctIndex: 0 },
  { id: "q-c3-2a", topicId: "c3-2", question: "In a reaction, the rate increases when:", options: ["Temperature decreases", "Concentration increases", "Surface area decreases", "Catalyst is removed"], correctIndex: 1 },

  // Chemistry S4
  { id: "q-c4-1a", topicId: "c4-1", question: "Methane (CH₄) is an example of:", options: ["Alkene", "Alkane", "Alkyne", "Alcohol"], correctIndex: 1 },
  { id: "q-c4-1b", topicId: "c4-1", question: "The functional group -OH belongs to:", options: ["Alkanes", "Carboxylic acids", "Alcohols", "Esters"], correctIndex: 2 },
  { id: "q-c4-2a", topicId: "c4-2", question: "In electrolysis, positive ions move to the:", options: ["Anode", "Cathode", "Electrolyte", "Switch"], correctIndex: 1 },

  // ═══════════════════════════════════════
  // BIOLOGY
  // ═══════════════════════════════════════

  // Biology S1
  { id: "q-b1-1a", topicId: "b1-1", question: "The basic unit of life is:", options: ["Tissue", "Organ", "Cell", "Organism"], correctIndex: 2 },
  { id: "q-b1-1b", topicId: "b1-1", question: "Which organelle is the 'powerhouse' of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], correctIndex: 2 },
  { id: "q-b1-1c", topicId: "b1-1", question: "Plant cells have ___ but animal cells do not:", options: ["Nucleus", "Cell wall", "Cytoplasm", "Ribosomes"], correctIndex: 1 },
  { id: "q-b1-2a", topicId: "b1-2", question: "Which kingdom includes mushrooms?", options: ["Plantae", "Animalia", "Fungi", "Protista"], correctIndex: 2 },

  // Biology S2
  { id: "q-b2-1a", topicId: "b2-1", question: "Photosynthesis produces:", options: ["CO₂ and water", "Glucose and oxygen", "Protein and fat", "Starch and CO₂"], correctIndex: 1 },
  { id: "q-b2-1b", topicId: "b2-1", question: "Where does photosynthesis occur?", options: ["Mitochondria", "Nucleus", "Chloroplast", "Ribosome"], correctIndex: 2 },
  { id: "q-b2-2a", topicId: "b2-2", question: "The main organ of the circulatory system is:", options: ["Lung", "Liver", "Heart", "Kidney"], correctIndex: 2 },
  { id: "q-b2-2b", topicId: "b2-2", question: "Which blood vessels carry blood away from the heart?", options: ["Veins", "Capillaries", "Arteries", "Venules"], correctIndex: 2 },

  // Biology S3
  { id: "q-b3-1a", topicId: "b3-1", question: "In Mendel's cross Tt × Tt, the ratio of tall to short is:", options: ["1:1", "3:1", "1:3", "2:1"], correctIndex: 1 },
  { id: "q-b3-1b", topicId: "b3-1", question: "DNA stands for:", options: ["Deoxyribonucleic Acid", "Dinitrogen Acid", "Deoxyribose Nucleic Atom", "Dynamic Nuclear Acid"], correctIndex: 0 },
  { id: "q-b3-2a", topicId: "b3-2", question: "Aerobic respiration needs:", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correctIndex: 1 },

  // Biology S4
  { id: "q-b4-1a", topicId: "b4-1", question: "Which is an example of a renewable resource?", options: ["Coal", "Oil", "Solar energy", "Natural gas"], correctIndex: 2 },
  { id: "q-b4-1b", topicId: "b4-1", question: "Deforestation leads to:", options: ["More rainfall", "Soil erosion", "Decreased CO₂", "Cooler climate"], correctIndex: 1 },
  { id: "q-b4-2a", topicId: "b4-2", question: "Natural selection was proposed by:", options: ["Mendel", "Darwin", "Pasteur", "Newton"], correctIndex: 1 },
  { id: "q-b4-2b", topicId: "b4-2", question: "Evolution is best defined as:", options: ["Sudden creation", "Change over generations", "Individual growth", "Cell division"], correctIndex: 1 },
];
