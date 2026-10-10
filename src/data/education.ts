export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  location: string;
  date: string;
  certificate: string | null;
}

export const education: EducationItem[] = [
  {
    school: "Hacktiv8",
    degree: "AI-Enhanced Full Stack Developer Bootcamp",
    field: "TypeScript",
    location: "Jakarta, Indonesia",
    date: "January 2026 – April 2026",
    certificate:
      "https://drive.google.com/file/d/1Fx2d_ImzKfSA5DSk1oxPUeWf3nags-tk/view",
  },
  {
    school: "Telkom University",
    degree: "Bachelor of Computer Engineering",
    field: "Cum Laude, GPA 3.61/4.00",
    location: "Bandung, Indonesia",
    date: "2020 – 2024",
    certificate: null,
  },
  {
    school: "Bangkit Academy",
    degree: "Cloud Computing, GOTO, & Traveloka",
    field: "GPA 3.52/4.00, Transcript & Badge Achievement",
    location: "Bandung, Indonesia",
    date: "January 2023 – June 2023",
    certificate:
      "https://drive.google.com/file/d/1RcaYfLood1boyVPIFg8d5BdbIfT_cyb_/view",
  },
];
