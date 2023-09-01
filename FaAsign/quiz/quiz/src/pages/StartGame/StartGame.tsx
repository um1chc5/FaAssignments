import { useContext } from 'react'
import { QuizContext } from '../../App'
import { GAME_STATE } from '../../constants/GameState.enum'

function StartGame() {
  const { setGameState } = useContext(QuizContext)
  return (
    <div>
      <h1 className='text-white text-5xl font-bold mx-4'>Welcome to React Quiz Game!</h1>
      <button
        onClick={() => setGameState(GAME_STATE.IN_GAME)}
        className='bg-green-light-button text-slate-950 text-lg font-bold px-16 py-3 mt-5 shadow-lg rounded-xl hover:bg-green-correct'
      >
        Start
      </button>
    </div>
  )
}

export default StartGame
