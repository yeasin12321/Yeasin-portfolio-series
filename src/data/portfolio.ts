/** Central source of truth for Yeasin Kabir's portfolio. */

export type Palette = { from: string; via: string; to: string; accent: string };

export const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  fullName: 'Yeasin Kabir (ইয়াছিন কবির)',
  displayName: 'Yeasin Kabir',
  firstName: 'YEASIN',
  seriesTag: 'THE SERIES',
  originalLabel: 'A YEASIN ORIGINAL',
  role: 'Web Developer, Student & Bengali Author',
  tagline: ['Web Developer', 'Student', 'Bengali Author'],
  intro:
    'Passionate front-end and full-stack web developer, author of Bengali creative literature, and HSC student at Satkhira Govt. College preparing for top university admissions while building practical software applications.',
  location: 'Satkhira, Khulna Division, Bangladesh',
  email: 'yeasinkabir00000@gmail.com',
  links: {
    github: 'https://github.com/yeasin12321',
    website: 'https://yeasinkabir.pro.bd',
  },
  portrait: {
    src: publicAsset('assets/portrait-720.webp'),
    srcSet: `${publicAsset('assets/portrait-420.webp')} 420w, ${publicAsset('assets/portrait-720.webp')} 720w, ${publicAsset('assets/portrait-1100.webp')} 1100w`,
    alt: 'Portrait of Yeasin Kabir',
  },
  interests: ['Web Development', 'Bengali Literature', 'University Admission Preparation'],
};

export const education = [
  {
    school: 'Satkhira Government College (সাতক্ষীরা সরকারি কলেজ)',
    place: 'Satkhira, Khulna Division, Bangladesh',
    degree: 'Higher Secondary Certificate (HSC) – Humanities',
    period: 'Ongoing',
    score: 'Ongoing',
    focus: 'Bengali, English, ICT, Civics, Sociology, Economics & University Admission Preparation',
  },
];

