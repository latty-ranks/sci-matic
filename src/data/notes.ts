export interface NoteSection {
  heading: string;
  content: string;
}

export interface TopicNote {
  topicId: string;
  sections: NoteSection[];
  examples?: { problem: string; solution: string }[];
}

export const topicNotes: TopicNote[] = [
  // ═══════════════════════════════════════════
  // MATHEMATICS
  // ═══════════════════════════════════════════

  // ── MATH S1 ──

  {
    topicId: "m1-1",
    sections: [
      { heading: "Introduction", content: "Number systems form the foundation of all mathematics. In Senior 1, you learn about natural numbers (1, 2, 3, …), whole numbers (0, 1, 2, …), integers (… -2, -1, 0, 1, 2 …), fractions, and decimals." },
      { heading: "Place Value", content: "Every digit in a number has a place value. For example, in 3 472: 3 is in the thousands place, 4 in hundreds, 7 in tens, and 2 in ones." },
      { heading: "BODMAS Rule", content: "When evaluating expressions, follow the order: Brackets → Orders (powers) → Division → Multiplication → Addition → Subtraction. Example: 3 + 4 × 2 = 3 + 8 = 11 (NOT 14)." },
      { heading: "Fractions", content: "A fraction a/b represents 'a' parts out of 'b' equal parts. To add fractions with different denominators, find the LCM of the denominators. Example: ¾ + ⅔ = 9/12 + 8/12 = 17/12." },
      { heading: "LCM and HCF", content: "LCM (Lowest Common Multiple) is the smallest number divisible by both numbers. HCF (Highest Common Factor) is the largest number that divides both numbers exactly. Use prime factorisation to find them." },
      { heading: "Prime Factorisation", content: "Express a number as a product of prime factors. Example: 60 = 2² × 3 × 5. This helps in finding LCM and HCF." },
    ],
    examples: [
      { problem: "Find the LCM of 12 and 18.", solution: "12 = 2² × 3, 18 = 2 × 3². LCM = 2² × 3² = 36." },
      { problem: "Evaluate: 5 + 3 × (8 - 2)", solution: "Brackets first: 8 - 2 = 6. Then multiply: 3 × 6 = 18. Then add: 5 + 18 = 23." },
    ],
  },
  {
    topicId: "m1-2",
    sections: [
      { heading: "Introduction", content: "Algebra uses letters (variables) to represent unknown numbers. It allows us to write general rules and solve problems." },
      { heading: "Variables and Constants", content: "A variable (like x, y) can take different values. A constant (like 5, -3) has a fixed value. In the expression 3x + 7, '3x' is a variable term and '7' is a constant." },
      { heading: "Simplifying Expressions", content: "Combine like terms (terms with the same variable). Example: 3a + 5b + 2a - b = (3a + 2a) + (5b - b) = 5a + 4b." },
      { heading: "Solving Linear Equations", content: "To solve ax + b = c: subtract b from both sides, then divide by a. Example: 2x + 5 = 13 → 2x = 8 → x = 4." },
      { heading: "Substitution", content: "Replace the variable with a given value. Example: If y = 3, find 2y² + 1 = 2(9) + 1 = 19." },
    ],
    examples: [
      { problem: "Solve: 3x - 7 = 14", solution: "3x = 14 + 7 = 21. x = 21 ÷ 3 = 7." },
      { problem: "Simplify: 4m + 3n - 2m + 5n", solution: "(4m - 2m) + (3n + 5n) = 2m + 8n." },
    ],
  },
  {
    topicId: "m1-3",
    sections: [
      { heading: "Introduction", content: "Geometry is the study of shapes, sizes and positions. In S.1, we study points, lines, angles, and basic shapes like triangles." },
      { heading: "Types of Angles", content: "Acute: less than 90°. Right: exactly 90°. Obtuse: between 90° and 180°. Straight: 180°. Reflex: between 180° and 360°." },
      { heading: "Angles on Lines", content: "Angles on a straight line add up to 180°. Angles at a point add up to 360°. Vertically opposite angles are equal." },
      { heading: "Angles on Parallel Lines", content: "When a transversal crosses parallel lines: Alternate angles are equal (Z-shape). Corresponding angles are equal (F-shape). Co-interior angles add up to 180° (C-shape)." },
      { heading: "Properties of Triangles", content: "Sum of interior angles = 180°. An equilateral triangle has all sides equal and all angles 60°. An isosceles triangle has two equal sides and two equal base angles." },
    ],
    examples: [
      { problem: "Two angles on a straight line are x° and 130°. Find x.", solution: "x + 130 = 180. x = 50°." },
    ],
  },
  {
    topicId: "m1-4",
    sections: [
      { heading: "Conversions", content: "Fraction to decimal: divide numerator by denominator (¾ = 0.75). Decimal to percentage: multiply by 100 (0.75 = 75%). Percentage to fraction: write over 100 and simplify (75% = 75/100 = ¾)." },
      { heading: "Percentage of a Quantity", content: "To find P% of Q: multiply P/100 × Q. Example: 20% of 350 = 0.2 × 350 = 70." },
      { heading: "Percentage Increase/Decrease", content: "Increase: New value = Original + (P% of Original). Decrease: New value = Original - (P% of Original). Percentage change = (change/original) × 100%." },
    ],
    examples: [
      { problem: "A shirt costs UGX 25,000. It is reduced by 15%. Find the new price.", solution: "Discount = 15% of 25,000 = 3,750. New price = 25,000 - 3,750 = UGX 21,250." },
    ],
  },
  {
    topicId: "m1-5",
    sections: [
      { heading: "Introduction", content: "A ratio compares two or more quantities. The ratio a:b means for every 'a' of the first, there are 'b' of the second." },
      { heading: "Simplifying Ratios", content: "Divide all parts by their HCF. Example: 12:18 → divide by 6 → 2:3." },
      { heading: "Dividing in a Ratio", content: "Add total parts, then share. Example: Share 200 in ratio 3:2. Total = 5 parts. First share = 3/5 × 200 = 120. Second share = 2/5 × 200 = 80." },
      { heading: "Direct Proportion", content: "Two quantities are in direct proportion if they increase or decrease together at the same rate. Use the unitary method: find the value of one unit first." },
    ],
    examples: [
      { problem: "If 5 books cost UGX 15,000, how much do 8 books cost?", solution: "1 book = 15,000 ÷ 5 = 3,000. 8 books = 3,000 × 8 = UGX 24,000." },
    ],
  },
  {
    topicId: "m1-6",
    sections: [
      { heading: "Rectangles and Squares", content: "Rectangle: Area = length × width, Perimeter = 2(l + w). Square: Area = s², Perimeter = 4s." },
      { heading: "Triangles", content: "Area = ½ × base × height. The height must be perpendicular to the base." },
      { heading: "Circles", content: "Circumference = 2πr = πd. Area = πr². Use π = 22/7 or 3.14 unless told otherwise." },
      { heading: "Composite Shapes", content: "Break the shape into simpler shapes (rectangles, triangles, semicircles). Find each area separately and add or subtract." },
    ],
    examples: [
      { problem: "Find the area of a circle with diameter 14 cm.", solution: "Radius = 7 cm. Area = πr² = 22/7 × 7 × 7 = 154 cm²." },
    ],
  },
  {
    topicId: "m1-7",
    sections: [
      { heading: "Laws of Indices", content: "Multiplication: aᵐ × aⁿ = aᵐ⁺ⁿ. Division: aᵐ ÷ aⁿ = aᵐ⁻ⁿ. Power of a power: (aᵐ)ⁿ = aᵐⁿ. Zero index: a⁰ = 1. Negative index: a⁻ⁿ = 1/aⁿ." },
      { heading: "Standard Form", content: "A number in standard form is written as A × 10ⁿ where 1 ≤ A < 10. Example: 45,000 = 4.5 × 10⁴. Example: 0.003 = 3 × 10⁻³." },
    ],
    examples: [
      { problem: "Simplify: (2³)² × 2⁴", solution: "(2³)² = 2⁶. Then 2⁶ × 2⁴ = 2¹⁰ = 1024." },
    ],
  },

  // ── MATH S2 ──

  {
    topicId: "m2-1",
    sections: [
      { heading: "The Theorem", content: "In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides: a² + b² = c², where c is the hypotenuse (longest side, opposite the right angle)." },
      { heading: "Finding the Hypotenuse", content: "c = √(a² + b²). Example: If a = 6 and b = 8, then c = √(36 + 64) = √100 = 10." },
      { heading: "Finding a Shorter Side", content: "a = √(c² - b²). Example: If c = 13 and b = 5, then a = √(169 - 25) = √144 = 12." },
      { heading: "Pythagorean Triples", content: "Common sets: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25). Multiples also work: (6, 8, 10) is 2×(3, 4, 5)." },
    ],
    examples: [
      { problem: "A ladder 10 m long leans against a wall. The foot is 6 m from the wall. How high up the wall does it reach?", solution: "h = √(10² - 6²) = √(100 - 36) = √64 = 8 m." },
    ],
  },
  {
    topicId: "m2-2",
    sections: [
      { heading: "Trigonometric Ratios (SOH CAH TOA)", content: "sin θ = Opposite / Hypotenuse. cos θ = Adjacent / Hypotenuse. tan θ = Opposite / Adjacent. Memory aid: SOH CAH TOA." },
      { heading: "Finding a Missing Side", content: "Identify the sides relative to the angle. Choose the correct ratio. Substitute and solve." },
      { heading: "Finding a Missing Angle", content: "Use the inverse function: θ = sin⁻¹(O/H), θ = cos⁻¹(A/H), or θ = tan⁻¹(O/A)." },
      { heading: "Angles of Elevation and Depression", content: "Angle of elevation: looking UP from horizontal. Angle of depression: looking DOWN from horizontal. Both are measured from the horizontal." },
      { heading: "Special Angles", content: "sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3. sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1. sin 60° = √3/2, cos 60° = ½, tan 60° = √3." },
    ],
    examples: [
      { problem: "A tree casts a shadow 12 m long. The angle of elevation of the sun is 40°. Find the height of the tree.", solution: "tan 40° = height/12. Height = 12 × tan 40° = 12 × 0.839 = 10.07 m." },
    ],
  },
  {
    topicId: "m2-3",
    sections: [
      { heading: "Substitution Method", content: "Step 1: From one equation, express one variable in terms of the other. Step 2: Substitute into the second equation. Step 3: Solve for the remaining variable. Step 4: Back-substitute to find the other." },
      { heading: "Elimination Method", content: "Step 1: Make the coefficients of one variable the same. Step 2: Add or subtract the equations to eliminate that variable. Step 3: Solve and back-substitute." },
    ],
    examples: [
      { problem: "Solve: 2x + y = 7 and x - y = 2", solution: "Add both equations: 3x = 9, x = 3. From x - y = 2: 3 - y = 2, y = 1. Solution: x = 3, y = 1." },
    ],
  },
  {
    topicId: "m2-4",
    sections: [
      { heading: "Simplifying", content: "Factorise numerator and denominator, then cancel common factors. Example: (x² - 4)/(x + 2) = (x - 2)(x + 2)/(x + 2) = x - 2." },
      { heading: "Operations", content: "Addition/Subtraction: Find a common denominator first, just like numerical fractions. Multiplication: multiply numerators and denominators. Division: invert and multiply." },
    ],
  },
  {
    topicId: "m2-5",
    sections: [
      { heading: "Equation of a Line", content: "The general form is y = mx + c, where m = gradient (slope) and c = y-intercept. To find m between two points: m = (y₂ - y₁)/(x₂ - x₁)." },
      { heading: "Parallel and Perpendicular", content: "Parallel lines have equal gradients (m₁ = m₂). Perpendicular lines have gradients whose product is -1 (m₁ × m₂ = -1)." },
      { heading: "Distance-Time Graphs", content: "Gradient = speed. A flat line means stationary. A steeper line means faster speed." },
    ],
    examples: [
      { problem: "Find the gradient of the line through (1, 3) and (4, 9).", solution: "m = (9 - 3)/(4 - 1) = 6/3 = 2." },
    ],
  },
  {
    topicId: "m2-6",
    sections: [
      { heading: "Solving Inequalities", content: "Solve like equations, but reverse the sign when multiplying or dividing by a negative. Example: -2x > 6 → x < -3." },
      { heading: "Number Line Representation", content: "Open circle ○ for < or >. Filled circle ● for ≤ or ≥. Shade the region that satisfies the inequality." },
    ],
  },
  {
    topicId: "m2-7",
    sections: [
      { heading: "Set Notation", content: "∈ means 'is a member of'. ∪ is union (everything in both). ∩ is intersection (only what's shared). A' is the complement (everything NOT in A)." },
      { heading: "Venn Diagrams", content: "Use overlapping circles to show relationships. For two sets: n(A ∪ B) = n(A) + n(B) - n(A ∩ B). Start filling from the intersection." },
    ],
    examples: [
      { problem: "In a class of 40: 25 play football, 20 play netball, 10 play both. How many play neither?", solution: "n(F ∪ N) = 25 + 20 - 10 = 35. Neither = 40 - 35 = 5." },
    ],
  },
  {
    topicId: "m2-8",
    sections: [
      { heading: "Reflection", content: "A mirror image across a line. Reflect across x-axis: (x, y) → (x, -y). Across y-axis: (x, y) → (-x, y). Across y = x: (x, y) → (y, x)." },
      { heading: "Rotation", content: "Turn about a fixed point (centre of rotation) by a given angle. Clockwise is negative, anticlockwise is positive." },
      { heading: "Translation", content: "Slide by a vector (a, b). Every point moves 'a' units right and 'b' units up." },
      { heading: "Enlargement", content: "Scale from a centre by a scale factor k. Distances from centre multiply by k. If k > 1 shape gets bigger, if 0 < k < 1 it shrinks." },
    ],
  },

  // ── MATH S3 ──

  {
    topicId: "m3-1",
    sections: [
      { heading: "Factorisation", content: "Write ax² + bx + c = 0. Find two numbers that multiply to ac and add to b. Example: x² - 5x + 6 = (x - 2)(x - 3) = 0, so x = 2 or x = 3." },
      { heading: "Completing the Square", content: "Write x² + bx as (x + b/2)² - (b/2)². Useful for finding the turning point of a parabola." },
      { heading: "Quadratic Formula", content: "x = (-b ± √(b² - 4ac)) / 2a. Works for ALL quadratics. The discriminant Δ = b² - 4ac tells us: Δ > 0 → two real roots, Δ = 0 → one repeated root, Δ < 0 → no real roots." },
    ],
    examples: [
      { problem: "Solve: 2x² + 5x - 3 = 0", solution: "a=2, b=5, c=-3. x = (-5 ± √(25+24))/4 = (-5 ± 7)/4. x = ½ or x = -3." },
    ],
  },
  {
    topicId: "m3-2",
    sections: [
      { heading: "Key Theorems", content: "1) Angle at centre = 2 × angle at circumference. 2) Angles in the same segment are equal. 3) Angle in a semicircle = 90°. 4) Opposite angles of a cyclic quadrilateral sum to 180°." },
      { heading: "Tangent Properties", content: "A tangent is perpendicular to the radius at the point of contact. Two tangents from an external point are equal in length. Alternate segment theorem: angle between tangent and chord = angle in alternate segment." },
      { heading: "Arc Length and Sector Area", content: "Arc length = (θ/360) × 2πr. Sector area = (θ/360) × πr²." },
    ],
  },
  {
    topicId: "m3-3",
    sections: [
      { heading: "Arithmetic Progressions (AP)", content: "Common difference d = a₂ - a₁. nth term: aₙ = a + (n-1)d. Sum of n terms: Sₙ = n/2 [2a + (n-1)d] or Sₙ = n/2 (first + last)." },
      { heading: "Geometric Progressions (GP)", content: "Common ratio r = a₂/a₁. nth term: aₙ = arⁿ⁻¹. Sum of n terms: Sₙ = a(rⁿ - 1)/(r - 1) when r ≠ 1. Sum to infinity (|r| < 1): S∞ = a/(1 - r)." },
    ],
    examples: [
      { problem: "Find the 10th term of the AP: 3, 7, 11, 15, …", solution: "a = 3, d = 4. a₁₀ = 3 + (10-1)(4) = 3 + 36 = 39." },
    ],
  },
  {
    topicId: "m3-4",
    sections: [
      { heading: "Sine Rule", content: "a/sin A = b/sin B = c/sin C. Used when you know: two angles and one side, OR two sides and an angle opposite one of them." },
      { heading: "Cosine Rule", content: "a² = b² + c² - 2bc cos A. Used when you know: all three sides (to find an angle), OR two sides and the included angle (to find the third side)." },
      { heading: "Area of Triangle", content: "Area = ½ab sin C, where a and b are two sides and C is the included angle." },
    ],
    examples: [
      { problem: "In triangle ABC, a = 8, b = 6, C = 60°. Find the area.", solution: "Area = ½ × 8 × 6 × sin 60° = 24 × (√3/2) = 12√3 ≈ 20.78 square units." },
    ],
  },
  {
    topicId: "m3-5",
    sections: [
      { heading: "Direct Variation", content: "y ∝ x means y = kx. As x increases, y increases proportionally. Find k using given values." },
      { heading: "Inverse Variation", content: "y ∝ 1/x means y = k/x. As x increases, y decreases." },
      { heading: "Joint Variation", content: "y varies jointly as x and z: y = kxz. Partial variation: y = kx + c (part varies, part constant)." },
    ],
  },
  {
    topicId: "m3-6",
    sections: [
      { heading: "Definition", content: "If aˣ = b, then x = logₐ b. Example: 2³ = 8, so log₂ 8 = 3." },
      { heading: "Laws of Logarithms", content: "log(ab) = log a + log b. log(a/b) = log a - log b. log aⁿ = n log a. log 1 = 0. logₐ a = 1." },
      { heading: "Solving Exponential Equations", content: "Take log of both sides. Example: 3ˣ = 20 → x = log 20 / log 3 ≈ 2.727." },
    ],
  },

  // ── MATH S4 ──

  {
    topicId: "m4-1",
    sections: [
      { heading: "Matrix Operations", content: "Addition/subtraction: add/subtract corresponding elements (same order only). Scalar multiplication: multiply every element. Matrix multiplication: row × column (order matters!)." },
      { heading: "Determinant and Inverse", content: "For 2×2 matrix [a b; c d]: det = ad - bc. If det ≠ 0, inverse = (1/det)[d -b; -c a]. A matrix with det = 0 is singular (no inverse)." },
      { heading: "Transformation Matrices", content: "Reflection in x-axis: [1 0; 0 -1]. Reflection in y-axis: [-1 0; 0 1]. Rotation 90° anticlockwise: [0 -1; 1 0]. Enlargement scale factor k: [k 0; 0 k]." },
    ],
  },
  {
    topicId: "m4-2",
    sections: [
      { heading: "Measures of Central Tendency", content: "Mean = Σx/n (or Σfx/Σf for grouped data). Median: middle value when arranged in order. Mode: most frequent value." },
      { heading: "Standard Deviation", content: "σ = √(Σ(x - x̄)²/n). A smaller σ means data is closely packed around the mean." },
      { heading: "Probability", content: "P(event) = favourable outcomes / total outcomes. P(A or B) = P(A) + P(B) - P(A and B). P(A and B) = P(A) × P(B) for independent events." },
      { heading: "Cumulative Frequency", content: "Add frequencies cumulatively. Plot an S-curve. Read off median (n/2), lower quartile (n/4), upper quartile (3n/4). Interquartile range = Q3 - Q1." },
    ],
  },
  {
    topicId: "m4-3",
    sections: [
      { heading: "Column Vectors", content: "A vector is written as (x, y) representing movement x in the horizontal and y in the vertical direction. Magnitude: |v| = √(x² + y²)." },
      { heading: "Vector Operations", content: "Addition: (a,b) + (c,d) = (a+c, b+d). Scalar multiplication: k(a,b) = (ka, kb). Subtraction: AB = OB - OA." },
      { heading: "Midpoint", content: "Midpoint of A and B = (OA + OB)/2. To divide in ratio m:n use section formula." },
    ],
  },
  {
    topicId: "m4-4",
    sections: [
      { heading: "Differentiation Rules", content: "Power rule: d/dx (xⁿ) = nxⁿ⁻¹. Constant: d/dx (c) = 0. Sum rule: differentiate term by term." },
      { heading: "Applications", content: "Gradient at a point: substitute x into dy/dx. Tangent: y - y₁ = m(x - x₁) where m = dy/dx. Stationary points: set dy/dx = 0 and solve." },
      { heading: "Maximum and Minimum", content: "Find d²y/dx². If d²y/dx² > 0 → minimum. If d²y/dx² < 0 → maximum." },
    ],
    examples: [
      { problem: "Find the stationary points of y = x³ - 3x + 2.", solution: "dy/dx = 3x² - 3 = 0 → x² = 1 → x = ±1. At x=1: y=0 (min). At x=-1: y=4 (max)." },
    ],
  },
  {
    topicId: "m4-5",
    sections: [
      { heading: "Integration Rules", content: "∫xⁿ dx = xⁿ⁺¹/(n+1) + c (n ≠ -1). ∫k dx = kx + c. Integrate term by term." },
      { heading: "Definite Integrals", content: "∫ₐᵇ f(x) dx = F(b) - F(a). This gives the exact area under the curve between x = a and x = b." },
      { heading: "Area Under a Curve", content: "If the curve is below the x-axis, the integral is negative. Take the absolute value for area. For area between two curves: ∫(upper - lower) dx." },
    ],
  },
  {
    topicId: "m4-6",
    sections: [
      { heading: "Setting Up", content: "Read the problem and define variables. Write the constraints as inequalities. Write the objective function (what to maximise or minimise)." },
      { heading: "Graphical Solution", content: "Graph each inequality. Shade the unwanted region. The unshaded (feasible) region contains all possible solutions. Test vertices of the feasible region in the objective function." },
    ],
  },

  // ═══════════════════════════════════════════
  // PHYSICS (Expanded from Uganda curriculum)
  // ═══════════════════════════════════════════

  // ── PHYSICS S1 ──

  {
    topicId: "p1-1",
    sections: [
      { heading: "What is Physics?", content: "Physics is a Greek word meaning 'nature'. It is the study of matter and its relation to energy. Physics deals with natural phenomena and explains bulk properties of matter. A physicist explains how things work, from simple machines to the universe." },
      { heading: "Branches of Physics", content: "1. Mechanics – study of motion under the influence of force. 2. Electricity – movement of charge through conductors. 3. Magnetism – magnets and magnetic fields. 4. Thermodynamics/Heat – transformation of heat energy. 5. Optics – study of light. 6. Waves – study of disturbances through media. 7. Particle physics. 8. Nuclear physics. 9. Plasma physics." },
      { heading: "SI Units and Basic Quantities", content: "In 1971, the International System of Units (SI) established seven base quantities: Length (metre, m), Mass (kilogram, kg), Time (second, s), Electric current (ampere, A), Temperature (kelvin, K), Luminous intensity (candela, cd), Amount of substance (mole, mol). All other quantities are derived from these." },
      { heading: "Length, Area, and Volume", content: "Length is measured using a metre rule (100 cm), tape measure, vernier calipers (±0.01 cm) or micrometer screw gauge (±0.01 mm). Area = length × width (SI unit: m²). Volume is the amount of space occupied by matter (SI unit: m³). 1 m³ = 1,000,000 cm³. 1 litre = 1,000 cm³. Volume is measured using measuring cylinders, eureka cans, pipettes, burettes, and beakers." },
      { heading: "Mass", content: "Mass is the quantity of matter in a substance. SI unit: kilogram (kg). Sub-multiples: grams (g), milligrams (mg), tonnes (t). 1 kg = 1,000 g. Mass is measured using a beam balance. Mass is constant regardless of location, unlike weight." },
      { heading: "Density", content: "Density (ρ) = mass/volume. SI unit: kg/m³. Common densities: water = 1,000 kg/m³, ice = 920 kg/m³, iron = 7,860 kg/m³, aluminium = 2,700 kg/m³, mercury = 13,600 kg/m³, air = 1.31 kg/m³. To find density of irregular objects, use water displacement to measure volume." },
      { heading: "Relative Density", content: "Relative density (d) = density of substance / density of water. It has no units since it is a ratio. Measured using a relative density bottle. Example: If relative density of wood is 0.8, then density = 0.8 × 1,000 = 800 kg/m³." },
      { heading: "Density of Mixtures", content: "Density of mixture = total mass of mixture / total volume of mixture. When mixing two liquids, add their masses and volumes separately, then divide." },
      { heading: "Time and Accuracy", content: "Time is a measure of the duration of an event. SI unit: second (s). Measured using clocks, stopwatches, and digital watches. Accuracy is the closeness of a measurement to the true value. Error = deviation from the correct value. Percentage error = (sensitivity / size measured) × 100." },
      { heading: "Vernier Calipers", content: "Read main scale first, then find which vernier line aligns with a main scale line. Total reading = main scale reading + (vernier division × 0.01 cm). Can measure internal and external dimensions, and depth." },
      { heading: "Micrometer Screw Gauge", content: "Main scale reads in mm. Thimble scale has 50 divisions, each = 0.01 mm. Total reading = main scale + thimble reading. Used for measuring thickness of wires, sheets, and small objects." },
    ],
    examples: [
      { problem: "A block of glass of mass 187.5 g is 5.0 cm long, 2.0 cm thick and 7.5 cm high. Calculate the density in kg/m³.", solution: "Volume = 5.0 × 2.0 × 7.5 = 75 cm³ = 75 × 10⁻⁶ m³. Mass = 187.5 g = 0.1875 kg. Density = 0.1875 / 75 × 10⁻⁶ = 2,500 kg/m³." },
      { problem: "The density of concentrated sulphuric acid is 1.8 g/cm³. Calculate the volume of 3.1 kg of the acid.", solution: "Mass = 3,100 g. Volume = mass / density = 3,100 / 1.8 = 1,722 cm³." },
      { problem: "100 cm³ of fresh water (density 1,000 kg/m³) is mixed with 100 cm³ of sea water (density 1,030 kg/m³). Find the density of the mixture.", solution: "Mass of fresh water = 1,000 × 0.0001 = 0.1 kg. Mass of sea water = 1,030 × 0.0001 = 0.103 kg. Total mass = 0.203 kg. Total volume = 0.0002 m³. Density = 0.203 / 0.0002 = 1,015 kg/m³." },
    ],
  },
  {
    topicId: "p1-2",
    sections: [
      { heading: "States of Matter", content: "Matter exists in three states: solids, liquids, and gases. Matter can undergo physical changes (reversible, no new substance), chemical changes (irreversible, new substance formed), and nuclear changes (radioactive substances emit particles and transform)." },
      { heading: "Particle Model – Solids", content: "Individual atoms in solids have a small space between them. Forces of attraction are very strong. Particles vibrate in their fixed positions, giving solids a fixed shape and volume." },
      { heading: "Particle Model – Liquids", content: "Forces of attraction between liquid molecules are not as strong as in solids. Particles move short distances and collide with each other. Liquids take the shape of their container but have a definite volume." },
      { heading: "Particle Model – Gases", content: "Molecules in gases are far apart with very small forces of attraction. They are almost completely free of one another and move in rapid, random motion. Gases have no definite shape or volume — they fill their container completely." },
      { heading: "Diffusion", content: "Diffusion is the movement of molecules from regions of high concentration to regions of low concentration until equilibrium is reached. Gases diffuse faster than liquids because their particles move more freely. The rate of diffusion depends on the arrangement and speed of particles." },
      { heading: "Brownian Motion", content: "Random, zigzag motion of small particles (e.g., smoke particles in air) caused by collisions with invisible air molecules. First observed by Robert Brown in 1827 with pollen grains in water. This is key evidence for the kinetic theory of matter." },
      { heading: "Changes of State", content: "Melting: solid → liquid (absorbs heat). Boiling/Evaporation: liquid → gas (absorbs heat). Condensation: gas → liquid (releases heat). Freezing: liquid → solid (releases heat). Sublimation: solid → gas directly (e.g., dry ice, iodine crystals)." },
    ],
    examples: [
      { problem: "Explain why a drop of ink spreads in water even without stirring.", solution: "The ink molecules diffuse from a region of high concentration (the drop) to low concentration (the surrounding water). Water molecules also collide randomly with ink particles, spreading them throughout the liquid. This is evidence of the kinetic theory." },
    ],
  },
  {
    topicId: "p1-3",
    sections: [
      { heading: "What is Force?", content: "Force is a push or a pull that changes a body's state of motion or shape. The SI unit is the Newton (N). Force is a vector quantity — it has both magnitude and direction." },
      { heading: "Types of Forces", content: "1. Gravitational force – attraction between masses; Earth's pull is weight. 2. Friction – opposes relative motion of surfaces in contact; viscosity is friction in fluids. 3. Tension – pull or compression in a string or spring. 4. Upthrust – upward force on an object in a fluid. 5. Cohesive forces – attraction between molecules of the same kind. 6. Adhesive forces – attraction between molecules of different kinds. 7. Magnetic force – attraction/repulsion in magnets. 8. Electrostatic force – attraction/repulsion of charges. 9. Centripetal force – keeps a body moving in a circular path. 10. Surface tension – makes liquid surfaces behave like a stretched skin (a cohesive force)." },
      { heading: "Mass vs Weight", content: "Mass is the amount of matter (kg), constant everywhere, measured with a beam balance, scalar quantity. Weight is the gravitational pull on an object (N), changes with location, measured with a spring balance, vector quantity. Relationship: W = mg where g = gravitational field strength (≈ 10 N/kg on Earth)." },
      { heading: "Measuring Force – Spring Balance", content: "A spring balance uses the extension of a spring to measure force. It has a hook at the bottom for hanging loads and a scale to read the force. The extension is proportional to the applied force (Hooke's Law)." },
      { heading: "Hooke's Law", content: "The extension of a spring is directly proportional to the applied force, provided the elastic limit is not exceeded. F = ke, where k is the spring constant and e is the extension. Beyond the elastic limit, the spring deforms permanently." },
      { heading: "Scalar and Vector Quantities", content: "A scalar quantity has magnitude only (examples: distance, mass, speed, energy, time). A vector quantity has both magnitude and direction (examples: displacement, weight, velocity, acceleration, force)." },
      { heading: "Surface Tension", content: "Surface tension causes the surface of a liquid to behave like a stretched elastic skin. Factors affecting it: impurities reduce surface tension (e.g., adding detergent), and rising temperature reduces surface tension by weakening intermolecular forces." },
      { heading: "Friction", content: "Friction opposes relative motion between surfaces. Useful effects: enables walking, braking, writing. Harmful effects: wears surfaces, produces unwanted heat, reduces efficiency. Friction can be reduced by lubrication, using rollers/bearings, polishing surfaces, or streamlining." },
      { heading: "Pressure", content: "Pressure = Force / Area. SI unit: Pascal (Pa) = N/m². Another unit: bar (1 bar = 10⁵ N/m²). A smaller area produces greater pressure for the same force (e.g., sharp knife, stiletto heels). A larger area reduces pressure (e.g., tractor tyres, snowshoes)." },
    ],
    examples: [
      { problem: "An astronaut weighs 900 N on Earth. On the Moon he weighs 150 N. Calculate the Moon's gravitational strength (g on Earth = 10 N/kg).", solution: "Mass = Weight/g = 900/10 = 90 kg. Moon's gravitational strength = 150/90 = 1.67 N/kg." },
      { problem: "A spring has natural length 16.0 cm and stretches to 20.0 cm under a 5.0 N load. Find its length under a 2.5 N load.", solution: "5 N causes extension of 4.0 cm, so extension per newton = 0.8 cm. For 2.5 N: extension = 2.5 × 0.8 = 2.0 cm. Length = 16.0 + 2.0 = 18.0 cm." },
      { problem: "A rectangular brick weighing 10 N measures 50 cm × 30 cm × 10 cm. Find the maximum and minimum pressures it can exert.", solution: "Smallest face = 0.3 × 0.1 = 0.03 m². Max pressure = 10/0.03 = 333 N/m². Largest face = 0.5 × 0.3 = 0.15 m². Min pressure = 10/0.15 = 67 N/m²." },
    ],
  },
  {
    topicId: "p1-4",
    sections: [
      { heading: "Forms of Energy", content: "Energy exists in many forms: Kinetic (moving objects), Gravitational Potential (objects at height), Elastic Potential (stretched/compressed materials), Thermal/Heat, Light, Sound, Electrical, Chemical (in fuels, food, batteries), Nuclear (in atomic nuclei), and Magnetic." },
      { heading: "Conservation of Energy", content: "Energy cannot be created or destroyed — only transformed from one form to another. The total energy in a closed system remains constant. Example: A falling ball converts PE → KE. A light bulb converts electrical energy → light + heat." },
      { heading: "Kinetic and Potential Energy", content: "Kinetic energy (KE) = ½mv². Gravitational potential energy (PE) = mgh. At the top of a hill, PE is maximum and KE is zero. As you roll down, PE converts to KE. At the bottom, KE is maximum." },
      { heading: "Efficiency", content: "Efficiency = (useful energy output / total energy input) × 100%. No machine is 100% efficient because some energy is always lost as heat and sound due to friction. Example: If a motor uses 1000 J of electrical energy and produces 700 J of kinetic energy, efficiency = 70%." },
      { heading: "Power", content: "Power = Energy / Time = Work / Time. SI unit: Watt (W). 1 W = 1 J/s. 1 kilowatt (kW) = 1,000 W. Power measures how quickly energy is transferred or work is done." },
      { heading: "Energy Sources", content: "Renewable: solar, wind, hydroelectric, geothermal, biomass, tidal. Non-renewable: fossil fuels (coal, oil, natural gas), nuclear fuel (uranium). Renewable sources are sustainable but may be less reliable. Non-renewable sources will eventually run out and contribute to pollution." },
    ],
    examples: [
      { problem: "A 60 kg person climbs a 5 m staircase in 10 seconds. Calculate the power developed.", solution: "Work done = mgh = 60 × 10 × 5 = 3,000 J. Power = Work/Time = 3,000/10 = 300 W." },
      { problem: "A machine uses 500 J of energy to lift a load, but only 350 J is useful. Find the efficiency.", solution: "Efficiency = (350/500) × 100% = 70%." },
    ],
  },

  // ── PHYSICS S2 ──

  {
    topicId: "p2-1",
    sections: [
      { heading: "Speed, Velocity, Acceleration", content: "Speed = distance/time (scalar, unit: m/s). Velocity = displacement/time (vector). Acceleration = change in velocity / time: a = (v − u)/t (unit: m/s²). Deceleration is negative acceleration." },
      { heading: "Equations of Motion (SUVAT)", content: "These apply for uniform (constant) acceleration only: v = u + at. s = ut + ½at². v² = u² + 2as. s = ½(u + v)t. Where: s = displacement, u = initial velocity, v = final velocity, a = acceleration, t = time." },
      { heading: "Velocity-Time Graphs", content: "Gradient = acceleration. A horizontal line means constant velocity (zero acceleration). Area under the graph = distance travelled. A line sloping downward means deceleration." },
      { heading: "Newton's First Law (Inertia)", content: "An object remains at rest or in uniform motion in a straight line unless acted upon by an external force. This resistance to change in motion is called inertia. More massive objects have greater inertia." },
      { heading: "Newton's Second Law", content: "The rate of change of momentum is proportional to the applied force and takes place in the direction of the force. F = ma. A larger force produces a larger acceleration. A larger mass produces a smaller acceleration for the same force." },
      { heading: "Newton's Third Law", content: "For every action there is an equal and opposite reaction. The two forces act on different objects. Example: When you push a wall, the wall pushes back on you with equal force." },
      { heading: "Momentum", content: "Momentum p = mass × velocity (unit: kg·m/s). It is a vector quantity. Conservation of momentum: In a closed system, total momentum before an event = total momentum after. This applies to collisions and explosions." },
      { heading: "Free Fall and Projectiles", content: "An object in free fall accelerates at g ≈ 10 m/s² (ignoring air resistance). All objects fall at the same rate regardless of mass (in a vacuum). A projectile follows a parabolic path with horizontal velocity constant and vertical velocity increasing due to gravity." },
    ],
    examples: [
      { problem: "A car accelerates from 10 m/s to 30 m/s in 5 s. Find the acceleration and distance covered.", solution: "a = (v − u)/t = (30 − 10)/5 = 4 m/s². Distance s = ½(u + v)t = ½(10 + 30) × 5 = 100 m." },
      { problem: "A 1,500 kg car travelling at 20 m/s brakes to a stop in 10 s. Find the braking force.", solution: "a = (0 − 20)/10 = −2 m/s². F = ma = 1,500 × (−2) = −3,000 N. The braking force is 3,000 N." },
    ],
  },
  {
    topicId: "p2-2",
    sections: [
      { heading: "Moment of a Force", content: "Moment = Force × perpendicular distance from the pivot. Unit: Nm. A moment causes rotation about a pivot point. Clockwise moments act in the clockwise direction; anticlockwise moments act the opposite way." },
      { heading: "Principle of Moments", content: "For a body in equilibrium: Sum of clockwise moments = Sum of anticlockwise moments about any point. Also, the total upward forces must equal the total downward forces (translational equilibrium)." },
      { heading: "Centre of Gravity", content: "The point where the entire weight of an object appears to act. For uniform regular objects, it is at the geometric centre. It can be found experimentally by suspending the object from different points — the centre of gravity lies at the intersection of the plumb lines." },
      { heading: "Stability", content: "An object is stable if its centre of gravity is low and its base is wide. Three types: Stable equilibrium (returns to original position when tilted), Unstable equilibrium (topples when slightly tilted), Neutral equilibrium (stays in new position). Applications: Racing cars have low CG and wide wheelbase." },
      { heading: "Levers", content: "A lever is a rigid bar that rotates about a fixed point (fulcrum). Three classes: Class 1 – fulcrum between load and effort (e.g., see-saw, scissors). Class 2 – load between fulcrum and effort (e.g., wheelbarrow, nutcracker). Class 3 – effort between fulcrum and load (e.g., fishing rod, tongs)." },
    ],
    examples: [
      { problem: "A uniform beam of length 4 m and weight 200 N is pivoted at its centre. A 300 N weight is placed 1 m from the pivot. Where must a 500 N weight be placed to balance?", solution: "Clockwise moment = 300 × 1 = 300 Nm. For balance: 500 × d = 300. d = 300/500 = 0.6 m from the pivot on the opposite side." },
    ],
  },
  {
    topicId: "p2-3",
    sections: [
      { heading: "Pressure in Solids", content: "Pressure = Force / Area (P = F/A). SI unit: Pascal (Pa) = N/m². 1 bar = 10⁵ Pa. A smaller contact area means greater pressure for the same force. Applications: sharp knives cut easily, wide tyres reduce ground pressure." },
      { heading: "Pressure in Liquids", content: "P = hρg, where h = depth, ρ = density, g = gravitational field strength. Pressure increases with depth. Pressure acts equally in all directions at a given depth. Pressure does not depend on the shape of the container." },
      { heading: "Atmospheric Pressure", content: "The atmosphere exerts pressure on everything at Earth's surface. Standard atmospheric pressure ≈ 1.01 × 10⁵ Pa ≈ 760 mmHg. It decreases with altitude. Measured using barometers (mercury barometer, aneroid barometer, Fortin barometer)." },
      { heading: "Mercury Barometer", content: "A thick glass tube (~1 m) closed at one end, filled with mercury and inverted into a dish of mercury. The space above is a vacuum (Torricellian vacuum). At sea level, mercury stands at 760 mm. Atmospheric pressure = hρg = 0.76 × 13,600 × 9.81 ≈ 1.014 × 10⁵ Pa." },
      { heading: "U-tube Manometer", content: "A transparent U-shaped tube containing liquid. Used to measure gas pressure. When gas is connected to one arm, the levels differ by height h. Gas pressure = atmospheric pressure + hρg (if gas pushes liquid down on its side)." },
      { heading: "Boyle's Law", content: "At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure: P₁V₁ = P₂V₂. As pressure increases, volume decreases proportionally." },
      { heading: "Hydraulic Systems (Pascal's Principle)", content: "Pressure applied to an enclosed fluid is transmitted equally in all directions. F₁/A₁ = F₂/A₂. A small force on a small piston produces a large force on a large piston. Applications: hydraulic brakes, hydraulic press, hydraulic jack." },
      { heading: "Applications of Pressure", content: "Rubber sucker: atmospheric pressure holds it to surfaces after air is pushed out. Drinking straw: sucking reduces pressure inside, atmospheric pressure pushes liquid up. Syringe: same principle as straws. Bicycle pump: uses valves to push air into tyres. Siphon: liquid flows due to pressure difference from height difference (hρg)." },
    ],
    examples: [
      { problem: "A diver is 10 m below the surface of water (density 1,000 kg/m³). Find the water pressure on the diver.", solution: "P = hρg = 10 × 1,000 × 10 = 100,000 N/m² = 100 kPa." },
      { problem: "The area of the smaller piston of a hydraulic press is 0.01 m² and the bigger is 0.5 m². If the force on the smaller piston is 2 N, what force is on the larger?", solution: "Pressure = F/A = 2/0.01 = 200 Pa. Force on larger piston = P × A = 200 × 0.5 = 100 N." },
      { problem: "A man blows into a U-tube manometer containing water until the levels differ by 40 cm. If atmospheric pressure is 1.01 × 10⁵ Pa, find his lung pressure.", solution: "Lung pressure = P₀ + hρg = 1.01 × 10⁵ + (0.4 × 1,000 × 10) = 1.01 × 10⁵ + 4,000 = 1.05 × 10⁵ Pa." },
    ],
  },
  {
    topicId: "p2-4",
    sections: [
      { heading: "Work Done", content: "Work = Force × distance moved in the direction of the force. W = Fd. Unit: Joule (J). 1 J = 1 Nm. No work is done if there is no movement, or if the force is perpendicular to the movement." },
      { heading: "Power", content: "Power = Work / Time = Energy / Time. Unit: Watt (W). 1 W = 1 J/s. 1 kW = 1,000 W. Power tells us how quickly energy is converted or work is done." },
      { heading: "Kinetic and Potential Energy", content: "Kinetic energy: KE = ½mv². Gravitational potential energy: PE = mgh. When an object falls freely, PE converts to KE. At any point: total energy = KE + PE = constant (conservation of energy)." },
      { heading: "Simple Machines", content: "A machine makes work easier by changing the magnitude, direction, or point of application of a force. Mechanical Advantage (MA) = Load / Effort. Velocity Ratio (VR) = distance moved by effort / distance moved by load. Efficiency = (MA/VR) × 100%." },
      { heading: "Types of Machines", content: "Levers: VR = effort arm / load arm. Pulleys: VR = number of supporting strings. Inclined plane: VR = length / height. Wheel and axle: VR = radius of wheel / radius of axle. Gears: VR = number of teeth on driven gear / teeth on driver gear." },
    ],
    examples: [
      { problem: "A force of 50 N pushes a box 8 m along a floor. Calculate the work done.", solution: "W = Fd = 50 × 8 = 400 J." },
      { problem: "A crane lifts a 200 kg load 15 m in 30 s. Calculate the power.", solution: "Work = mgh = 200 × 10 × 15 = 30,000 J. Power = 30,000/30 = 1,000 W = 1 kW." },
    ],
  },

  // ── PHYSICS S3 ──

  {
    topicId: "p3-1",
    sections: [
      { heading: "Electric Current and Charge", content: "Electric current is the rate of flow of charge. I = Q/t. Unit: Ampere (A). Charge is measured in Coulombs (C). Conventional current flows from positive to negative terminal. Electron flow is from negative to positive." },
      { heading: "Ohm's Law", content: "V = IR. Voltage (V) = Current (A) × Resistance (Ω). For an ohmic conductor, V vs I graph is a straight line through the origin. Non-ohmic conductors (filament lamp, diode) have curved V-I graphs." },
      { heading: "Resistance", content: "Resistance opposes the flow of current. Factors affecting resistance: length (longer = more resistance), cross-sectional area (thinner = more resistance), material (copper has low resistance), temperature (higher temperature usually increases resistance in metals)." },
      { heading: "Series Circuits", content: "Same current flows through all components. Total resistance: R = R₁ + R₂ + … Total voltage: V = V₁ + V₂ + … Current is the same everywhere. Voltage divides between components." },
      { heading: "Parallel Circuits", content: "Same voltage across each branch. Total current splits: I = I₁ + I₂ + … 1/R = 1/R₁ + 1/R₂ + … Total resistance is always less than the smallest individual resistance." },
      { heading: "Electrical Power and Energy", content: "P = IV = I²R = V²/R. Unit: Watt (W). Electrical energy E = Pt = IVt. Unit: Joule (J). Domestic electricity is measured in kilowatt-hours (kWh). Cost = number of kWh × price per kWh." },
      { heading: "EMF and Internal Resistance", content: "EMF (ε) is the total energy supplied per coulomb by the cell. Internal resistance (r) is the resistance within the cell itself. ε = V + Ir, or ε = I(R + r). Terminal voltage V = ε − Ir." },
      { heading: "Electrical Safety", content: "Fuses: melt and break the circuit if current is too high. Circuit breakers: trip switches that can be reset. Earth wire: provides a safe path for fault current. Double insulation: no metal parts exposed. Never touch electrical appliances with wet hands." },
    ],
    examples: [
      { problem: "A 6 Ω and 3 Ω resistor are in parallel. Find total resistance.", solution: "1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. R = 2 Ω." },
      { problem: "An electric heater rated 2 kW is used for 3 hours. Calculate the energy consumed in kWh and the cost at UGX 750 per kWh.", solution: "Energy = 2 × 3 = 6 kWh. Cost = 6 × 750 = UGX 4,500." },
    ],
  },
  {
    topicId: "p3-2",
    sections: [
      { heading: "Properties of Magnets", content: "Like poles repel, unlike poles attract. Magnetic field lines go from North to South outside the magnet. The Earth has a magnetic field with magnetic north near geographic south. Magnets can be made by stroking with another magnet or using an electric current." },
      { heading: "Magnetic Field Patterns", content: "Bar magnet: field lines emerge from North, curve around, enter South. Two magnets attracting: field lines connect N to S. Two magnets repelling: field lines push away from each other. Earth's field: similar to a bar magnet tilted about 11° from Earth's axis." },
      { heading: "Electromagnets", content: "A coil of wire carrying current produces a magnetic field. Strength is increased by: more turns of wire, larger current, using a soft iron core. Electromagnets can be switched on and off — used in relays, doorbells, magnetic cranes, and circuit breakers." },
      { heading: "Motor Effect (Fleming's Left-Hand Rule)", content: "A current-carrying conductor in a magnetic field experiences a force. F = BIl (B = magnetic flux density, I = current, l = length). Fleming's left-hand rule: First finger = Field, seCond finger = Current, thuMb = Motion/Force." },
      { heading: "The DC Motor", content: "A coil of wire carrying current in a magnetic field rotates due to the motor effect. The commutator (split-ring) reverses current direction every half turn to keep the coil rotating in the same direction. Used in fans, drills, and electric vehicles." },
      { heading: "Electromagnetic Induction", content: "When a conductor moves through a magnetic field (or a magnetic field changes around a conductor), an EMF is induced. Faraday's Law: induced EMF is proportional to the rate of change of magnetic flux. Lenz's Law: the induced current opposes the change that caused it." },
      { heading: "Transformers", content: "Two coils wound on an iron core. Vp/Vs = Np/Ns. Step-up transformer: more secondary turns, increases voltage. Step-down transformer: fewer secondary turns, decreases voltage. For an ideal transformer: VpIp = VsIs (power is conserved). Used in power transmission to reduce energy losses." },
    ],
    examples: [
      { problem: "A transformer has 200 primary turns and 1,000 secondary turns. If the input voltage is 240 V, find the output voltage.", solution: "Vp/Vs = Np/Ns → 240/Vs = 200/1,000 → Vs = 240 × 1,000/200 = 1,200 V." },
    ],
  },
  {
    topicId: "p3-3",
    sections: [
      { heading: "Thermal Expansion of Solids", content: "When solids are heated, their particles vibrate more vigorously and push apart, causing expansion. Different materials expand at different rates. Demonstrated by the ball-and-ring experiment (heated ball won't pass through ring) and the bar-breaker experiment." },
      { heading: "Bimetallic Strip", content: "Two different metals bonded together. When heated, the metal that expands more causes the strip to bend. Applications: thermostats in electric irons, fire alarms, car flasher units, and bimetallic thermometers." },
      { heading: "Applications of Thermal Expansion", content: "Railway lines have expansion joints between rails. Bridges have rollers on one end. Hot water pipes have expansion joints. Riveting uses contraction of hot rivets to join metal sheets tightly." },
      { heading: "Expansion of Liquids", content: "Liquids expand more than solids. Different liquids expand at different rates. Mercury and alcohol are used in thermometers because they expand uniformly. The anomalous expansion of water: water contracts from 0°C to 4°C (maximum density at 4°C), then expands normally above 4°C." },
      { heading: "Expansion of Gases", content: "Gases expand the most when heated. When heated, gas molecules move faster and collide more energetically with container walls, increasing pressure. This can be demonstrated using a flask with a tube dipped in water — heating causes air bubbles to escape." },
      { heading: "Thermometers", content: "Liquid-in-glass: mercury (−39°C to 357°C) or alcohol (−112°C to 78°C). Clinical thermometer: range around 35–42°C with a constriction to hold the reading. Six's maximum and minimum thermometer: records highest and lowest temperatures. Bimetallic thermometer: for high temperatures. Thermocouple: uses two different metals joined at a junction." },
      { heading: "Heat Transfer – Conduction", content: "Transfer of heat through solids. Rate depends on: temperature difference, cross-sectional area, length of material, and type of material. Metals are good conductors (copper is best); wood, plastic, air are poor conductors (insulators). Applications: cooking utensils use metal bases with insulating handles." },
      { heading: "Heat Transfer – Convection", content: "Transfer of heat through fluids (liquids and gases). Hot fluid becomes less dense and rises; cooler fluid sinks to replace it, creating convection currents. Applications: land and sea breezes, car radiators, immersion heaters placed at the bottom of tanks." },
      { heading: "Heat Transfer – Radiation", content: "Transfer of heat through electromagnetic waves — does not need a medium (travels through vacuum). Dark, rough surfaces are good emitters and absorbers. Shiny, smooth surfaces are good reflectors and poor emitters. Applications: vacuum flask (silvered walls reduce radiation, vacuum prevents conduction and convection), solar panels, greenhouse effect." },
      { heading: "Specific Heat Capacity", content: "Q = mcΔθ. The energy needed to raise 1 kg of a substance by 1°C. Water has a high SHC (4,200 J/kg°C) — useful for cooling systems and heating. Metals have lower SHC — they heat up and cool down quickly." },
      { heading: "Latent Heat", content: "Q = ml. Latent heat of fusion (Lf): energy to change solid → liquid at constant temperature. Latent heat of vaporisation (Lv): energy to change liquid → gas at constant temperature. Lv is always greater than Lf because molecules must completely separate." },
    ],
    examples: [
      { problem: "How much energy is needed to heat 2 kg of water from 20°C to 100°C? (c = 4,200 J/kg°C)", solution: "Q = mcΔθ = 2 × 4,200 × (100 − 20) = 2 × 4,200 × 80 = 672,000 J = 672 kJ." },
      { problem: "Calculate the energy needed to melt 0.5 kg of ice at 0°C. (Lf = 334,000 J/kg)", solution: "Q = ml = 0.5 × 334,000 = 167,000 J = 167 kJ." },
    ],
  },
  {
    topicId: "p3-4",
    sections: [
      { heading: "Rectilinear Propagation of Light", content: "Light travels in straight lines. Evidence: shadows, eclipses, pinhole camera images. Luminous objects produce their own light (sun, torch). Non-luminous objects reflect light (moon). Opaque objects block light. Translucent objects allow some light through but scatter it. Transparent objects allow light to pass clearly." },
      { heading: "Shadows and Eclipses", content: "When an opaque object is between a light source and a screen, a shadow forms. A point source gives a sharp shadow (umbra only). An extended source gives an umbra (dark centre) and penumbra (lighter edge). Solar eclipse: Moon between Sun and Earth. Lunar eclipse: Earth between Sun and Moon." },
      { heading: "Pinhole Camera", content: "A closed box with a small hole on one face and a screen on the opposite face. Forms an inverted, real image. Magnification = image height / object height = image distance / object distance. A closer object produces a larger image." },
      { heading: "Laws of Reflection", content: "1. The incident ray, the normal, and the reflected ray all lie in the same plane. 2. The angle of incidence equals the angle of reflection (i = r). Both angles are measured from the normal (perpendicular to the surface)." },
      { heading: "Images in Plane Mirrors", content: "Same size as the object. Same distance behind the mirror as the object is in front. Laterally inverted (left-right reversed). Virtual (cannot be projected on a screen). Erect (upright). For mirrors at an angle θ: number of images = (360°/θ) − 1. Parallel mirrors give infinite images." },
      { heading: "Refraction of Light", content: "Light bends when passing between media of different optical densities. Snell's law: n₁ sin i = n₂ sin r, or refractive index n = sin i / sin r. Light bends towards the normal when entering a denser medium and away from the normal when entering a less dense medium." },
      { heading: "Total Internal Reflection", content: "Occurs when light travels from a denser to a less dense medium and the angle of incidence exceeds the critical angle c. sin c = 1/n. At angles greater than c, all light is reflected internally. Applications: optical fibres (telecommunications, endoscopes), periscopes using prisms, bicycle reflectors." },
      { heading: "Lenses", content: "Converging (convex) lens: brings parallel rays to a focal point. Used in magnifying glasses, cameras, projectors. Diverging (concave) lens: spreads parallel rays apart. Used in spectacles for short-sightedness. Lens formula: 1/f = 1/u + 1/v. Magnification = v/u = image height / object height." },
    ],
    examples: [
      { problem: "Calculate the height of a building 300 m away from a pinhole camera that produces an image 2.5 cm high. The pinhole-to-screen distance is 5.0 cm.", solution: "Object height / image height = object distance / image distance. Object height = (30,000 × 2.5) / 5.0 = 15,000 cm = 150 m." },
      { problem: "A ray of light passes from air into glass (n = 1.5) with an angle of incidence of 45°. Find the angle of refraction.", solution: "n = sin i / sin r → 1.5 = sin 45° / sin r → sin r = 0.707 / 1.5 = 0.471 → r = sin⁻¹(0.471) ≈ 28.1°." },
    ],
  },

  // ── PHYSICS S4 ──

  {
    topicId: "p4-1",
    sections: [
      { heading: "Wave Properties", content: "Amplitude: maximum displacement from rest position. Wavelength (λ): distance between two consecutive crests or troughs. Frequency (f): number of complete waves per second (unit: Hz). Period T = 1/f. Wave speed: v = fλ." },
      { heading: "Types of Waves", content: "Transverse: vibration perpendicular to direction of travel (e.g., light, water waves, electromagnetic waves). Longitudinal: vibration parallel to direction of travel (e.g., sound waves). Both carry energy without transporting matter." },
      { heading: "Wave Phenomena", content: "Reflection: waves bounce off surfaces (angle of incidence = angle of reflection). Refraction: waves change speed and direction when entering a different medium. Diffraction: waves spread out when passing through gaps or around obstacles. Interference: waves combine — constructive (in phase, louder) or destructive (out of phase, cancel)." },
      { heading: "Sound Waves", content: "Longitudinal waves that need a medium to travel. Speed in air ≈ 340 m/s (faster in solids and liquids). Frequency determines pitch (high frequency = high pitch). Amplitude determines loudness. Echo: reflection of sound from a surface. Minimum distance for echo = 17 m (sound travels 34 m in 0.1 s)." },
      { heading: "Resonance", content: "When an object is forced to vibrate at its natural frequency, the amplitude increases dramatically. Examples: breaking a wine glass with sound, Tacoma Narrows Bridge collapse, tuning forks." },
      { heading: "Doppler Effect", content: "The apparent change in frequency of a wave when the source or observer is moving. Approaching source: higher pitch (compressed waves). Receding source: lower pitch (stretched waves). Applications: speed cameras, medical ultrasound, astronomy (red/blue shift)." },
    ],
    examples: [
      { problem: "A sound wave has frequency 680 Hz and wavelength 0.5 m. Find the speed of sound.", solution: "v = fλ = 680 × 0.5 = 340 m/s." },
      { problem: "A person claps 50 m from a wall. How long does it take for the echo to return? (Speed of sound = 340 m/s)", solution: "Total distance = 2 × 50 = 100 m. Time = distance / speed = 100 / 340 = 0.294 s." },
    ],
  },
  {
    topicId: "p4-2",
    sections: [
      { heading: "The Electromagnetic Spectrum", content: "In order of increasing frequency (decreasing wavelength): Radio → Microwave → Infrared → Visible → Ultraviolet → X-ray → Gamma. All travel at the speed of light c = 3 × 10⁸ m/s in a vacuum. They are all transverse waves and do not need a medium." },
      { heading: "Properties and Uses", content: "Radio: communication, broadcasting. Microwave: cooking, satellite communication, mobile phones. Infrared: heating, remote controls, thermal imaging. Visible: sight, optical fibres, photography. Ultraviolet: fluorescent lights, sterilisation, detecting forged banknotes. X-ray: medical imaging, airport security. Gamma: cancer treatment, sterilisation of equipment, detecting cracks in metals." },
      { heading: "Dangers", content: "Microwave: internal heating of body tissues. Infrared: skin burns. UV: sunburn, skin cancer, eye damage. X-ray: cell damage, cancer with prolonged exposure. Gamma: cell mutation, radiation sickness, cancer. Protection includes limiting exposure, shielding (lead for X-rays/gamma), and using sunscreen for UV." },
      { heading: "Visible Light Spectrum", content: "White light splits into seven colours when passed through a prism: Red, Orange, Yellow, Green, Blue, Indigo, Violet (ROYGBIV). Red has the longest wavelength; violet has the shortest. Colour filters absorb some wavelengths and transmit others." },
    ],
    examples: [
      { problem: "Calculate the frequency of a radio wave with wavelength 300 m.", solution: "f = c/λ = 3 × 10⁸ / 300 = 1 × 10⁶ Hz = 1 MHz." },
    ],
  },
  {
    topicId: "p4-3",
    sections: [
      { heading: "Atomic Structure", content: "Atom: protons (positive, in nucleus) and neutrons (neutral, in nucleus), with electrons (negative) orbiting in shells. Atomic number (Z) = number of protons. Mass number (A) = protons + neutrons. Isotopes: atoms of the same element with different numbers of neutrons." },
      { heading: "Radioactive Decay", content: "Alpha (α): 2 protons + 2 neutrons (helium nucleus), stopped by paper or skin, strongly ionising, short range. Beta (β): fast electron emitted when a neutron converts to a proton, stopped by aluminium, moderately ionising. Gamma (γ): electromagnetic wave, stopped by thick lead or concrete, weakly ionising, most penetrating." },
      { heading: "Half-Life", content: "Time for half the radioactive atoms in a sample to decay. A = A₀ × (½)^(t/t½). After n half-lives, fraction remaining = (½)ⁿ. Half-lives range from fractions of a second to billions of years depending on the isotope." },
      { heading: "Nuclear Fission", content: "A heavy nucleus (e.g., Uranium-235) splits into two lighter nuclei when hit by a neutron, releasing energy and more neutrons. Chain reaction occurs when released neutrons cause further fissions. Controlled in nuclear power stations using control rods (absorb neutrons) and moderators (slow neutrons)." },
      { heading: "Nuclear Fusion", content: "Light nuclei (e.g., hydrogen isotopes) combine to form a heavier nucleus, releasing enormous energy. Powers the Sun and stars. Requires extremely high temperatures (millions of °C). Not yet achieved sustainably on Earth for power generation." },
      { heading: "Uses of Radioactivity", content: "Medical: tracers for diagnosis (Technetium-99m), gamma rays for cancer treatment. Industrial: thickness monitoring in factories, detecting leaks in pipes. Agricultural: tracing nutrient uptake in plants. Carbon dating: determining the age of archaeological specimens using Carbon-14." },
      { heading: "Safety and Hazards", content: "Ionising radiation can damage cells and DNA, causing cancer or mutations. Safety measures: minimise exposure time, maximise distance from source, use appropriate shielding, wear protective equipment, use tongs to handle sources, store in lead-lined containers." },
    ],
    examples: [
      { problem: "A radioactive sample has a half-life of 8 days. What fraction remains after 24 days?", solution: "Number of half-lives = 24/8 = 3. Fraction remaining = (½)³ = 1/8." },
      { problem: "A sample initially contains 800 radioactive atoms. How many remain after 4 half-lives?", solution: "After 4 half-lives: 800 × (½)⁴ = 800 × 1/16 = 50 atoms." },
    ],
  },
  {
    topicId: "p4-4",
    sections: [
      { heading: "Semiconductors", content: "Materials with conductivity between conductors and insulators. Silicon and germanium are the most common. Their conductivity increases with temperature (opposite to metals). Doping: adding impurities to change electrical properties. N-type: extra electrons (donor). P-type: extra holes (acceptor)." },
      { heading: "Diodes and LEDs", content: "A diode is a semiconductor device that allows current in one direction only (forward-biased). When reverse-biased, very little current flows. An LED (Light Emitting Diode) emits light when forward-biased. Used in displays, indicators, and lighting. Rectification: converting AC to DC using diodes." },
      { heading: "Logic Gates", content: "AND gate: output is 1 only if ALL inputs are 1. OR gate: output is 1 if ANY input is 1. NOT gate: inverts the input (1→0, 0→1). NAND gate: NOT + AND (output 0 only if all inputs are 1). NOR gate: NOT + OR (output 1 only if all inputs are 0). XOR gate: output 1 if inputs are different." },
      { heading: "Truth Tables", content: "A systematic way to show all possible input combinations and their outputs. For 2 inputs, there are 4 rows (2² combinations). For 3 inputs, there are 8 rows. Truth tables help design and analyse digital circuits." },
      { heading: "Transistor as Switch", content: "A transistor has three terminals: base (B), collector (C), and emitter (E). A small base current switches on a much larger collector current. Used as electronic switches in computers, amplifiers, and sensor circuits. When base current flows, the transistor is 'on' (saturated). When no base current, it is 'off' (cut-off)." },
      { heading: "Rectification", content: "Half-wave rectification: single diode allows only positive half of AC wave through. Full-wave rectification: four diodes in a bridge circuit allow both halves through (flipped). Smoothing: a capacitor is added to reduce the 'ripple' and produce steady DC." },
    ],
    examples: [
      { problem: "Design a circuit using logic gates where a light comes on only when both switches A AND B are pressed.", solution: "Use an AND gate. Connect switch A to input 1 and switch B to input 2. The output goes to the light/LED. The light is ON only when A = 1 AND B = 1." },
    ],
  },

  // ═══════════════════════════════════════════
  // CHEMISTRY
  // ═══════════════════════════════════════════

  // ── CHEMISTRY S1 ──

  {
    topicId: "c1-1",
    sections: [
      { heading: "States of Matter", content: "Solid: fixed shape and volume. Liquid: fixed volume, takes shape of container. Gas: fills entire container. Particles move faster as temperature increases." },
      { heading: "Physical vs Chemical Changes", content: "Physical: no new substance formed, reversible (e.g., melting ice). Chemical: new substance formed, usually irreversible (e.g., burning paper)." },
      { heading: "Separation Techniques", content: "Filtration: separate insoluble solid from liquid. Evaporation: obtain dissolved solid from solution. Distillation: separate liquids with different boiling points. Chromatography: separate dissolved substances." },
      { heading: "Laboratory Safety", content: "Wear lab coat, goggles, and gloves. Know hazard symbols. Never taste chemicals. Report spillages immediately. Know where fire extinguisher and first aid kit are." },
    ],
  },
  {
    topicId: "c1-2",
    sections: [
      { heading: "Acids", content: "Acids have pH < 7. Turn blue litmus red. React with metals to give salt + hydrogen. React with bases to give salt + water. Common acids: HCl (hydrochloric), H₂SO₄ (sulphuric), HNO₃ (nitric)." },
      { heading: "Bases and Alkalis", content: "Bases: metal oxides and hydroxides. Alkalis: soluble bases (pH > 7). Turn red litmus blue. Feel soapy. Common: NaOH (sodium hydroxide), Ca(OH)₂ (calcium hydroxide)." },
      { heading: "pH Scale", content: "0-6: acidic (lower = stronger acid). 7: neutral. 8-14: alkaline (higher = stronger alkali). Universal indicator shows different colours for different pH values." },
      { heading: "Neutralisation", content: "Acid + Base → Salt + Water. Example: HCl + NaOH → NaCl + H₂O. The salt depends on the acid and base used." },
    ],
  },
  {
    topicId: "c1-3",
    sections: [
      { heading: "Water Properties", content: "Boiling point: 100°C. Freezing point: 0°C. Water is a universal solvent. Test for water: turns anhydrous copper sulfate blue, or turns cobalt chloride paper pink." },
      { heading: "Water Purification", content: "Steps: screening → sedimentation → filtration → chlorination. Hard water contains dissolved calcium/magnesium compounds. Soft water lathers easily with soap." },
      { heading: "Hydrogen", content: "Lightest gas. Burns with a 'pop' sound (test). Produced by reacting metals with dilute acid. Used in making margarine (hydrogenation) and as rocket fuel." },
    ],
  },
  {
    topicId: "c1-4",
    sections: [
      { heading: "Composition of Air", content: "Nitrogen: 78%. Oxygen: 21%. Argon: 0.93%. Carbon dioxide: 0.04%. Water vapour: variable." },
      { heading: "Oxygen", content: "Supports combustion (relights a glowing splint). Produced by decomposing hydrogen peroxide with manganese dioxide catalyst. Essential for respiration." },
      { heading: "Combustion", content: "Burning requires fuel, oxygen, and heat (fire triangle). Complete combustion: fuel + O₂ → CO₂ + H₂O. Incomplete combustion: produces CO (toxic) and soot (carbon)." },
      { heading: "Rusting", content: "Iron + oxygen + water → hydrated iron(III) oxide (rust). Prevention: painting, oiling, galvanising (zinc coating), alloying (stainless steel)." },
    ],
  },

  // ── CHEMISTRY S2 ──

  {
    topicId: "c2-1",
    sections: [
      { heading: "Subatomic Particles", content: "Protons: positive charge, in nucleus. Neutrons: no charge, in nucleus. Electrons: negative charge, orbit nucleus. Atomic number = protons. Mass number = protons + neutrons." },
      { heading: "Electron Configuration", content: "Electrons fill shells: 1st shell = 2 electrons, 2nd shell = 8, 3rd shell = 8 (for first 20 elements). Example: Sodium (11) = 2, 8, 1." },
      { heading: "Isotopes", content: "Atoms of the same element with different numbers of neutrons. Same atomic number, different mass number. Example: Carbon-12 and Carbon-14." },
      { heading: "Ions", content: "Atoms gain or lose electrons to form ions. Metals lose electrons → positive ions (cations). Non-metals gain electrons → negative ions (anions)." },
    ],
  },
  {
    topicId: "c2-2",
    sections: [
      { heading: "Structure", content: "Rows = periods (electron shells). Columns = groups (electrons in outer shell). Group I: 1 outer electron. Group VII: 7 outer electrons. Group 0: full outer shell (noble gases)." },
      { heading: "Group I – Alkali Metals", content: "Soft, low density. Very reactive (reactivity increases down the group). React vigorously with water: 2Na + 2H₂O → 2NaOH + H₂." },
      { heading: "Group VII – Halogens", content: "Diatomic molecules (F₂, Cl₂, Br₂, I₂). Reactivity decreases down the group. A more reactive halogen displaces a less reactive one from its salt." },
      { heading: "Trends", content: "Across a period: metallic character decreases, reactivity of metals decreases. Down a group: metallic character increases, atomic size increases." },
    ],
  },
  {
    topicId: "c2-3",
    sections: [
      { heading: "Types of Reactions", content: "Combination: A + B → AB. Decomposition: AB → A + B. Displacement: A + BC → AC + B (more reactive metal displaces less reactive one)." },
      { heading: "Balancing Equations", content: "Same number of each type of atom on both sides. Change coefficients only, never formulae. Example: H₂ + O₂ → H₂O becomes 2H₂ + O₂ → 2H₂O." },
      { heading: "Energy Changes", content: "Exothermic: releases heat (temperature rises). Examples: combustion, neutralisation. Endothermic: absorbs heat (temperature falls). Examples: thermal decomposition, photosynthesis." },
    ],
  },
  {
    topicId: "c2-4",
    sections: [
      { heading: "Properties of Metals", content: "Good conductors of heat and electricity. Malleable, ductile. High melting points (generally). Shiny when polished." },
      { heading: "Reactivity Series", content: "K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au (most to least reactive). Memory: King Nathan Came Marching And Zapped Intelligent Polar Bears Hunting Cute Silver Goldfish." },
      { heading: "Metal Extraction", content: "Very reactive metals (K-Al): electrolysis. Moderately reactive (Zn-Fe): reduction with carbon/coke. Least reactive (Cu-Au): found native or simple heating." },
    ],
  },

  // ── CHEMISTRY S3 ──

  {
    topicId: "c3-1",
    sections: [
      { heading: "Ionic Bonding", content: "Transfer of electrons from metal to non-metal. Metal forms positive ion, non-metal forms negative ion. Strong electrostatic attraction between ions. Example: NaCl — Na loses 1e⁻ → Na⁺, Cl gains 1e⁻ → Cl⁻." },
      { heading: "Covalent Bonding", content: "Sharing of electron pairs between non-metal atoms. Single bond: 1 shared pair. Double bond: 2 shared pairs. Example: H₂O — each H shares 1 electron with O." },
      { heading: "Metallic Bonding", content: "Metal atoms lose outer electrons to form a 'sea' of delocalised electrons. These electrons are free to move, allowing conduction of electricity and heat." },
      { heading: "Properties Comparison", content: "Ionic: high melting point, conduct when molten/dissolved, crystalline. Covalent (simple): low melting point, don't conduct. Metallic: conduct, malleable, high melting point." },
    ],
  },
  {
    topicId: "c3-2",
    sections: [
      { heading: "The Mole", content: "1 mole = 6.02 × 10²³ particles (Avogadro's number). Moles = mass / Mr (relative formula mass). For gases at RTP: 1 mole occupies 24 dm³ (24,000 cm³)." },
      { heading: "Concentration", content: "Concentration = moles / volume (in dm³). Units: mol/dm³. To convert cm³ to dm³: divide by 1000." },
      { heading: "Reacting Masses", content: "Use the balanced equation to find the mole ratio. Calculate moles of what you know, use ratio to find moles of what you need, then convert to mass." },
      { heading: "Empirical Formula", content: "The simplest whole-number ratio of atoms. Steps: convert % to mass → divide by Ar → divide by smallest → get ratio." },
    ],
    examples: [
      { problem: "Find the number of moles in 44 g of CO₂ (Mr = 44).", solution: "Moles = mass/Mr = 44/44 = 1 mole." },
    ],
  },
  {
    topicId: "c3-3",
    sections: [
      { heading: "Neutralisation", content: "Acid + Base → Salt + Water. Acid + Metal → Salt + Hydrogen. Acid + Carbonate → Salt + Water + CO₂." },
      { heading: "Preparing Salts", content: "Soluble salts: add excess insoluble base/metal to acid, filter, evaporate. OR titration (acid + alkali). Insoluble salts: precipitation — mix two soluble salts, filter the precipitate." },
      { heading: "Titration", content: "A method to find the exact volume of acid needed to neutralise a known volume of alkali (or vice versa). Use an indicator (e.g., methyl orange, phenolphthalein) to find the end point." },
    ],
  },
  {
    topicId: "c3-4",
    sections: [
      { heading: "Electrolysis Basics", content: "Passing electric current through a molten or dissolved ionic compound to decompose it. Electrolyte: ionic compound (molten or in solution). Electrodes: anode (+) and cathode (-)." },
      { heading: "At the Electrodes", content: "Cathode (negative): positive ions (cations) gain electrons (reduction). Anode (positive): negative ions (anions) lose electrons (oxidation). Remember: OILRIG — Oxidation Is Loss, Reduction Is Gain." },
      { heading: "Applications", content: "Electroplating: coating objects with a thin layer of metal. Extraction of aluminium from bauxite (cryolite lowers melting point). Purification of copper." },
    ],
  },

  // ── CHEMISTRY S4 ──

  {
    topicId: "c4-1",
    sections: [
      { heading: "Alkanes", content: "General formula CₙH₂ₙ₊₂. Saturated (single bonds only). Methane CH₄, Ethane C₂H₆, Propane C₃H₈, Butane C₄H₁₀. Undergo substitution reactions." },
      { heading: "Alkenes", content: "General formula CₙH₂ₙ. Unsaturated (contain C=C double bond). Ethene C₂H₄, Propene C₃H₆. Undergo addition reactions. Test: decolourise bromine water." },
      { heading: "Alcohols", content: "Contain -OH group. Methanol CH₃OH, Ethanol C₂H₅OH. Ethanol made by fermentation of sugars or hydration of ethene. Used as fuel and solvent." },
      { heading: "Naming (IUPAC)", content: "Count the longest carbon chain (meth-1, eth-2, prop-3, but-4, pent-5). Add suffix for functional group (-ane, -ene, -ol, -oic acid). Number the position of the functional group." },
      { heading: "Polymers", content: "Addition polymers: monomers with C=C join together (e.g., polyethene from ethene). Condensation polymers: monomers join with loss of a small molecule (e.g., nylon, polyester)." },
    ],
  },
  {
    topicId: "c4-2",
    sections: [
      { heading: "Collision Theory", content: "For a reaction to happen, particles must collide with enough energy (≥ activation energy) and correct orientation." },
      { heading: "Factors Affecting Rate", content: "Temperature ↑: particles move faster, more energetic collisions. Concentration ↑: more particles per volume, more frequent collisions. Surface area ↑: more exposed particles. Catalyst: lowers activation energy." },
      { heading: "Measuring Rate", content: "Rate = change in amount / time. Methods: measure gas volume produced, mass loss, colour change, or time for precipitate to obscure a cross." },
    ],
  },
  {
    topicId: "c4-3",
    sections: [
      { heading: "Exothermic Reactions", content: "Release energy to surroundings (ΔH < 0). Temperature rises. Examples: combustion, neutralisation, respiration. Energy level diagram: products lower than reactants." },
      { heading: "Endothermic Reactions", content: "Absorb energy from surroundings (ΔH > 0). Temperature falls. Examples: photosynthesis, thermal decomposition. Energy level diagram: products higher than reactants." },
      { heading: "Bond Energies", content: "Energy is needed to break bonds (endothermic). Energy is released when bonds form (exothermic). ΔH = energy to break bonds - energy released forming bonds." },
    ],
  },
  {
    topicId: "c4-4",
    sections: [
      { heading: "Reversible Reactions", content: "Products can react to re-form reactants. Written with ⇌ symbol. Example: N₂ + 3H₂ ⇌ 2NH₃ (Haber process)." },
      { heading: "Dynamic Equilibrium", content: "Reached in a closed system when rate of forward reaction = rate of reverse reaction. Concentrations remain constant but reactions continue." },
      { heading: "Le Chatelier's Principle", content: "If a system at equilibrium is disturbed, it shifts to oppose the change. Increase concentration → shifts away. Increase temperature → shifts in endothermic direction. Increase pressure → shifts to side with fewer gas moles." },
    ],
  },

  // ═══════════════════════════════════════════
  // BIOLOGY
  // ═══════════════════════════════════════════

  // ── BIOLOGY S1 ──

  {
    topicId: "b1-1",
    sections: [
      { heading: "Cell Structure", content: "All living things are made of cells. A cell has: cell membrane (controls what enters/leaves), cytoplasm (where reactions occur), nucleus (contains DNA, controls cell activities)." },
      { heading: "Plant vs Animal Cells", content: "Both have: membrane, cytoplasm, nucleus, mitochondria, ribosomes. Plant cells ALSO have: cell wall (cellulose, for support), chloroplasts (for photosynthesis), large vacuole (contains cell sap)." },
      { heading: "Key Organelles", content: "Mitochondria: site of respiration ('powerhouse'). Ribosomes: site of protein synthesis. Chloroplasts: contain chlorophyll for photosynthesis (plants only)." },
      { heading: "Levels of Organisation", content: "Cell → Tissue (group of similar cells) → Organ (group of tissues) → Organ system (group of organs) → Organism." },
      { heading: "Microscopy", content: "Magnification = image size / actual size. Light microscope: magnifies up to ×1500. Electron microscope: magnifies up to ×500,000." },
    ],
  },
  {
    topicId: "b1-2",
    sections: [
      { heading: "Characteristics of Life (MRS GREN)", content: "Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition. All living organisms show these characteristics." },
      { heading: "Five Kingdoms", content: "Animalia: multicellular, no cell wall, heterotrophic. Plantae: multicellular, cell wall, autotrophic. Fungi: cell wall (chitin), saprophytic. Protista: mostly unicellular. Prokaryotae: no nucleus (bacteria)." },
      { heading: "Vertebrate Groups", content: "Fish: gills, scales, cold-blooded. Amphibians: moist skin, cold-blooded. Reptiles: dry scaly skin, cold-blooded. Birds: feathers, warm-blooded. Mammals: hair/fur, warm-blooded, produce milk." },
      { heading: "Binomial Nomenclature", content: "Two-part Latin name: Genus + species. Written in italics. Genus capitalised, species lowercase. Example: Homo sapiens." },
    ],
  },
  {
    topicId: "b1-3",
    sections: [
      { heading: "Photosynthesis", content: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in the presence of light and chlorophyll). Takes place in chloroplasts. Converts light energy to chemical energy (glucose)." },
      { heading: "Factors Affecting Photosynthesis", content: "Light intensity: more light → faster rate (up to a point). CO₂ concentration. Temperature. Water availability. The slowest factor is the limiting factor." },
      { heading: "Leaf Structure", content: "Upper epidermis: transparent, allows light through. Palisade layer: packed with chloroplasts for photosynthesis. Spongy mesophyll: air spaces for gas exchange. Stomata: pores for gas exchange (controlled by guard cells)." },
      { heading: "Mineral Nutrition", content: "Nitrates: for making proteins. Phosphates: for DNA and energy transfer. Potassium: for enzyme function. Magnesium: for chlorophyll." },
    ],
  },
  {
    topicId: "b1-4",
    sections: [
      { heading: "Food Groups", content: "Carbohydrates: energy source (starch, glucose). Proteins: growth and repair (amino acids). Fats: energy store and insulation. Vitamins and minerals: needed in small amounts for health. Water and fibre." },
      { heading: "Balanced Diet", content: "Contains all food groups in correct proportions. Needs vary by age, activity level, and health. In Uganda: common staples include matooke, posho, beans, groundnuts, and greens." },
      { heading: "Food Tests", content: "Starch: iodine solution → blue-black. Glucose: Benedict's solution + heat → orange/red. Protein: Biuret reagent → purple/violet. Fat: rub on paper → translucent spot." },
      { heading: "Digestion", content: "Mechanical: teeth break food into smaller pieces. Chemical: enzymes break down large molecules. Amylase: starch → maltose. Protease: protein → amino acids. Lipase: fats → fatty acids + glycerol." },
    ],
  },

  // ── BIOLOGY S2 ──

  {
    topicId: "b2-1",
    sections: [
      { heading: "Digestive System", content: "Mouth → Oesophagus → Stomach → Small intestine (duodenum, ileum) → Large intestine → Rectum → Anus. Enzymes at each stage break down specific nutrients." },
      { heading: "Circulatory System", content: "Double circulatory system: heart → lungs (pulmonary) and heart → body (systemic). Heart has 4 chambers: left/right atria and ventricles. Arteries carry blood away from heart, veins carry blood to heart, capillaries exchange substances." },
      { heading: "Blood Components", content: "Red blood cells: carry oxygen (haemoglobin). White blood cells: fight infection. Platelets: clotting. Plasma: liquid carrying dissolved substances." },
      { heading: "Respiratory System", content: "Air path: nose → trachea → bronchi → bronchioles → alveoli. Gas exchange in alveoli: O₂ into blood, CO₂ out. Alveoli have thin walls, large surface area, rich blood supply." },
    ],
  },
  {
    topicId: "b2-2",
    sections: [
      { heading: "Water Uptake", content: "Root hair cells absorb water by osmosis (water moves from high to low water concentration across a partially permeable membrane). Minerals are absorbed by active transport." },
      { heading: "Xylem and Phloem", content: "Xylem: transports water and minerals UP from roots (dead cells, thick walls). Phloem: transports sugars (sucrose) UP and DOWN (living cells). This is translocation." },
      { heading: "Transpiration", content: "Loss of water vapour from leaves through stomata. Creates a 'pull' that draws water up through the plant. Factors: temperature, humidity, wind speed, light intensity." },
    ],
  },
  {
    topicId: "b2-3",
    sections: [
      { heading: "What is Excretion?", content: "Removal of metabolic waste products from the body. NOT the same as egestion (removal of undigested food)." },
      { heading: "The Kidney", content: "Filters blood to remove urea, excess water, and salts. Each kidney contains about 1 million nephrons. Process: ultrafiltration → selective reabsorption → urine formation." },
      { heading: "Liver Functions", content: "Deamination of excess amino acids (produces urea). Detoxification of alcohol and drugs. Bile production (stored in gall bladder). Storage of glycogen, vitamins, and iron." },
    ],
  },
  {
    topicId: "b2-4",
    sections: [
      { heading: "Flower Structure", content: "Sepals: protect the bud. Petals: attract pollinators. Stamens (anther + filament): male part, produce pollen. Carpel (stigma + style + ovary): female part, contains ovules." },
      { heading: "Pollination", content: "Transfer of pollen from anther to stigma. Self-pollination: same flower or same plant. Cross-pollination: between different plants (by wind or insects)." },
      { heading: "Fertilisation and Seed Formation", content: "Pollen tube grows down style to ovule. Male nucleus fuses with female nucleus. Ovule → seed. Ovary → fruit." },
      { heading: "Seed Dispersal", content: "Wind (light seeds, wings). Animal (hooks, eaten fruits). Water (waterproof, float). Explosive (pods burst open)." },
      { heading: "Asexual Reproduction", content: "One parent, offspring genetically identical (clones). Methods: runners (strawberry), tubers (Irish potato), bulbs (onion), stem cuttings." },
    ],
  },

  // ── BIOLOGY S3 ──

  {
    topicId: "b3-1",
    sections: [
      { heading: "Ecosystems", content: "An ecosystem includes all living organisms (community) and non-living factors (habitat) interacting together. Biotic factors: predation, competition, disease. Abiotic factors: temperature, light, water, pH." },
      { heading: "Food Chains and Webs", content: "Producer → Primary consumer → Secondary consumer → Tertiary consumer. Energy decreases at each trophic level (about 10% transferred). Pyramids of numbers, biomass, and energy." },
      { heading: "Nutrient Cycles", content: "Carbon cycle: photosynthesis removes CO₂, respiration and combustion release CO₂. Nitrogen cycle: nitrogen-fixing bacteria → nitrates → plants → animals → decomposers → denitrifying bacteria." },
      { heading: "Conservation", content: "Protecting habitats and species. Methods: national parks, seed banks, captive breeding, sustainable harvesting. In Uganda: Bwindi (gorillas), Queen Elizabeth National Park." },
    ],
  },
  {
    topicId: "b3-2",
    sections: [
      { heading: "Nervous System", content: "Central nervous system (CNS) = brain + spinal cord. Sensory neurones carry impulses TO the CNS. Motor neurones carry impulses FROM the CNS. Relay neurones connect them in the CNS." },
      { heading: "Reflex Arc", content: "Stimulus → Receptor → Sensory neurone → Relay neurone (in spinal cord) → Motor neurone → Effector (muscle or gland) → Response. Reflexes are fast, automatic, and protective." },
      { heading: "Hormones", content: "Chemical messengers carried in blood. Slower but longer-lasting than nerve impulses. Insulin: lowers blood sugar (from pancreas). Adrenaline: 'fight or flight' (from adrenal glands)." },
      { heading: "Homeostasis", content: "Maintaining a constant internal environment. Examples: body temperature (37°C), blood sugar level, water balance. Uses negative feedback loops." },
    ],
  },
  {
    topicId: "b3-3",
    sections: [
      { heading: "Male Reproductive System", content: "Testes: produce sperm and testosterone. Sperm duct carries sperm. Prostate gland adds fluid to make semen." },
      { heading: "Female Reproductive System", content: "Ovaries: produce eggs and hormones (oestrogen, progesterone). Oviducts (fallopian tubes): where fertilisation occurs. Uterus: where embryo develops." },
      { heading: "Menstrual Cycle", content: "About 28 days. Day 1-5: menstruation. Day 6-13: uterus lining builds up. Day 14: ovulation (egg released). Day 15-28: lining maintained (if no fertilisation, cycle restarts)." },
      { heading: "Pregnancy", content: "Fertilised egg implants in uterus wall. Placenta forms (exchange of O₂, nutrients, waste between mother and baby). Gestation ≈ 9 months (40 weeks)." },
    ],
  },
  {
    topicId: "b3-4",
    sections: [
      { heading: "Aerobic Respiration", content: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP). Occurs in mitochondria. Requires oxygen. Releases large amount of energy." },
      { heading: "Anaerobic Respiration", content: "In animals: glucose → lactic acid + some energy. Causes muscle fatigue and oxygen debt. In yeast: glucose → ethanol + CO₂ + some energy (fermentation). Used in baking and brewing." },
      { heading: "Comparison", content: "Aerobic: needs O₂, produces more energy, produces CO₂ and H₂O. Anaerobic: no O₂ needed, less energy, produces lactic acid or ethanol." },
    ],
  },

  // ── BIOLOGY S4 ──

  {
    topicId: "b4-1",
    sections: [
      { heading: "DNA", content: "Deoxyribonucleic acid. Double helix structure. Made of nucleotides (sugar + phosphate + base). Bases: A-T, G-C (complementary base pairing). DNA carries genetic information." },
      { heading: "Genetics Terms", content: "Gene: section of DNA coding for a protein. Allele: different versions of a gene. Genotype: the alleles an organism has (e.g., Tt). Phenotype: the physical characteristic shown. Dominant: expressed when one copy present. Recessive: only expressed when two copies present." },
      { heading: "Genetic Crosses", content: "Use Punnett squares. Monohybrid cross (one gene): Tt × Tt gives 1TT : 2Tt : 1tt (3 tall : 1 short). Test cross: cross with homozygous recessive to determine unknown genotype." },
      { heading: "Natural Selection and Evolution", content: "Variation exists in a population. Those with advantageous traits survive and reproduce more (survival of the fittest). Over many generations, the population evolves. Evidence: fossils, homologous structures, DNA comparison." },
    ],
  },
  {
    topicId: "b4-2",
    sections: [
      { heading: "Genetic Engineering", content: "Cutting a gene from one organism and inserting it into another. Uses restriction enzymes (cut) and ligase (join). Example: human insulin gene inserted into bacteria." },
      { heading: "Selective Breeding", content: "Humans choose organisms with desired traits to breed. Over generations, the trait becomes more common. Examples: high-yield crops, dairy cattle, disease-resistant varieties." },
      { heading: "Fermentation Technology", content: "Bread: yeast ferments sugar → CO₂ makes dough rise. Beer/wine: yeast ferments sugar → ethanol. Yoghurt: bacteria ferment lactose → lactic acid (makes milk thicken and sour)." },
    ],
  },
  {
    topicId: "b4-3",
    sections: [
      { heading: "Pathogens", content: "Disease-causing organisms. Bacteria: cholera, TB, food poisoning. Viruses: HIV, influenza, COVID-19. Fungi: athlete's foot, ringworm. Protists: malaria (Plasmodium)." },
      { heading: "Body Defences", content: "First line: skin, mucus, stomach acid, tears. Second line: white blood cells (phagocytes engulf pathogens). Third line: immune response — lymphocytes produce antibodies specific to each pathogen." },
      { heading: "Vaccination", content: "Inject dead or weakened pathogen. Body produces antibodies and memory cells. If the real pathogen enters later, rapid immune response prevents illness." },
      { heading: "HIV/AIDS", content: "HIV attacks helper T-cells (immune system). Transmitted through body fluids. AIDS: when immune system is severely weakened. Prevention: abstinence, faithfulness, condom use, avoiding sharing needles." },
    ],
  },
  {
    topicId: "b4-4",
    sections: [
      { heading: "Deforestation", content: "Cutting down forests for timber, farming, or settlement. Effects: habitat loss, soil erosion, flooding, increased CO₂, loss of biodiversity. In Uganda: Mabira Forest controversy." },
      { heading: "Pollution", content: "Air: CO₂ (global warming), SO₂ (acid rain), smoke. Water: sewage, chemicals, fertiliser runoff → eutrophication. Land: pesticides, plastic waste, industrial waste." },
      { heading: "Global Warming", content: "Greenhouse gases (CO₂, methane) trap heat in the atmosphere. Effects: rising sea levels, extreme weather, habitat changes. Reduce by: using renewable energy, reducing emissions, planting trees." },
      { heading: "Sustainable Development", content: "Meeting present needs without compromising future generations. Methods: afforestation, recycling, sustainable agriculture, renewable energy, conservation programs." },
    ],
  },
];
