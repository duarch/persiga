import { Cell } from './Cell'
import { solution } from '../../lib/words'
import GraphemeSplitter from 'grapheme-splitter'

type Props = {
  guess: string
  className: string
}

export const CurrentSplit = (currentWord: string) => {
  return new GraphemeSplitter().splitGraphemes(currentWord)
}

export const CurrentRow = ({ guess, className }: Props) => {
  const splitGuess = CurrentSplit(guess)
  const emptyCells = Array.from(Array(solution.length - splitGuess.length))
  const classes = `flex justify-center mb-1 ${className}`

  return (
    <div className={classes}>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
