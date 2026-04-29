
interface ProductListProps {
    products: Product[];
}
export function ProductList({ products }: ProductListProps) {
    return products.map(product => <div key={product.id}>{product.name}</div>)
}