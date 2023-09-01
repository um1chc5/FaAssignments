import classnames from 'classnames'
import { CountdownCircleTimer, useCountdown } from 'react-countdown-circle-timer'

function Timer({ handleSubmit }: { handleSubmit: (endTime?: boolean) => void }) {
  const childrenFn = ({ remainingTime }: { remainingTime: number }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    return seconds >= 10 ? `0${minutes}:${seconds}` : `0${minutes}:0${seconds}`
  }

  const { remainingTime } = useCountdown({
    isPlaying: true,
    duration: 90,
    colors: ['#4f46e5', '#4f46e5', '#EF4444', '#EF4444'],
    colorsTime: [90, 5, 4, 0]
  })

  return (
    <div
      className={classnames(
        'w-[5rem] h-[5rem] absolute left-[50%] translate-x-[-50%] top-0 translate-y-[-50%] text-[#4f46e5] font-bold text-base bg-white rounded-full shadow-xl',
        {
          'text-[#EF4444]': remainingTime <= 4
        }
      )}
    >
      <CountdownCircleTimer
        isPlaying
        duration={90}
        rotation='counterclockwise'
        colors={['#4f46e5', '#4f46e5', '#EF4444', '#EF4444']}
        colorsTime={[10, 5, 4, 0]}
        size={80}
        strokeWidth={8}
        trailColor='#ffffff'
        children={childrenFn}
        onComplete={() => handleSubmit(true)}
      ></CountdownCircleTimer>
    </div>
  )
}

export default Timer
