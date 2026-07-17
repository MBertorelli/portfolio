// Generates the public, sanitized CV (no phone number, no home address).
// Run: npm run generate:cv  ->  public/cv-mathias-bertorelli.pdf
// Brand colors come from personal_branding/palette.json.
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { readFile, writeFile } from 'node:fs/promises';

const palette = JSON.parse(await readFile(new URL('../personal_branding/palette.json', import.meta.url)));
const hex = (name) => {
  const h = palette.colors[name].hex;
  return rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
};
const INK = hex('ink');
const SOFT = hex('ink-soft');
const FAINT = hex('ink-faint');
const ACCENT = hex('accent-deep');
const BORDER = hex('border');

const cv = {
  name: 'MATHIAS BERTORELLI ARGIBAY',
  title: 'MLOps · ML Engineer · GenAI Engineer',
  contact: 'mathiasbertorelli@gmail.com  ·  Barcelona, Spain  ·  mbertorelli.github.io/portfolio',
  summary:
    'Computer Science degree, MSc in Data Science. I design and run the platforms ML teams build on — with a strong focus on good practices and reliable, scalable solution design.',
  experience: [
    {
      role: 'Computer Vision Engineer — Freelance',
      org: 'Innovision',
      dates: 'Oct 2024 – Present',
      bullets: [
        'Ongoing freelance collaboration: vision systems for industrial production lines, delivered end to end — from camera to production pipeline.',
        'Real-time mesh defect detection: UNet segmentation on an industrial camera feed with physical measurements overlaid live; high-precision screen edge detection; bakery-line defect detection.',
      ],
      stack: 'Python · PyTorch · OpenCV · Industrial cameras · Docker',
    },
    {
      role: 'Associate Director — MLOps',
      org: 'AstraZeneca – Alexion',
      dates: 'Nov 2024 – Present',
      bullets: [
        'Designed and built a multi-tenant AWS cloud platform — one account per environment (dev, uat, preprod, prod) with isolated project tenants — leading a team of engineers; now product owner of the platform.',
        'Self-service infrastructure: curated Terraform templates let development teams provision their own compliant resources, removing cross-team bottlenecks.',
        'Lead internal and vendor teams across the full project lifespan, from kickoff to productionalization; project blueprints covering solution design, architecture, cybersecurity and compliance.',
        'Led and contributed to agentic frameworks and LLM-based solutions.',
      ],
      stack: 'AWS · Terraform · Platform engineering · GenAI',
    },
    {
      role: 'Machine Learning Engineer',
      org: 'ISDIN',
      dates: 'Sep 2023 – Nov 2024',
      bullets: [
        'Owned the full ML model lifecycle on Google Cloud Platform, end to end.',
        'Defined good practices and methodologies for the Data Science team; trained Data Scientists in tooling and practices.',
        'Designed and maintained internal Python packages that sped up new DS projects.',
        'Designed and implemented the Feature Store and the MLOps / CI-CD pipelines used by the team.',
        'LLM projects: prompt engineering and RAG.',
      ],
      stack: 'GCP · Terraform · Airflow · Docker · PaLM',
    },
    {
      role: 'Machine Learning Engineer',
      org: 'Mad Collective',
      dates: 'Jan 2023 – Sep 2023',
      bullets: [
        'Maintained and improved the cloud infrastructure used by the entire Data Science team.',
        'Refactored legacy code; ensured DS repositories ship with tests and Docker containers.',
        'Maintained in-house Python packages on an internal DevPI.',
      ],
      stack: 'Terraform · AWS (EC2, ECS, VPC, S3) · Docker · Airflow',
    },
    {
      role: 'Machine Learning Engineer',
      org: 'Vintra',
      dates: 'Jun 2021 – Nov 2022',
      bullets: [
        'Built a distributed system generating image batches to improve model training, using vector databases and MySQL.',
        'Exported neural-network models to ONNX and TensorRT, with validation of correct operation in the new format.',
        'Built the proof of concept that introduced the MLOps methodology (Apache Airflow) to the company workflow.',
      ],
      stack: 'TensorFlow · PyTorch · FAISS · OpenCV · TensorRT · ONNX · Airflow',
    },
    {
      role: 'Researcher / Backend Developer — inLab FIB',
      org: 'UPC, Barcelona',
      dates: 'Dec 2018 – Jun 2021',
      bullets: [
        'ML, deep learning and computer vision projects with SEAT and Cdmon: computer vision, churn prediction, forecasting and NLP.',
        'Backend development for external clients (Django, Flask, Docker).',
      ],
    },
  ],
  education: [
    'MSc in Data Science — La Salle (2022–2023)',
    'Degree in Informatics Engineering — UPC, FIB (2015–2021)',
  ],
  extra: [
    'Languages: Spanish and Catalan (native) · English (advanced)',
    'Core stack: Python · Terraform · Docker · Airflow · GCP · AWS · CI/CD · MLOps · RAG / agentic systems',
  ],
};

