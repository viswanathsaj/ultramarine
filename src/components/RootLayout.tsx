import { type ReactNode } from 'react'

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>
}

export default RootLayout
