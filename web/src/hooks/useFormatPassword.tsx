import { RefObject, useState } from "react"

export function useFormatPassword(){
    const [typePassword, setTypePassword] = useState<string>("password")
    const [icon, setIconPassword] = useState<boolean>(false)
    const showPassword = (password:RefObject<HTMLInputElement>) =>{
        const type = password.current?.children[0].getAttribute("type") === 'password' ? 'text' : 'password'
        const typeIcon = icon === false ? true : false
        setTypePassword(type)
        setIconPassword(typeIcon)
    }
    return {typePassword, icon, showPassword}
}