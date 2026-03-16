import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Accepts optional lang arg: npx tsx scripts/generate-pdf.ts en
const LANG = (process.argv[2] ?? "pt") as "pt" | "en" | "es";
const LANG_LABEL: Record<string, string> = { pt: "pt", en: "en", es: "es" };
const OUTPUT = path.resolve(__dirname, `../jose-amaro-cv-${LANG_LABEL[LANG]}.pdf`);
const URL = "http://localhost:3000";

const PRINT_CSS = `
  /* ── Garantir cores no print ── */
  *, *::before, *::after {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-scheme: dark !important;
  }

  /* ── Esconder UI de navegação ── */
  header, nav { display: none !important; }

  /* ── Hero: forçar 2 colunas em A4 ── */
  #pdf-hero {
    display: grid !important;
    grid-template-columns: 3fr 2fr !important;
    gap: 2.5rem !important;
    align-items: start !important;
  }
  #pdf-hero-main {
    grid-column: 1 !important;
  }
  #pdf-hero-photo {
    grid-column: 2 !important;
  }

  /* ── Controle de quebra de página ── */
  section {
    page-break-inside: avoid;
  }

  /* Cards de experiência nunca quebram no meio */
  section > div > div[class*="rounded-2xl"],
  section > div > div[class*="rounded-xl"] {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* Seções longas podem quebrar, mas não os cards internos */
  section > .space-y-4 > div,
  section > .space-y-3 > div,
  section > .space-y-6 > div {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* Grid de projetos GitHub: nunca quebra card */
  .grid > div {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* Footer sempre junto */
  footer {
    page-break-inside: avoid;
    break-inside: avoid;
  }
`;

async function generate() {
  console.log(`Gerando PDF no idioma: ${LANG.toUpperCase()}`);
  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });

  // Define o idioma no localStorage antes de carregar a página
  await page.addInitScript((lang) => {
    localStorage.setItem("resume-lang", lang);
  }, LANG);

  console.log(`Navegando para ${URL} ...`);
  await page.goto(URL, { waitUntil: "networkidle" });

  // Aguarda imagens e fontes carregarem
  await page.waitForTimeout(2500);

  // Injeta CSS de print
  await page.addStyleTag({ content: PRINT_CSS });

  console.log("Gerando PDF...");
  await page.pdf({
    path: OUTPUT,
    format: "A4",
    landscape: false,
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
    scale: 0.72,
  });

  await browser.close();
  console.log(`\nPDF gerado [${LANG.toUpperCase()}]: ${OUTPUT}`);
}

generate().catch((err) => {
  console.error("Erro:", err);
  process.exit(1);
});
