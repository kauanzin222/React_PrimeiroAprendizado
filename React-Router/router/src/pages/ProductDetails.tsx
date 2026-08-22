import { Link, useParams } from "react-router-dom"

// hooks
import { useFetch } from "../hooks/useFetch"

// interfaces
import type { Product } from "../interfaces/Product"

interface ProductProps {
    url: string
}

const ProductDetails = ({ url }: ProductProps) => {
    const { id } = useParams()

    // Carregamento dado individual
    const { data: product, loading, error } = useFetch<Product>(url + id)

    return <>
        {error && error}
        {loading && <p>Carregando...</p>}
        {product && (
            <main>
                <h1>{product.name}</h1>
                <p>R$ {product.price}</p>
                {/* Nested Routes */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </main>
        )}
    </>
}

export default ProductDetails
