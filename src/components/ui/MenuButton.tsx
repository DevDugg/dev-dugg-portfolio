'use client'

interface Props {
  label: string
  onClick: () => void
}

const MenuButton = ({ label, onClick }: Props) => {
  return (
    <button onClick={onClick} className='cursor-pointer text-2xl font-bold transition-colors hover:text-indigo-600'>
      {label}
    </button>
  )
}

export default MenuButton
