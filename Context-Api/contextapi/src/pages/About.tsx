import { useCounterContext } from "../hooks/useCounterContext"

const About = () => {
    const {counter} = useCounterContext()
    
    return (
        <main>
            <p>Valor do counter: {counter}</p>
        </main>
    )
}

export default About