export const experience = [
  {
    company: 'Yeaxmi Education Care',
    role: 'Founder & Online Instructor',
    place: 'Online',
    period: '2025 – Present',
    points: [
      'Designed comprehensive academic study sheets, admission question banks, and English grammar guides.',
      'Integrated web applications and digital resources to simplify admission strategies for humanities candidates.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year?: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'teledrive-cloud-storage',
    title: 'Teledrive Cloud Storage Engine',
    genre: 'Cloud Storage • Distributed Systems',
    logline:
      'A scalable cloud pipeline utilizing Telegram channels as an unlimited, free distributed storage backend, handling file streams and chunks up to 100GB.',
    stack: ['Node.js', 'Express', 'Multer', 'Axios', 'Telegram Bot API'],
    build: [
      'Built a scalable file-storage pipeline that uses Telegram channels as a distributed storage backend.',
      'Streams files and chunks up to 100GB, with zero cloud-storage overhead and a 100% free distributed architecture.',
    ],
    features: [
      'File streaming and chunk handling up to 100GB',
      'Telegram channels as distributed storage backend',
      'Zero cloud-storage overhead',
      'Free distributed architecture',
    ],
    metrics: [
      { value: '100GB', label: 'single-file streaming' },
      { value: 'Zero', label: 'cloud storage overhead' },
      { value: '100%', label: 'free distributed architecture' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'dynamic-portfolio-pwa',
    title: 'Personal Dynamic Portfolio & PWA',
    genre: 'Portfolio • Progressive Web App',
    logline:
      'A cinematic Netflix-themed portfolio with an interactive showreel, responsive layouts, and Progressive Web App mobile support.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA'],
    build: [
      'Created a cinematic Netflix-themed portfolio with an interactive showreel and responsive layouts.',
      'Added Progressive Web App support for mobile devices, with sub-second load time and a 99+ Lighthouse score.',
    ],
    features: [
      'Interactive cinematic showreel',
      'Responsive, mobile-first layouts',
      'Progressive Web App mobile support',
      'Sub-second load time',
      '99+ Lighthouse score',
    ],
    metrics: [
      { value: '<1s', label: 'load time' },
      { value: '99+', label: 'Lighthouse score' },
      { value: 'Mobile-first', label: 'responsive design' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'literary-archive',
    title: 'Literary Archive & Book Publication Portal',
    genre: 'Literature • Digital Publishing',
    logline:
      'A digital reading and reader-engagement showcase featuring the published Bengali book "ধূসর বসন্ত" and contemporary short stories and poetry.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Google Apps Script'],
    build: [
      'Built a digital reading and reader-engagement showcase for Bengali creative literature.',
      'Features the published book "ধূসর বসন্ত" alongside contemporary short stories and poetry.',
    ],
    features: [
      'Published Bengali book "ধূসর বসন্ত"',
      'Short stories and poetry archive',
      'Dynamic reader interaction',
    ],
    metrics: [
      { value: 'Published', label: 'creative author' },
      { value: '100+', label: 'creative writings' },
      { value: 'Dynamic', label: 'reader interaction' },
    ],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'bondi-pathshala-admission-test',
    title: '1st Place Nationwide',
    org: 'Cyber71 Test Series',
    detail: 'Scored 58.75 / 60 among 230,000 examinees.',
    laurel: '58.75 / 60',
  },
  {
    id: 'dhusor-boshonto',
    title: 'Published Author',
    org: 'ধূসর বসন্ত',
    detail: 'Published Bengali book, June 2026.',
    laurel: 'June 2026',
  },
  {
    id: 'cyber71',
    title: 'Active Team Member',
    org: 'Cyber71 community',
    detail: 'Active team member of the Cyber71 community.',
    laurel: 'Community',
  },
  {
    id: 'automated-solutions',
    title: 'Scalable Automated Solutions',
    org: 'Python & Node.js',
    detail: 'Built scalable automated solutions using Python (PyAutoGUI) and Node.js.',
    laurel: 'Automation',
  },
];

export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Web interfaces and responsive experiences',
    skills: [
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React', mono: 'Re' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'backend-automation',
    title: 'Backend & Automation',
    subtitle: 'Application services and practical automation',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Python scripting', mono: 'Py' },
      { name: 'REST APIs', mono: 'Api' },
    ],
  },
  {
    id: 'systems-environment',
    title: 'Systems & Environment',
    subtitle: 'Development tools and operating environments',
    skills: [
      { name: 'Linux (Kali / Ubuntu)', mono: 'Li' },
      { name: 'Shell Customization', mono: 'Sh' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'VSC' },
    ],
  },
  {
    id: 'creative',
    title: 'Creative',
    subtitle: 'Writing, visual design, and media setup',
    skills: [
      { name: 'Bengali Literary Writing', mono: 'Bn', note: 'Poetry & Fiction' },
      { name: 'UI/UX Glassmorphism', mono: 'UI' },
      { name: 'Video & Media Setup', mono: 'OBS', note: 'OBS' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  JavaScript: ['Personal Dynamic Portfolio & PWA', 'Literary Archive & Book Publication Portal'],
  React: ['Personal Dynamic Portfolio & PWA'],
  HTML5: ['Literary Archive & Book Publication Portal'],
  CSS3: ['Literary Archive & Book Publication Portal'],
  'Tailwind CSS': ['Personal Dynamic Portfolio & PWA'],
  'Node.js': ['Teledrive Cloud Storage Engine', 'Scalable automated solutions'],
  'Express.js': ['Teledrive Cloud Storage Engine'],
  'Python scripting': ['Scalable automated solutions using Python (PyAutoGUI)'],
  'REST APIs': ['Teledrive Cloud Storage Engine'],
  'Bengali Literary Writing': ['Published book "ধূসর বসন্ত"', '100+ creative writings'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Humanities Chapter',
    period: 'Ongoing',
    synopsis: 'Higher Secondary Certificate studies and university admission preparation at Satkhira Government College.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'HSC – Humanities',
        description:
          'Studying Bengali, English, ICT, Civics, Sociology, and Economics while preparing for university admission.',
        tags: ['HSC', 'Humanities', 'Admission Preparation'],
        runtime: 'Ongoing',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Teaching & Learning',
    period: '2025 – Present',
    synopsis: 'Founding Yeaxmi Education Care and creating academic resources for humanities candidates.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Yeaxmi Education Care',
        description:
          'Founded Yeaxmi Education Care and designed study sheets, admission question banks, and English grammar guides.',
        tags: ['Founder', 'Online Instructor', 'Humanities'],
        runtime: '2025 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Digital Admission Resources',
        description:
          'Integrated web applications and digital resources to simplify admission strategies for humanities candidates.',
        tags: ['Web Applications', 'Digital Resources', 'Admission'],
        runtime: '2025 – Present',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Featured Originals',
    period: 'Featured projects',
    synopsis: 'Three original projects spanning cloud storage, a portfolio PWA, and Bengali literary publishing.',
    episodes: projects.map((project, index) => ({
      code: `S03 E0${index + 1}`,
      title: project.title,
      description: project.logline,
      tags: project.stack,
      runtime: 'Featured project',
      palette: project.palette,
    })),
  },
  {
    number: 4,
    title: 'Literary Works & Novels',
    period: '2025 – Present',
    synopsis: 'A dedicated series showcasing original Bengali novels, poetry collections, and published creative literature.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'ধূসর বসন্ত',
        description: 'বন্ধুত্ব যখন ভালোবাসায় রূপ নেয়, আর সেই ভালোবাসাই যখন বিচ্ছেদের কারণ হয়ে দাঁড়ায়। ইয়াছিন ও মুবাশশিরার এক করুণ উপাখ্যান।',
        tags: ['উপন্যাস', 'রোমান্টিক ট্র্যাজেডি', 'ধূসর বসন্ত'],
        runtime: 'Published',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'কাজল চোখের মায়া',
        description: 'গভীর অনুভূতি ও প্রেমের বন্ধনে মোড়ানো মনস্তাত্ত্বিক আখ্যান। প্রি-অর্ডারে পাঠকদের মাঝে তুমুল সাড়া জাগানো নতুন উপন্যাস।',
        tags: ['নতুন উপন্যাস', 'প্রি-অর্ডার', 'কাজল চোখের মায়া'],
        runtime: 'Featured Book',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'নিভৃত সংলাপ (Nivrito Songlap)',
        description: 'অনুভূতি, স্মৃতি ও নীরব আর্তনাদ নিয়ে রচিত আধুনিক বাংলা কবিতা ও আত্মকথনের সমৃদ্ধ সংকলন।',
        tags: ['কবিতা সংকলন', 'সাহিত্য', 'নিভৃত সংলাপ'],
        runtime: 'Poetry Collection',
        palette: amber,
      },
      {
        code: 'S04 E04',
        title: 'রক্তাক্ত কি-বোর্ড',
        description: 'বন্ধুত্বের আড়ালে লুকানো এক বিচ্ছেদের গল্প। একজন হ্যাকারের আত্মত্যাগ যা তার ভালোবাসাকে বাঁচিয়ে দিল, কিন্তু কেড়ে নিল নিজের জীবন।',
        tags: ['থ্রিলার', 'সাইবার লাভ', 'রক্তাক্ত কি-বোর্ড'],
        runtime: 'Novel',
        palette: crimson,
      },
      {
        code: 'S04 E05',
        title: 'রক্তিম কৃষ্ণচূড়া',
        description: 'একজন হ্যাকারের নীরব প্রেম, ব্ল্যাকমেইলিংয়ের বিরুদ্ধে ডিজিটাল যুদ্ধ এবং রক্তিম আত্মত্যাগের এক করুণ উপাখ্যান।',
        tags: ['ডিজিটাল থ্রিলার', 'আত্মত্যাগ', 'রক্তিম কৃষ্ণচূড়া'],
        runtime: 'Novel',
        palette: violet,
      },
      {
        code: 'S04 E06',
        title: 'মেঘবতী ও তার জলজ অভিমান',
        description: 'সাতক্ষীরার চেনা পথে কোডিং আর কবিতার ছন্দে বোনা ইয়াছিন-মুবাসসিরার এক মায়াবী প্রেমকাহিনি। তীব্র অভিমান, রহস্যময় এক মামি আর ভুল বোঝাবুঝি পেরিয়ে ভালোবাসার পূর্ণতা পাওয়ার গল্প।',
        tags: ['প্রেমকাহিনি', 'অভিমান ও পূর্ণতা', 'মেঘবতী'],
        runtime: 'Novel',
        palette: jade,
      },
      {
        code: 'S04 E07',
        title: 'মাছের দাগা',
        description: 'যিনি জীবনের প্রতিটি বাঁকে ধৈর্য আর সাহসের পাঠ দিয়েছেন, সেই শ্রেষ্ঠ শিক্ষক ও অভিভাবক আব্বুর চরণে উৎসর্গকৃত বিশেষ উপন্যাস।',
        tags: ['উৎসর্গকৃত', 'পারিবারিক ও জীবনমুখী', 'মাছের দাগা'],
        runtime: 'Novel',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'Nationwide result',
    title: '1st Place',
    detail: '58.75 / 60 among 230,000 examinees',
    palette: amber,
  },
  {
    label: 'Cloud storage original',
    title: 'Teledrive',
    detail: '100GB file streaming',
    palette: ocean,
  },
  {
    label: 'Portfolio original',
    title: 'Dynamic PWA',
    detail: '99+ Lighthouse score',
    palette: crimson,
  },
  {
    label: 'Literary original',
    title: 'Literary Archive',
    detail: '100+ creative writings',
    palette: violet,
  },
  {
    label: 'Published book',
    title: 'কাজল চোখের মায়া',
    detail: 'Published June 2026',
    palette: jade,
  },
  {
    label: 'Community',
    title: 'Cyber71',
    detail: 'Active team member',
    palette: ocean,
  },
  {
    label: 'Automation',
    title: 'Python & Node.js',
    detail: 'Scalable automated solutions',
    palette: amber,
  },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Profile',
    title: 'Web Developer & Author',
    lines: ['Yeasin Kabir (ইয়াছিন কবির)', profile.location, profile.email],
    chips: ['Web Developer', 'Student', 'Bengali Author'],
  },
  {
    kicker: 'Education',
    title: 'HSC – Humanities',
    lines: [
      education[0].school,
      education[0].focus,
      'Ongoing',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: projects.map((project) => `${project.title} — ${project.logline}`),
  },
  {
    kicker: 'Skills',
    title: 'Technical & Creative',
    lines: skillCategories.map((category) => `${category.title}: ${category.skills.map((skill) => skill.name).join(', ')}`),
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: achievements.map((achievement) => `${achievement.title} — ${achievement.org}: ${achievement.detail}`),
  },
];

export type ProfileId = 'yeasin' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'yeasin',
    name: 'Yeasin',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Projects, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Literature & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & profile', palette: violet },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((total, season) => total + season.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: `${topPicks.length} Highlights`, palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Profile • Education • Experience', palette: violet },
};
