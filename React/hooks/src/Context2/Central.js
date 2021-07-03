import React,{useState} from 'react'
import ThemeContext from './ThemeContext'
import Navbar from './Navbar'
function Central() {
    const [ntheme,setnTheme] =useState('Light')
    return (
            <div>
                <ThemeContext.Provider value={{theme:ntheme,chfn:setnTheme}}>
                <Navbar/>
                </ThemeContext.Provider>
             
            </div>
        
    )
}

export default Central
