// import { Question } from '../../types/question.type'
import Button from '../../components/Button'
import { useEffect } from 'react'
import AnswerComponent from '../../components/AnswerComponent'
import Timer from '../../components/Timer'
import { QuizContext } from '../../App'
import { useContext } from 'react'

// interface InGameProps {
//   currentQuestion: Question
//   handleNext: () => void
//   handlePrev: () => void
//   selectHandler: (id: string, indexInput: number) => () => void
//   handleSubmit: (endTime?: boolean) => void
// }

// Nhìn chung em đã làm xong cách dùng truyền props xong xuôi và có thử chuyển sang cách dùng useContext và thấy tiện hơn rất là nhiều

function InGame() {
  const { currentQuestion, handleNext, handlePrev, handleSubmit } = useContext(QuizContext)
  // console.log(currentQuestion)

  // Chức năng cài sẵn scroll để tránh giật màn hình khi đến câu số 5 không overflow
  useEffect(() => {
    document.body.style.overflowY = 'scroll'

    ///
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
        {currentQuestion.id === '5' && (
          <Button content='Submit' action={handleSubmit} className='text-white bg-yellow-button hover:bg-yellow-400' />
        )}
      </div>
      <div className='bg-white rounded-lg p-5 mt-16 shadow-lg h-[14rem] relative'>
        <Timer handleSubmit={handleSubmit} />
        <h1 className='text-navy-light text-lg font-medium mt-16'>
          Question <span className='font-extrabold'>{currentQuestion.id}</span>
          /5
        </h1>
        <h2 className='mt-5 font-bold text-xl text-slate-800'>{currentQuestion.question_content}</h2>
      </div>
      <div className='answers px-3 md:px-10 mt-12'>
        {currentQuestion.answers.map((answer, index) => (
          <AnswerComponent
            answer={answer}
            index={index}
            key={index}
            review={false}
            // selectHandler={selectHandler}
            // currentQuestion={currentQuestion}
          />
        ))}
      </div>
    </div>
  )
}

export default InGame
