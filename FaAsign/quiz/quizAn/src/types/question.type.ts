import { GAME_STATE } from "../constants/GameState.enum";

export interface Question {
  id: string;
  question_content: string;
  answers: Answer[]
}

export interface Answer {
  answer_content: string;
  correct: boolean;
  selected: boolean
}

export interface QuizContextInterface {
  handlePrev: () => void
  handleNext: () => void
  selectHandler: (id: string, indexInput: number) => () => void
  handleSubmit: (endTime?: boolean) => void
  currentQuestion: Question
  setGameState: React.Dispatch<React.SetStateAction<GAME_STATE>>
  setCurrentIndex: (value: React.SetStateAction<number>) => void
}