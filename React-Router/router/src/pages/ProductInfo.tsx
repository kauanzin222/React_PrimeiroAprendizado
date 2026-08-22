import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import type { Product } from "../interfaces/Product"

interface ProductInfo {
    url: string
}

const ProductInfo = ({ url }: ProductInfo) => {
    const { id } = useParams()
    const {data: product, loading, error} = useFetch<Product>(url + id)

    return (
        <main>
            {error && error}
            {loading && <p>Carregando...</p>}
            {product && <p>{product.info}</p>}
        </main>
    )
}

export default ProductInfo
