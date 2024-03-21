import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='flex flex-row items-center justify-start lg:gap-x-5 text-xl font-bold bg-slate-500 fixed top-0 left-0 w-full gap-x-2 z-50'>
            <Link
                to='/add-invoice'
                className='p-5 hover:text-white hover:bg-slate-700'
            >
                Add Invoice
            </Link>
            <Link
                to='/show-invoice'
                className='p-5 hover:text-white hover:bg-slate-700'
            >
                Show Invoice
            </Link>
            <Link
                to='/show-graph'
                className='p-5 hover:text-white hover:bg-slate-700'
            >
                Show Graph
            </Link>
        </div>
    );
}

export default Navbar;
