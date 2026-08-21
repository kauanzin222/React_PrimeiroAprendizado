import { useFetch } from "../hooks/useFetch"

import type { Product } from "../interfaces/Product"

const Home = () => {
    const url = 'http://localhost:3000/products/'

    // Carregamento de Dados
    const { data: items, error } = useFetch<Product[]>(url)

    return (
        <div className="container">
            <h1>Produtos</h1>
            {error && <p>{error}</p>}
            <ul>
                {items && items.map((item: Product) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$ {item.price}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Home
