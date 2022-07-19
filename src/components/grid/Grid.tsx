import { Component, createRef } from 'react'
import { MAX_CELL_SIZE, MAX_CHALLENGES } from '../../constants/settings'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  solution: string
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  currentRowClassName: string
}

export class Grid extends Component<Props> {
  gridContainerRef = createRef<HTMLDivElement>()
  gridRef = createRef<HTMLDivElement>()
  gridHeight: number = MAX_CELL_SIZE * MAX_CHALLENGES

  handleResize() {
    if (this.gridContainerRef.current && this.gridRef.current) {
      this.gridHeight = this.gridContainerRef.current.clientHeight
      const newWidth = Math.min(
        Math.floor(this.gridHeight) *
          (this.props.solution.length / MAX_CHALLENGES),
        MAX_CELL_SIZE * this.props.solution.length
      )
      const newHeight =
        MAX_CHALLENGES * Math.floor(newWidth / this.props.solution.length)
      this.gridRef.current.style.width = `${newWidth}px`
      this.gridRef.current.style.height = `${newHeight}px`
    }
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentDidUpdate() {
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  render() {
    const empties =
      this.props.guesses.length < MAX_CHALLENGES - 1
        ? Array.from(Array(MAX_CHALLENGES - 1 - this.props.guesses.length))
        : []
    const maxHeight = MAX_CELL_SIZE * MAX_CHALLENGES
    const gridTemplateRows = `repeat(${MAX_CHALLENGES}, 1fr)`

    return (
      <div
        className="pb-6 grow overflow-hidden flex justify-center"
        id="gridContainer"
        ref={this.gridContainerRef}
      >
        <div
          id="grid"
          className="grid gap-1 p-1"
          style={{ maxHeight, gridTemplateRows }}
          ref={this.gridRef}
        >
          {this.props.guesses.map((guess, i) => (
            <CompletedRow
              key={i}
              solution={this.props.solution}
              guess={guess}
              isRevealing={
                this.props.isRevealing && this.props.guesses.length - 1 === i
              }
            />
          ))}
          {this.props.guesses.length < MAX_CHALLENGES && (
            <CurrentRow
              guess={this.props.currentGuess}
              className={this.props.currentRowClassName}
            />
          )}
          {empties.map((_, i) => (
            <EmptyRow key={i} />
          ))}
        </div>
      </div>
    )
  }
}
