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
      // Treating exceptions for portuguese language
      // this part updates status of the key color to point
      // to corresponding letter without the accent

      // TODO
      // - avoid key being updated after it becomes correct

      // Treating letter A

      if (
        (letter === 'Á' ||
          letter === 'Ã' ||
          letter === 'À' ||
          letter === 'A') &&
        splitSolution.includes('A' || 'Ã' || 'À' || 'Á')
      ) {
        if (letter === splitSolution[i]) {
          return (charObj['A'] = 'correct')
        } else {
          return (charObj['A'] = 'present')
        }
      }

      // Treating letter E

      if (
        (letter === 'É' || letter === 'E' || letter === 'Ê') &&
        splitSolution.includes('E' || 'Ê' || 'É')
      ) {
        if (letter === splitSolution[i]) {
          return (charObj['E'] = 'correct')
        } else {
          return (charObj['E'] = 'present')
        }
      }

      // Treating letter I

      if (
        (letter === 'Í' || letter === 'I') &&
        splitSolution.includes('I' || 'Í')
      ) {
        if (letter === splitSolution[i]) {
          return (charObj['I'] = 'correct')
        } else {
          return (charObj['I'] = 'present')
        }
      }

      // Treating letter O

      if (
        (letter === 'Ó' ||
          letter === 'Õ' ||
          letter === 'O' ||
          letter === 'Ô') &&
        splitSolution.includes('O' || 'Õ' || 'Ó' || 'Ô')
      ) {
        if (letter === splitSolution[i]) {
          return (charObj['O'] = 'correct')
        } else {
          return (charObj['O'] = 'present')
        }
      }

      // Treating letter U

      if (
        (letter === 'Ú' || letter === 'U') &&
        splitSolution.includes('U' || 'Ú')
      ) {
        if (letter === splitSolution[i]) {
          return (charObj['U'] = 'correct')
        } else {
          return (charObj['U'] = 'present')
        }
      }

      // Treating letter C

      if (
        (letter === 'C' || letter === 'Ç') &&
        splitSolution.includes('Ç' || 'C')
      ) {
        if (letter === splitSolution[i]) {
          return (charObj['C'] = 'correct')
        } else {
          return (charObj['C'] = 'present')
        }
      }

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
        // if (letter === 'Ç') {
        //   letter = 'C'
        // }
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
    }

    // use switch statement to handle all other cases
    switch (letter) {
      case 'A':
        if (
          splitSolution[i] === 'Á' ||
          splitSolution[i] === 'Ã' ||
          splitSolution[i] === 'A' ||
          splitSolution[i] === 'Â'
        ) {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break

      case 'Á':
        if (
          splitSolution[i] === 'A' ||
          splitSolution[i] === 'Ã' ||
          splitSolution[i] === 'Á' ||
          splitSolution[i] === 'Â'
        ) {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break
      case 'Ã':
        if (
          splitSolution[i] === 'A' ||
          splitSolution[i] === 'Ã' ||
          splitSolution[i] === 'Á' ||
          splitSolution[i] === 'Â'
        ) {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break
      case 'Â':
        if (
          splitSolution[i] === 'A' ||
          splitSolution[i] === 'Ã' ||
          splitSolution[i] === 'Á' ||
          splitSolution[i] === 'Â'
        ) {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break

      // treat letter E
      case 'E':
        if (
          splitSolution[i] === 'E' ||
          splitSolution[i] === 'Ê' ||
          splitSolution[i] === 'É'
        ) {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break

      case 'É':
        if (
          splitSolution[i] === 'E' ||
          splitSolution[i] === 'Ê' ||
          splitSolution[i] === 'É'
        ) {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break
      case 'Ê':
        if (
          splitSolution[i] === 'E' ||
          splitSolution[i] === 'Ê' ||
          splitSolution[i] === 'É'
        ) {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break

      // treat letter I
      case 'Í':
        if (splitSolution[i] === 'I' || splitSolution[i] === 'Í') {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break
      case 'I':
        if (splitSolution[i] === 'I' || splitSolution[i] === 'Í') {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break

      // treat letter O

      case 'O':
        if (
          splitSolution[i] === 'O' ||
          splitSolution[i] === 'Õ' ||
          splitSolution[i] === 'Ó' ||
          splitSolution[i] === 'Ô'
        ) {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break

      case 'Ó':
        if (
          splitSolution[i] === 'O' ||
          splitSolution[i] === 'Õ' ||
          splitSolution[i] === 'Ó' ||
          splitSolution[i] === 'Ô'
        ) {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break
      case 'Õ':
        if (
          splitSolution[i] === 'O' ||
          splitSolution[i] === 'Õ' ||
          splitSolution[i] === 'Ó' ||
          splitSolution[i] === 'Ô'
        ) {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break
      case 'Ô':
        if (
          splitSolution[i] === 'O' ||
          splitSolution[i] === 'Õ' ||
          splitSolution[i] === 'Ó' ||
          splitSolution[i] === 'Ô'
        ) {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break

      // treat letter U
      case 'U':
        if (splitSolution[i] === 'U' || splitSolution[i] === 'Ú') {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break

      case 'Ú':
        if (splitSolution[i] === 'U' || splitSolution[i] === 'Ú') {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break

      // treat letter C
      case 'C':
        if (splitSolution[i] === 'C' || splitSolution[i] === 'Ç') {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break

      case 'Ç':
        if (splitSolution[i] === 'C' || splitSolution[i] === 'Ç') {
          statuses[i] = 'correct'
          solutionCharsTaken[i] = true
          return
        }
        break

      default:
        break
    }
  })

  // handle all present cases

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    // inplement switch statement to handle all other cases
    switch (letter) {
      case 'A':
        if (splitSolution.includes('A' || 'Á' || 'Ã' || 'Â')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('A')] = true
          return
        }
        break
      case 'Á':
        if (splitSolution.includes('A' || 'Á' || 'Ã' || 'Â')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('Á')] = true
          return
        }
        break

      case 'Ã':
        if (splitSolution.includes('A' || 'Á' || 'Ã' || 'Â')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('Ã')] = true
          return
        }
        break
      case 'Â':
        if (splitSolution.includes('A' || 'Á' || 'Ã' || 'Â')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('Â')] = true
          return
        }
        break
      case 'E':
        if (splitSolution.includes('E' || 'Ê' || 'É')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('E')] = true
          return
        }
        break
      case 'É':
        if (splitSolution.includes('E' || 'Ê' || 'É')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('É')] = true
          return
        }
        break
      case 'Ê':
        if (splitSolution.includes('E' || 'Ê' || 'É')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('Ê')] = true
          return
        }
        break
      case 'I':
        if (splitSolution.includes('I' || 'Í')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('I')] = true
          return
        }
        break
      case 'Í':
        if (splitSolution.includes('I' || 'Í')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('Í')] = true
          return
        }
        break
      case 'O':
        if (splitSolution.includes('O' || 'Õ' || 'Ó' || 'Ô')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('O')] = true
          return
        }
        break
      case 'Ó':
        if (splitSolution.includes('O' || 'Õ' || 'Ó' || 'Ô')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('Ó')] = true
          return
        }
        break
      case 'Õ':
        if (splitSolution.includes('O' || 'Õ' || 'Ó' || 'Ô')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('Õ')] = true
          return
        }
        break
      case 'Ô':
        if (splitSolution.includes('O' || 'Õ' || 'Ó' || 'Ô')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('Ô')] = true
          return
        }
        break
      case 'U':
        if (splitSolution.includes('U' || 'Ú')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('U')] = true
          return
        }
        break
      case 'Ú':
        if (splitSolution.includes('U' || 'Ú')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('Ú')] = true
          return
        }
        break
      case 'C':
        if (splitSolution.includes('C' || 'Ç')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('C')] = true
          return
        }
        break
      case 'Ç':
        if (splitSolution.includes('C' || 'Ç')) {
          statuses[i] = 'present'
          solutionCharsTaken[splitSolution.indexOf('Ç')] = true
          return
        }
        break
      default:
        break
    }

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
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
