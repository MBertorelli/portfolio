export const SITE_TITLE = 'Mathias Bertorelli — MLOps & Platform Engineer';
export const SITE_DESCRIPTION =
  'MLOps, ML and Platform engineer in Barcelona. I design and run the platforms ML teams build on. Available for freelance work.';

export const NAME = 'Mathias Bertorelli';
export const POSITIONING = 'I design and run the platforms ML teams build on.';
export const EMAIL = 'mathiasbertorelli@gmail.com';
export const GITHUB_URL = 'https://github.com/MBertorelli';
// TODO(mathias): confirm the LinkedIn slug is correct before sharing the site.
export const LINKEDIN_URL = 'https://www.linkedin.com/in/mathias-bertorelli';
export const CV_FILENAME = 'cv-mathias-bertorelli.pdf';

/** BASE_URL-aware link helper — required because the site lives under /portfolio on GitHub Pages. */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
export const href = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;
