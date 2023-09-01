import { createContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { GAME_STATE } from './constants/GameState.enum'
import StartGame from './pages/StartGame'
import InGame from './pages/InGame'
import EndGame from './pages/EndGame'
import questions from './data/questions'
import { Question, QuizContextInterface } from './types/question.type'
import ReviewComponent from './pages/ReviewComponent'

// Khai báo context cho Quiz App chứa các state và method thường dùng
export const QuizContext = createContext({} as QuizContextInterface)

function App() {
  const [gameState, setGameState] = useState(GAME_STATE.START_GAME)
  const [questionList, setQuestionList] = useState(questions as Question[])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [point, setPoint] = useState(0)

  const handlePrev = () => {
    if (currentIndex === 0) {
      return
    }
    setCurrentIndex((prev) => prev - 1)
  }

  const handleNext = () => {
    if (currentIndex === questionList.length - 1) {
      return
    }
    setCurrentIndex((prev) => prev + 1)
  }

  const selectHandler = (id: string, indexInput: number) => () => {
    setQuestionList((prev) =>
      prev.map((question) => {
        if (question.id === id) {
          const newAnswer = question.answers.map((answer, index) => {
            if (index === indexInput) return { ...answer, selected: !answer.selected }
            return { ...answer, selected: false }
          })

          return {
            ...question,
            answers: newAnswer
          }
        }
        return question
      })
    )
  }

  const handleSubmit = (endTime?: boolean) => {
    let point = 0
    questionList.forEach((question) => {
      question.answers.forEach((answer) => {
        if (answer.selected && answer.correct) {
          point += 1
        }
      })
    })

    if (endTime) {
      setPoint(point)
      console.log(questionList)
      setGameState(GAME_STATE.END_GAME)
      return
    } else {
      const submitPrompt = window.confirm('Do you want to submit answers ?')
      if (submitPrompt) {
        setPoint(point)
        console.log(questionList)
        setGameState(GAME_STATE.END_GAME)
      }
    }
  }

  const renderPage = () => {
    switch (gameState) {
      case GAME_STATE.START_GAME:
        return <StartGame />
      case GAME_STATE.IN_GAME:
        return <InGame />
      case GAME_STATE.END_GAME:
        return <EndGame point={point} />
      default:
        return <ReviewComponent />
    }
  }

  const QuizContextValue = {
    handlePrev,
    handleNext,
    selectHandler,
    handleSubmit,
    currentQuestion: questionList[currentIndex],
    setGameState,
    setCurrentIndex
  }

  return (
    <QuizContext.Provider value={QuizContextValue}>
      <div className={'min-h-[100vh] pb-16 bg-main-purple font-sans pt-16 flex justify-center'}>{renderPage()}</div>
    </QuizContext.Provider>
  )
}

export default App
