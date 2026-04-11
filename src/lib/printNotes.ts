import { BRAND, subjectLabels } from "@/lib/constants";
import type { Topic } from "@/data/topics";
import type { TopicNote } from "@/data/notes";

interface PrintOptions {
  subject: string;
  level: number;
  topics: Topic[];
  notes: TopicNote[];
  mode: "full" | "practice";
}

export function printNotes({ subject, level, topics, notes, mode }: PrintOptions) {
  const printContent = topics.map((topic) => {
    const note = notes.find((n) => n.topicId === topic.id);
    if (!note) return "";

    const formulas = topic.formulas?.length
      ? `<div style="margin:12px 0;background:#f0f4ff;padding:10px 14px;border-radius:8px;border-left:4px solid #3b5bdb;">
          <strong style="color:#3b5bdb;">📐 Key Formulas</strong><br/>
          ${topic.formulas.map(f => `<code style="background:#e7ecff;padding:3px 8px;margin:2px 4px;border-radius:4px;font-family:monospace;font-size:13px;">${f}</code>`).join(" ")}
        </div>`
      : "";

    const sections = mode === "full"
      ? `<div style="margin:10px 0;">
          <h4 style="color:#1a5276;border-bottom:1px solid #ddd;padding-bottom:4px;">📖 Section 1: Detailed Notes</h4>
          ${note.sections.map(s => `<div style="margin:8px 0;"><strong>${s.heading}</strong><p style="margin:4px 0;color:#333;line-height:1.6;">${s.content}</p></div>`).join("")}
        </div>`
      : "";

    const examples = note.examples?.length
      ? `<div style="margin:12px 0;padding:12px;background:#fef9e7;border-radius:8px;border-left:4px solid #f39c12;">
          <h4 style="color:#d68910;margin:0 0 8px 0;">💡 Section 2: Worked Examples</h4>
          ${note.examples.map((ex, i) => `<div style="margin:8px 0;padding:8px;background:white;border-radius:6px;border:1px solid #fdebd0;">
            <p><strong>Example ${i + 1}:</strong> ${ex.problem}</p>
            <p style="color:#1a5276;"><strong>Solution:</strong> ${ex.solution}</p>
          </div>`).join("")}
        </div>`
      : "";

    const keyPoints = `<div style="margin:12px 0;padding:12px;background:#eafaf1;border-radius:8px;border-left:4px solid #27ae60;">
      <h4 style="color:#1e8449;margin:0 0 8px 0;">📝 Section 3: Review & Key Points</h4>
      <ul style="margin:4px 0;padding-left:20px;">${topic.keyPoints.map(p => `<li style="margin:3px 0;color:#333;line-height:1.5;">${p}</li>`).join("")}</ul>
    </div>`;

    return `
      <div style="page-break-inside:avoid;margin:20px 0;padding:20px;border:2px solid #ddd;border-radius:12px;background:white;">
        <h2 style="margin:0 0 4px 0;color:#1a1a2e;font-size:18px;">${topic.title}</h2>
        <p style="margin:0 0 10px 0;color:#666;font-size:13px;font-style:italic;">${topic.description}</p>
        ${formulas}
        ${sections}
        ${examples}
        ${keyPoints}
      </div>
    `;
  }).join("");

  const title = mode === "practice"
    ? `${subjectLabels[subject]} S.${level} — Practice Paper`
    : `${subjectLabels[subject]} S.${level} — Complete Study Notes`;

  const pw = window.open("", "_blank");
  if (!pw) return;

  pw.document.write(`<!DOCTYPE html><html><head>
    <title>${title} | ${BRAND.fullBrand}</title>
    <style>
      body { font-family: 'Segoe UI', system-ui, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; color: #1a1a2e; }
      .header { text-align: center; border-bottom: 3px solid #1a5276; padding-bottom: 16px; margin-bottom: 20px; }
      .header h1 { margin: 0; font-size: 22px; color: #1a5276; }
      .header .partner { color: #666; font-size: 12px; margin-top: 4px; letter-spacing: 2px; }
      .header .subtitle { color: #888; font-size: 14px; margin-top: 8px; }
      .footer { text-align: center; color: #999; margin-top: 32px; font-size: 11px; border-top: 1px solid #ddd; padding-top: 12px; }
      code { font-size: 13px; }
      @media print { body { padding: 0; } div { page-break-inside: avoid; } }
    </style>
  </head><body>
    <div class="header">
      <h1>📚 ${BRAND.name}</h1>
      <div class="partner">${BRAND.partner}</div>
      <div class="subtitle">${title} • Uganda Secondary Curriculum</div>
    </div>
    ${printContent || "<p style='text-align:center;color:#999;'>No notes available for this selection yet.</p>"}
    <div class="footer">
      <p>Compiled by ${BRAND.name} in collaboration with ${BRAND.partner}</p>
      <p>${BRAND.footer}</p>
    </div>
  </body></html>`);
  pw.document.close();
  pw.focus();
  setTimeout(() => pw.print(), 300);
}
