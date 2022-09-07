import React, { ReactNode } from 'react'

const node = React

export const selectedCell: React.MouseEventHandler<HTMLButtonElement> = (
  event
) => {
  console.log(node)
  // return this.onClick()
}
