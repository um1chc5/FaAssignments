import React from 'react'
import styles from './Input.module.css'

interface InputProps {
  todoSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  input: string
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputRef: any
}

function Input(props: InputProps) {
  const { todoSubmit, input, inputChange, inputRef } = props

  return (
    <form action='' onSubmit={todoSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
      <input type='text' value={input} onChange={inputChange} className={styles.input} ref={inputRef} />
      <button className={styles.button}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' style={{ width: '16px' }}>
          <path
            fill='currentColor'
            d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'
          />
        </svg>
      </button>
    </form>
  )
}

export default Input
