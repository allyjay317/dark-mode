import {useState} from 'react'
export function useLocalStorage(name, initialValue){
    const [value, setValue] = useState(() =>{
        const item = window.localStorage.getItem(name)
        return item ? JSON.parse(item) : initialValue
    })
    const set = (newValue) =>{
        setValue(newValue)
        window.localStorage.setItem(name, JSON.stringify(newValue))
    }

    return [value, set]
}