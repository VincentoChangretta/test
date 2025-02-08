export interface SeminarData {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
}

export const serverURL = "http://localhost:3000/seminars"
