import { Cell } from './Cell'
import { solution } from '../../lib/words'

type Props = {
  letters: string[]
  className: string
  cursorIndex: number | null
  onCellClick: (index: number) => void
}

export const CurrentRow = ({
  letters,
  className,
  cursorIndex,
  onCellClick,
}: Props) => {
  const classes = `flex justify-center mb-1 ${className}`
  const totalCells = Array.from(Array(solution.length))

  return (
    <div className={classes}>
      {totalCells.map((_, i) => (
        <Cell
          key={i}
          value={letters[i]}
          isActive={cursorIndex === i}
          onClick={() => onCellClick(i)}
        />
      ))}
    </div>
  )
}
