import cfoReadinessPdf from "@/assets/cfo-readiness-checklist.pdf.asset.json";
import cashFlowPdf from "@/assets/cash-flow-forecast-template.pdf.asset.json";
import kpiPdf from "@/assets/kpi-dashboard-template.pdf.asset.json";

export type Guide = {
  slug: string;
  emoji: string;
  title: string;
  desc: string;
  bullets: string[];
  pdf: string;
  /** Public Google Drive download link shown after form submission. */
  download: string;
};

export const guides: Guide[] = [
  {
    slug: "cfo-readiness-checklist",
    emoji: "📄",
    title: "CFO Readiness Checklist",
    desc: "12-page PDF",
    bullets: ["50-point readiness audit", "Roles & responsibilities map", "Stage-by-stage rollout plan"],
    pdf: cfoReadinessPdf.url,
    download: "https://drive.google.com/file/d/10uU3aYhLp3iBCseIaLq2TCsDkyTVMRET/view?usp=sharing",
  },
  {
    slug: "cash-flow-forecast-template",
    emoji: "📊",
    title: "Cash Flow Forecast Template",
    desc: "Excel workbook",
    bullets: ["13-week rolling model", "Scenario toggles", "Bank balance tracker"],
    pdf: cashFlowPdf.url,
    download: "https://docs.google.com/spreadsheets/d/1RzwJKY8PRHabyB26X0P6f_PjRbzBwRQX/edit?usp=sharing",
  },
  {
    slug: "kpi-dashboard-template",
    emoji: "📈",
    title: "KPI Dashboard Template",
    desc: "Power BI / Excel",
    bullets: ["Service-firm KPI library", "Drill-down by client/project", "Monthly review template"],
    pdf: kpiPdf.url,
    download: "https://docs.google.com/spreadsheets/d/1fgm66p7_Gh-9aQ4h5uYCJM71aw4bWaLP/edit?usp=sharing",
  },
];
