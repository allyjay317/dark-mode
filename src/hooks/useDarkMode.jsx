import { useLocalStorage } from './useLocalStorage'
import { useState } from 'react'
import { useEffect } from 'react'

export const useDarkMode = bool => {
    const [darkMode, setDarkMode] = useLocalStorage('dark', bool)
    
    useEffect(() =>{
        let body = document.querySelector('body')
        darkMode ? 
            body.classList.add('dark-mode')
        : //false
            body.classList.remove('dark-mode')
    }, [darkMode])

    return [darkMode, setDarkMode] 
}