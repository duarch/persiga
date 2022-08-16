import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { accentedGuess, unicodeSplit, solutionNoAccents } from '../../lib/words'

type Props = {
  solution: string
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ solution, guess, isRevealing }: Props) => {
  const noAccentsolution = solutionNoAccents(solution)
  const accentGuess = accentedGuess(guess)
  const statuses = getGuessStatuses(noAccentsolution, guess)
  const splitGuess = unicodeSplit(accentGuess)

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  )
}
