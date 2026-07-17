export interface Job {
  role: string;
  org: string;
  dates: string;
  summary: string;
  stack?: string[];
}

export const experience: Job[] = [
  {
    role: 'Computer Vision Engineer — Freelance',
    org: 'Innovision',
    dates: '2024 — present',
    summary:
      'Ongoing freelance collaboration building vision systems for industrial production lines: real-time mesh defect segmentation with physical measurements (UNet on an industrial camera feed), high-precision screen edge detection, and bakery-line defect detection. Sole developer, from camera to deployed pipeline.',
    stack: ['Python', 'PyTorch', 'OpenCV', 'Industrial cameras', 'Docker'],
  },
  {
    role: 'Associate Director — MLOps',
    org: 'AstraZeneca – Alexion',
    dates: '2024 — present',
    summary:
      'Designed and built a multi-tenant AWS platform (one account per environment: dev, uat, preprod, prod) with isolated project tenants and self-service Terraform templates — developers provision their own compliant infrastructure. Led the implementing team; now product owner of the platform. Also leading internal and vendor teams from kickoff to production, and delivery of agentic frameworks and LLM-based solutions.',
    stack: ['AWS', 'Terraform', 'Platform engineering', 'Agentic AI', 'Compliance'],
  },
  {
    role: 'Machine Learning Engineer',
    org: 'ISDIN',
    dates: '2023 — 2024',
    summary:
      'Owned the full ML lifecycle on GCP end to end. Built the Feature Store and the MLOps / CI-CD pipelines used by the whole Data Science team, defined team-wide good practices, and shipped internal Python packages that sped up every new project. LLM work with prompt engineering and RAG.',
    stack: ['GCP', 'Terraform', 'Airflow', 'Docker', 'PaLM'],
  },
  {
    role: 'Machine Learning Engineer',
    org: 'Mad Collective',
    dates: '2023',
    summary:
      'Maintained and improved the AWS infrastructure used by the entire Data Science team; refactored legacy code and brought repositories up to standard with tests and containers.',
    stack: ['AWS', 'Terraform', 'Docker', 'Airflow'],
  },
  {
    role: 'Machine Learning Engineer',
    org: 'Vintra',
    dates: '2021 — 2022',
    summary:
      'Built a distributed image-generation system to improve model training, exported neural networks to ONNX / TensorRT with validation tooling, and introduced MLOps methodology to the company via an Airflow proof of concept.',
    stack: ['PyTorch', 'TensorFlow', 'ONNX', 'TensorRT', 'FAISS'],
  },
  {
    role: 'Researcher & Backend Developer',
    org: 'inLab FIB · UPC',
    dates: '2018 — 2021',
    summary:
      'ML, deep learning and computer vision projects with SEAT and Cdmon — classification, churn prediction, forecasting, NLP. Earlier: backend development for external clients.',
    stack: ['TensorFlow', 'Scikit-learn', 'Django', 'Flask'],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Cloud', items: ['GCP', 'AWS (EC2, ECS, VPC, S3)'] },
  { group: 'Infrastructure as Code', items: ['Terraform'] },
  { group: 'Containers & CI/CD', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD pipelines'] },
  { group: 'MLOps', items: ['Apache Airflow', 'Feature Stores', 'Model lifecycle', 'ONNX', 'TensorRT'] },
  { group: 'GenAI', items: ['RAG', 'Agentic frameworks', 'Prompt engineering'] },
  { group: 'Languages & ML', items: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn'] },
];

export const education = [
  'MSc in Data Science — La Salle (2022–2023)',
  'Degree in Informatics Engineering — UPC, FIB (2015–2021)',
];
