import { PropsWithChildren } from 'react'

interface IProps extends PropsWithChildren {
  className?: string
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className='mx-auto h-screen w-full max-w-[1384px] px-8 max-lg:px-5 max-md:px-4'>
      {className ? <div className={className}>{children}</div> : children}
    </div>
  )
}

export default Container
