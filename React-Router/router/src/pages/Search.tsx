import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import type { Product } from "../interfaces/Product"

const Search = () => {
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams

    const { data: items, loading, error } = useFetch<Product[]>(url)

    return (
        <div>
            <h1>Resultados disponíveis</h1>
            <ul>
                {items && items.map((item: Product) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$ {item.price} - <Link to={`/products/${item.id}`}>Detalhes</Link></p>
                        {/* Rota Dinâmica */}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Search
