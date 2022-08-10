import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { accentedGuess, unicodeSplit, solutionNoAcents } from '../../lib/words'

type Props = {
  solution: string
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ solution, guess, isRevealing }: Props) => {
  const noAcsolution = solutionNoAcents(solution)

  const acGuess = accentedGuess(guess)

  const statuses = getGuessStatuses(noAcsolution, guess)

  const splitGuess = unicodeSplit(acGuess)

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
