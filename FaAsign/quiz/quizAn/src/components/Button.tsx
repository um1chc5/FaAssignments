interface Props {
  content: string
  action: () => void
  className?: string | undefined
  // additionClassName?: string
}

function Button({ content, action, className = 'text-white bg-gray-button hover:bg-gray-300' }: Props) {
  // console.log(typeof className)
  return (
    <button onClick={action} className={'font-bold w-32 mx-2 py-3 rounded-lg shadow-lg text-lg ' + className}>
      {content}
    </button>
  )
}

export default Button
