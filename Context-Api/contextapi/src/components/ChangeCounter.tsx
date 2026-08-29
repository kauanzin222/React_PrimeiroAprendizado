import { type Dispatch, type SetStateAction } from "react";

// import { CounterContext } from "../context/CounterContext";

interface ChangeCounterProps {
    setCounter: Dispatch<SetStateAction<number>>
}

export const ChangeCounter = ({ setCounter }: ChangeCounterProps) => {
    // const context = useContext(CounterContext)

    // if (!context) {
    //     throw new Error('ChangeCounter deve estar dentro do CounterContextProvider ')
    // }
    // const { counter, setCounter } = context

    return (
        <main>
            <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Adicionar valor ao contador</button>
        </main>
    )
}