import { useParams } from "react-router-dom"

const Product = () => {
    const { id } = useParams()

    return (
        <p>ID do Produto: {id}</p>
    )
}

export default Product
