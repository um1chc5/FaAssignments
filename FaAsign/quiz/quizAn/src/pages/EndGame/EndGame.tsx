import { QuizContext } from '../../App'
import Button from '../../components/Button'
import { GAME_STATE } from '../../constants/GameState.enum'
import { useContext } from 'react'

interface Props {
  point: number
}

function EndGame(props: Props) {
  const { point } = props
  const { setGameState, setCurrentIndex } = useContext(QuizContext)
  return (
    <div>
      <h1 className='text-white text-3xl mb-5'>
        Your score is : <span className='font-bold'>{point}</span>
      </h1>
      <Button
        content='Try again'
        action={() => window.location.reload()} // Mặc định là dùng trên máy window
        className='text-slate-900 bg-green-light-button hover:bg-green-correct hover:text-white'
      />
      <Button
        content='Review'
        action={() => {
          setGameState(GAME_STATE.REVIEW)
          setCurrentIndex(0)
        }}
        className='text-white bg-red-incorrect hover:bg-red-400'
      />
    </div>
  )
}

export default EndGame
