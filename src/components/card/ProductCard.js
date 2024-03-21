function ProductCard({ product }) {
    return (
        <tbody>
            <tr className='text-center border border-1 border-solid border-black'>
                <td className='border border-1 border-solid border-black'>
                    {product.item}
                </td>
                <td className='border border-1 border-solid border-black'>
                    {product.quantity}
                </td>
                <td className='border border-1 border-solid border-black'>
                    {product.total_price}
                </td>
            </tr>
        </tbody>
    );
}

export default ProductCard;
