import React from 'react'
import { container } from 'tailwindcss/defaultTheme'
import Footer from './footer'
import Header from './header'

/* type LayoutProps = {
    children?: React.ReactNode
} */

const Layout = ({children}) => {
    return(
        <>
        <container>
            <Header/>
                <section>{children}</section>
            <Footer/>
        </container>
            
        </>
    )
} 

export default Layout
