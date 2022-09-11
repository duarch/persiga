export const EditCell = () => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.currentTarget.classList.add('cell-edit')
  }

  return handleClick
}
