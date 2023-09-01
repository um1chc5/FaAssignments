import { useContext, useEffect } from 'react'
// import { Question } from '../../types/question.type'
import Button from '../../components/Button'
import AnswerComponent from '../../components/AnswerComponent'
// import { GAME_STATE } from '../../constants/GameState.enum'
import { QuizContext } from '../../App'

// interface ReviewProps {
//   currentQuestion: Question
//   handleNext: () => void
//   handlePrev: () => void
//   setGameState: (value: React.SetStateAction<GAME_STATE>) => void
// }

function ReviewComponent() {
  const { currentQuestion, handleNext, handlePrev } = useContext(QuizContext)
  useEffect(() => {
    document.body.style.overflowY = 'scroll'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <div className='overflow-y-auto w-[36rem] md:w-[40rem] lg:w-[45rem]'>
      <div>
        <Button
          content='Previous'
          action={handlePrev}
          className={currentQuestion.id === '1' ? 'bg-gray-200 text-gray-300' : undefined}
        />
        <Button
          content='Next'
          action={handleNext}
          className={
            currentQuestion.id === '5'
              ? 'bg-gray-200 text-gray-300'
              : 'text-slate-900 bg-green-light-button hover:bg-green-correct hover:text-white'
          }
        />
        <Button
          content='Restart'
          action={() => window.location.reload()}
          className='text-white bg-yellow-button hover:bg-yellow-400'
        />
      </div>
      <div className='bg-white rounded-lg p-5 mt-16 shadow-lg h-[14rem] relative'>
        <div className='w-[5rem] h-[5rem] absolute left-[50%] translate-x-[-50%] top-0 translate-y-[-50%] text-[#EF4444] font-bold text-base bg-white rounded-full shadow-xl flex items-center justify-center'>
          <h3>End!</h3>
        </div>
        <h1 className='mt-16 text-navy-light text-lg font-medium'>
          Question <span className='font-extrabold'>{currentQuestion.id}</span>
          /5
        </h1>
        <h2 className='mt-5 font-bold text-xl text-slate-800'>{currentQuestion.question_content}</h2>
      </div>
      <div className='answers px-3 md:px-10 mt-12'>
        {currentQuestion.answers.map((answer, index) => (
          <AnswerComponent answer={answer} index={index} key={index} review={true} />
        ))}
      </div>
    </div>
  )
}

export default ReviewComponent
