import { useState, type SubmitEvent } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState<string>()

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        navigate("/search?q=" + query)
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Buscar</button>
            </form>
        </main>
    )
}

export default SearchForm
