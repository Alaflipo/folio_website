import { InfoProps } from "../Components/InfoBlock";
import { Strength } from "../Components/StrengthsBlock";

export const education: InfoProps[] = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    university: "Technical University Eindhoven",
    date: "2019 - 2021 (ongoing)",
    location: "Eindhoven",
    specialties: [
      "Emphasis on Artificial Intelligence",
      "Chosen electives in Data Science",
      "Cum Laude propaedeutic certificate",
    ],
  },
  {
    title: "B.Sc. in Psychology & Technology",
    university: "Technical University Eindhoven",
    date: "2019 - 2021 (ongoing)",
    location: "Eindhoven",
    specialties: [
      "Emphasis on ICT and (social) robotics",
      "Active member at study association Intermate",
      "Cum Laude propaedeutic certificate",
    ],
  },
  {
    title: "Propaedeutic year Cognitive Science & Artificial Intelligence",
    university: "University Tilburg",
    date: "2018 - 2019",
    location: "Tilburg",
    specialties: [
      "Active member at study association Flux",
      "Cum Laude propaedeutic certificate",
    ],
  },
  {
    title: "VWO atheneum",
    university: "Fioretti College",
    date: "2012 - 2017",
    location: "Lisse",
    specialties: [
      "Profile: Nature & Health and Nature & Technology",
      "With cum laude mention",
      "Wide variety of subjects including physics, mathematics, biology, chemistry, art and theater",
      "Took part in multiple theater plays",
    ],
  },
];

export const experience: InfoProps[] = [
  {
    title: "Frontend developer and UI/UX designer",
    university: "Code Yellow",
    date: "2021 - 2022 (ongoing)",
    location: "Eindhoven",
    explanation:
      "Code Yellow is a software company that develops bespoke software solutions for a variety of customers. We have partners in marketing, healthcare, logistics and production.",
    specialties: [
      "Part of team Healthcare (most notable partner: Pharmi)",
      "Design and implement app and website designs for various products",
      "Also some backend experience",
    ],
  },
  {
    title: "Editor magazine Intermania",
    university: "Intermania S.V. Intermate",
    date: "2021 - 2022 (ongoing)",
    location: "Eindhoven",
    explanation:
      "The intermania is an online magazine that posts articles weekly. Within this commitee I write articles and make and edit promotional videos. Besides this the intermania also has a monthly podcast which I assist in creating.",
    specialties: [
      "Learned to work with Indesign",
      "Expanded my experience in film making and using video editing software.",
    ],
  },
  {
    title: "Logo and poster designer",
    university: "Promocie S.V. Intermate",
    date: "2020 - 2022",
    location: "Eindhoven",
    explanation:
      "Designing logo's and posters for multiple committees within study association Intermate. Here I learned to work with Illustrator and photoshop.",
    specialties: [],
  },
  {
    title: "Commissioner of external affairs",
    university: "Smobo S.V. Intermate",
    date: "2018 - 2019",
    location: "Eindhoven",
    explanation:
      "Talking to different companies and looking for sponsor-ships for the photo year book.",
    specialties: [],
  },
  {
    title: "Restaurant waiter",
    university: "De oude pastorie",
    date: "2017 - 2020",
    location: "Lisse",
    specialties: [
      "Front runner as waiter in a restaurant",
      "Bookkeping of daily earning and administrative tasks",
    ],
  },
];

export const strengths: Strength[] = [
  {
    name: "sociable",
    strength: 3,
  },
  {
    name: "taking the lead",
    strength: 1,
  },
  {
    name: "collaborative",
    strength: 2,
  },
  {
    name: "creative",
    strength: 3,
  },
  {
    name: "scrum",
    strength: 1,
  },
  {
    name: "hard-working",
    strength: 3,
  },
  {
    name: "eye for detail",
    strength: 2,
  },
  {
    name: "developer",
    strength: 3,
  },
  {
    name: "designer",
    strength: 2,
  },
];

export const strengthsSoftware: Strength[] = [
  {
    name: "Javascript / Typescript",
    strength: 3,
  },
  {
    name: "HTML/CSS",
    strength: 3,
  },
  {
    name: "Python",
    strength: 3,
  },
  {
    name: "C/C++",
    strength: 2,
  },
  {
    name: "Java",
    strength: 2,
  },
  {
    name: "React (JS)",
    strength: 3,
  },
  {
    name: "SQL",
    strength: 1,
  },
  {
    name: "Swift",
    strength: 1,
  },
  {
    name: "GIT",
    strength: 3,
  },
  {
    name: "Figma",
    strength: 3,
  },
  {
    name: "Illustrator",
    strength: 3,
  },
  {
    name: "Photoshop",
    strength: 2,
  },
  {
    name: "InDesign",
    strength: 1,
  },
  {
    name: "Stata/SPSS",
    strength: 2,
  },
  {
    name: "Arduino",
    strength: 1,
  },
];

export const strengthsLanguages: Strength[] = [
  {
    name: "English",
    strength: 3,
  },
  {
    name: "Dutch",
    strength: 3,
  },
  {
    name: "German",
    strength: 2,
  },
  {
    name: "French",
    strength: 1,
  },
];
