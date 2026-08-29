import type { Dispatch } from "react"
import type { TitleColorAction } from "../context/TitleColorContext"

interface ChangeTitleColorProps {
    dispatch: Dispatch<TitleColorAction>
}

const ChangeTitleColor = ({ dispatch }: ChangeTitleColorProps) => {
    const setTitleColor = (color: string) => {
        dispatch({ type: 'set_title_color', payload: color })
    }
    const resetTitleColor = () => {
        dispatch({ type: 'reset_color' })
    }


    return (
        <main>
            <p><button onClick={() => setTitleColor('red')}>Alterar título para vermelho</button></p>
            <p><button onClick={() => setTitleColor('green')}>Alterar título para verde</button></p>
            <button onClick={() => resetTitleColor()}>Alterar título para cor original</button>
        </main>
    )
}

export default ChangeTitleColor
