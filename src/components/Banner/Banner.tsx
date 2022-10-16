import { memo, ReactElement } from 'react'

import banner from 'assets/banner.png'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Header: React.FC<IBaseComponentProps> = ({ children }) => {
  children as ReactElement

  return <img src={banner} alt="logo" className="my-3" />
}

export default memo(Header)