const doc = await PDFDocument.create();
const font = await doc.embedFont(StandardFonts.Helvetica);
const bold = await doc.embedFont(StandardFonts.HelveticaBold);

const A4 = [595.28, 841.89];
const MARGIN = 46;
const WIDTH = A4[0] - MARGIN * 2;
let page = doc.addPage(A4);
let y = A4[1] - MARGIN;

const ensure = (needed) => {
  if (y - needed < MARGIN) {
    page = doc.addPage(A4);
    y = A4[1] - MARGIN;
  }
};

const wrap = (text, f, size, width) => {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    const probe = line ? `${line} ${w}` : w;
    if (f.widthOfTextAtSize(probe, size) > width && line) {
      lines.push(line);
      line = w;
    } else line = probe;
  }
  if (line) lines.push(line);
  return lines;
};

const text = (str, { f = font, size = 10, color = INK, x = MARGIN, width = WIDTH, gap = 3 } = {}) => {
  for (const line of wrap(str, f, size, width)) {
    ensure(size + gap);
    page.drawText(line, { x, y: y - size, size, font: f, color });
    y -= size + gap;
  }
};

const rule = () => {
  ensure(14);
  y -= 6;
  page.drawLine({ start: { x: MARGIN, y }, end: { x: A4[0] - MARGIN, y }, thickness: 0.7, color: BORDER });
  y -= 8;
};

const section = (label) => {
  ensure(70); // keep the header attached to at least two lines of content
  y -= 10;
  page.drawCircle({ x: MARGIN + 2.5, y: y - 4.5, size: 2.5, color: ACCENT });
  page.drawText(label.toUpperCase(), { x: MARGIN + 11, y: y - 8, size: 9.5, font: bold, color: ACCENT });
  y -= 16;
};

// header
text(cv.name, { f: bold, size: 19, gap: 6 });
text(cv.title, { f: bold, size: 11, color: ACCENT, gap: 6 });
text(cv.contact, { size: 9.5, color: SOFT, gap: 4 });
rule();
text(cv.summary, { size: 10, color: SOFT });

section('Experience');
for (const job of cv.experience) {
  ensure(40);
  const dateW = font.widthOfTextAtSize(job.dates, 9);
  page.drawText(job.role, { x: MARGIN, y: y - 11, size: 11, font: bold, color: INK });
  page.drawText(job.dates, { x: A4[0] - MARGIN - dateW, y: y - 11, size: 9, font, color: FAINT });
  y -= 15;
  text(job.org, { size: 10, color: ACCENT, gap: 5 });
  for (const b of job.bullets) {
    ensure(14);
    page.drawText('–', { x: MARGIN + 4, y: y - 9.5, size: 9.5, font, color: FAINT });
    const save = y;
    y = save;
    for (const line of wrap(b, font, 9.5, WIDTH - 16)) {
      ensure(12);
      page.drawText(line, { x: MARGIN + 16, y: y - 9.5, size: 9.5, font, color: SOFT });
      y -= 12;
    }
  }
  if (job.stack) text(job.stack, { size: 8.5, color: FAINT, x: MARGIN + 16, width: WIDTH - 16, gap: 4 });
  y -= 3;
}

section('Education');
for (const e of cv.education) text(e, { size: 10, color: SOFT, gap: 4 });

section('Additional');
for (const e of cv.extra) text(e, { size: 10, color: SOFT, gap: 4 });

const bytes = await doc.save();
await writeFile(new URL('../public/cv-mathias-bertorelli.pdf', import.meta.url), bytes);
console.log(`written public/cv-mathias-bertorelli.pdf (${bytes.length} bytes, ${doc.getPageCount()} pages)`);
