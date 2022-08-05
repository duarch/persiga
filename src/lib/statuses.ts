import { unicodeSplit } from './words'

export type CharStatus = 'absent' | 'present' | 'correct'

export const getStatuses = (
  solution: string,
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}
  const splitSolution = unicodeSplit(solution)

  guesses.forEach((word) => {
    unicodeSplit(word).forEach((letter, i) => {
      if (!splitSolution.includes(letter)) {
        // make status absent
        return (charObj[letter] = 'absent')
      }

      if (letter === splitSolution[i]) {
        //make status correct
        return (charObj[letter] = 'correct')
      }

      if (charObj[letter] !== 'correct') {
        //make status present
        return (charObj[letter] = 'present')
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (
  solution: string,
  guess: string
): CharStatus[] => {
  const splitSolution = unicodeSplit(solution)
  const splitGuess = unicodeSplit(guess)

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    } else if (letter === 'I' && splitSolution[i] === 'Í') {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    } else if (
      (letter === 'O' && splitSolution[i] === 'Ó') ||
      (letter === 'Ó' && splitSolution[i] === 'O')
    ) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    } else if (
      (letter === 'O' && splitSolution[i] === 'Õ') ||
      (letter === 'Õ' && splitSolution[i] === 'O')
    ) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    } else if (
      (letter === 'O' && splitSolution[i] === 'Ô') ||
      (letter === 'Ô' && splitSolution[i] === 'O')
    ) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    } else if (letter === 'U' && splitSolution[i] === 'Ú') {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    } else if (
      (letter === 'A' && splitSolution[i] === 'Á') ||
      (letter === 'Á' && splitSolution[i] === 'A')
    ) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    } else if (
      (letter === 'A' && splitSolution[i] === 'Ã') ||
      (letter === 'Ã' && splitSolution[i] === 'A')
    ) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    } else if (
      (letter === 'A' && splitSolution[i] === 'Â') ||
      (letter === 'Â' && splitSolution[i] === 'A')
    ) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true

      return
    } else if (
      (letter === 'E' && splitSolution[i] === 'É') ||
      (letter === 'É' && splitSolution[i] === 'E')
    ) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    } else if (
      (letter === 'E' && splitSolution[i] === 'Ê') ||
      (letter === 'Ê' && splitSolution[i] === 'E')
    ) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    } else if (
      (letter === 'Ç' && splitSolution[i] === 'C') ||
      (letter === 'C' && splitSolution[i] === 'Ç')
    ) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
    // continue later for other cases
  })

  splitGuess.forEach((letter, i) => {
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (statuses[i]) return
    else if (
      (letter === 'C' && splitSolution.includes('Ç')) ||
      (letter === 'Ç' && splitSolution.includes('C'))
    ) {
      statuses[i] = 'present'
      console.log('solutionCharsTaken Antes', solutionCharsTaken[i])
      solutionCharsTaken[i] = true
      console.log('solutionCharsTaken Depois', solutionCharsTaken[i])

      return
    } else if (
      (letter === 'A' && splitSolution.includes('Á')) ||
      (letter === 'Á' && splitSolution.includes('A'))
    ) {
      statuses[i] = 'present'
      solutionCharsTaken[splitSolution.indexOf('A')] = true
      return
    } else if (
      (letter === 'A' && splitSolution.includes('Ã')) ||
      (letter === 'Ã' && splitSolution.includes('A'))
    ) {
      statuses[i] = 'present'
      solutionCharsTaken[splitSolution.indexOf('A')] = true
      return
    } else if (
      (letter === 'Â' && splitSolution.includes('A')) ||
      (letter === 'A' && splitSolution.includes('Â'))
    ) {
      statuses[i] = 'present'
      solutionCharsTaken[splitSolution.indexOf('A')] = true
      return
    } else if (
      (letter === 'E' && splitSolution.includes('É')) ||
      (letter === 'É' && splitSolution.includes('E'))
    ) {
      statuses[i] = 'present'
      solutionCharsTaken[splitSolution.indexOf('E')] = true
      return
    } else if (
      (letter === 'E' && splitSolution.includes('Ê')) ||
      (letter === 'Ê' && splitSolution.includes('E'))
    ) {
      statuses[i] = 'present'
      solutionCharsTaken[splitSolution.indexOf('E')] = true
      return
    } else if (
      (letter === 'I' && splitSolution.includes('Í')) ||
      (letter === 'Í' && splitSolution.includes('I'))
    ) {
      statuses[i] = 'present'
      solutionCharsTaken[splitSolution.indexOf('I')] = true
      return
    } else if (
      (letter === 'O' && splitSolution.includes('Ó')) ||
      (letter === 'Ó' && splitSolution.includes('O'))
    ) {
      statuses[i] = 'present'
      solutionCharsTaken[splitSolution.indexOf('O')] = true
      return
    } else if (
      (letter === 'O' && splitSolution.includes('Õ')) ||
      (letter === 'Õ' && splitSolution.includes('O'))
    ) {
      statuses[i] = 'present'
      solutionCharsTaken[splitSolution.indexOf('O')] = true
      return
    } else if (
      (letter === 'O' && splitSolution.includes('Ô')) ||
      (letter === 'Ô' && splitSolution.includes('O'))
    ) {
      statuses[i] = 'present'
      solutionCharsTaken[splitSolution.indexOf('O')] = true
      return
    } else if (
      (letter === 'U' && splitSolution.includes('Ú')) ||
      (letter === 'Ú' && splitSolution.includes('U'))
    ) {
      statuses[i] = 'present'
      solutionCharsTaken[splitSolution.indexOf('U')] = true
      return
    } else if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    // includes the case where the letter is correct but not in the right position
    // "C" matches "Ç"

    // const indexOfPresentChar = splitSolution.findIndex(
    //   (x, index) => x === letter && !solutionCharsTaken[index]
    // )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}
