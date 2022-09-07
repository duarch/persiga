import { Cell } from './Cell'
import { solution } from '../../lib/words'
import GraphemeSplitter from 'grapheme-splitter'

type Props = {
  guess: string
  className: string
  onChar: (value: string) => void
}

export const CurrentSplit = (currentWord: string) => {
  return new GraphemeSplitter().splitGraphemes(currentWord)
}

export const CurrentRow = ({ guess, className, onChar }: Props) => {
  // console.log(className)
  const splitGuess = CurrentSplit(guess)
  // console.log(splitGuess)
  const emptyCells = Array.from(Array(solution.length - splitGuess.length))
  // console.log('This is emptyCells ', emptyCells)
  const classes = `flex justify-center mb-1 ${className}`
  const onClick = (value: string) => {
    onChar(value)
  }
  return (
    // parei aqui
    // tenho que descobrir como passar a posição para inserir o caracter correto

    <div className={classes}>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => {
        if (i === 0) return <Cell key={i} value={''} onClick={onClick} />
        return <Cell key={i} />
      })}
    </div>
  )
}
