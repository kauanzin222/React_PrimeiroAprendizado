// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import { ChangeCounter } from '../components/ChangeCounter'

// Refatorando context com hook
import { useCounterContext } from '../hooks/useCounterContext'

const Home = () => {
    // const counter = useContext(CounterContext)

    // if (!counter) {
    //     throw new Error('Home precisa estar dentro do CounterContextProvider')
    // }

    const {counter, setCounter} = useCounterContext()

    return (
        <main>
            <h2>Home</h2>
            <p>Valor do contador: {counter}</p>
            {/* Alterando valor context */}
            <ChangeCounter setCounter={setCounter}/>
        </main>
    )
}

export default Home
