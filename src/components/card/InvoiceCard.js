import ProductCard from './ProductCard';

function formatDate(dateString) {
    const date = new Date(dateString);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function InvoiceCard({ invoice }) {
    return (
        <div className='p-5 bg-slate-500 rounded-md flex flex-col justify-between h-full'>
            <div className=''>
                <table className='w-full mx-auto'>
                    <tbody>
                        <tr className='border border-1 border-solid border-black'>
                            <td className='font-bold'>Date</td>
                            <td>{formatDate(invoice.date)}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className='border border-1 border-solid border-black'>
                            <td className='font-bold'>Customer Name</td>
                            <td>{invoice.customer}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className='border border-1 border-solid border-black'>
                            <td className='font-bold'>Sales Person Name</td>
                            <td>{invoice.sales_person}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className='border border-1 border-solid border-black'>
                            <td className='font-bold'>Payment Type</td>
                            <td>{invoice.payment_type}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className='border border-1 border-solid border-black'>
                            <td className='font-bold'>Notes</td>
                            <td>{invoice.notes}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='mt-5 w-full overflow-auto max-h-32'>
                    <p className='font-bold'>Products</p>
                    <table className='bg-slate-600 w-full'>
                        <thead>
                            <tr className='border border-1 border-solid border-black'>
                                <th className='border border-1 border-solid border-black px-1'>
                                    Product Name
                                </th>
                                <th className='border border-1 border-solid border-black'>
                                    Product Quantity
                                </th>
                                <th className='border border-1 border-solid border-black'>
                                    Product Price
                                </th>
                            </tr>
                        </thead>
                        {invoice.products.map((product, index) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </table>
                </div>
            </div>
            <p className='font-bold text-right  relative'>
                Total Price:{' '}
                {invoice.products.reduce(
                    (total, product) => total + product.total_price,
                    0
                )}
            </p>
        </div>
    );
}

export default InvoiceCard;
