import { Cell } from './Cell'
import { solution } from '../../lib/words'
import GraphemeSplitter from 'grapheme-splitter'

type Props = {
  guess: string
  className: string
  cursorIndex: number
  onCellClick: (index: number) => void
}

export const CurrentSplit = (currentWord: string) => {
  return new GraphemeSplitter().splitGraphemes(currentWord)
}

export const CurrentRow = ({
  guess,
  className,
  cursorIndex,
  onCellClick,
}: Props) => {
  const splitGuess = CurrentSplit(guess)
  const classes = `flex justify-center mb-1 ${className}`
  const totalCells = Array.from(Array(solution.length))

  return (
    <div className={classes}>
      {totalCells.map((_, i) => (
        <Cell
          key={i}
          value={splitGuess[i]}
          isActive={cursorIndex === i}
          onClick={() => onCellClick(i)}
        />
      ))}
    </div>
  )
}
