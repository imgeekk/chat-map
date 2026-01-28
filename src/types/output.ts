export interface Section {
  heading: string;
  points: string[];
}

export interface GeneratedOutput {
  title: string;
  summary: string;
  sections: Section[];
}
