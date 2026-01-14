
export interface Question {
  id: string;
  subject: string;
  question: string;
  correctAnswer: string;
  options: string[];
}

export interface TestState {
  currentQuestionIndex: number;
  answers: Record<number, string>;
  isFinished: boolean;
  startTime: number | null;
  endTime: number | null;
}

export enum AppView {
  HOME = 'HOME',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT'
}
