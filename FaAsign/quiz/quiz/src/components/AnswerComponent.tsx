import classnames from 'classnames'
import { Answer } from '../types/question.type'
import { useContext } from 'react'
import { QuizContext } from '../App'

interface Props {
  index: number
  answer: Answer
  review: boolean
}

function AnswerComponent(props: Props) {
  const { index, answer, review } = props
  const incorrectState = answer.selected && answer.selected !== answer.correct

  const { selectHandler, currentQuestion } = useContext(QuizContext)
  return (
    <div
      onClick={review ? undefined : selectHandler(currentQuestion.id, index)}
      className={classnames(
        'my-3 text-lg text-left font-medium px-5 py-4 rounded-md border-2 border-gray-300 cursor-pointer shadow-md',
        review
          ? {
              'bg-green-correct text-white': answer.correct,
              'bg-red-incorrect text-white': incorrectState,
              'bg-white': !answer.correct && !incorrectState
            }
          : {
              'bg-white': !answer.selected,
              'bg-navy-hover text-white': answer.selected,
              'hover:bg-navy-hover hover:text-white': !review
            }
      )}
    >
      <p>
        {index + 1}
        {')'} {answer.answer_content}
      </p>
    </div>
  )
}

export default AnswerComponent
