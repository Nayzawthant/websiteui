import Footer from '@/components/footer/Footer'
import React, { createContext, useState } from 'react'
import Headerss from '../../components/header/Headerss'
export const LayoutContext = createContext(null);

const Layout = ({ children }) => {
  let [search, setSearch] = useState('')

  return (
    <div>
      {/* <Topbar/> */}
      <LayoutContext.Provider value={{ search }}>
        <Headerss setSearch={setSearch} />
        {children}
        <Footer />
      </LayoutContext.Provider>
    </div>
  )
}

export default Layout