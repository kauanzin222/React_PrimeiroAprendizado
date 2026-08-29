// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import { ChangeCounter } from '../components/ChangeCounter'
import ChangeTitleColor from '../components/ChangeTitleColor'

// Refatorando context com hook
import { useCounterContext } from '../hooks/useCounterContext'

// Context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
    // const counter = useContext(CounterContext)

    // if (!counter) {
    //     throw new Error('Home precisa estar dentro do CounterContextProvider')
    // }

    const { counter, setCounter } = useCounterContext()

    // Context mais complexo
    const { state: stateTitleColor, dispatch: dispatchTitleColor } = useTitleColorContext()

    return (
        <main>
            <h2>Home</h2>
            <p>Valor do contador: {counter}</p>
            {/* Alterando valor context */}
            <ChangeCounter setCounter={setCounter} />
            <h3 style={{ color: stateTitleColor.titleColor }}>Título de referência</h3>
            <small>Valor do state: {stateTitleColor.titleColor}</small>
            <ChangeTitleColor dispatch={dispatchTitleColor} />
        </main>
    )
}

export default Home
