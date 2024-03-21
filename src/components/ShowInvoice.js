import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import {
    getInvoices,
    getTotalInvoice,
    incrementPage,
    decrementPage,
    clickPage,
} from '../actions/showInvoice';
import InvoiceCard from './card/InvoiceCard';

function ShowInvoice({
    showInvoice: { page, totalPages, invoices, startIndex, endIndex },
    getTotalInvoice,
    getInvoices,
    incrementPage,
    clickPage,
    decrementPage,
}) {
    useEffect(() => {
        getTotalInvoice();
    }, [totalPages, endIndex]);

    useEffect(() => {
        getInvoices();
    }, [page]);

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

        return `${date.getDate()} ${
            months[date.getMonth()]
        } ${date.getFullYear()}`;
    }

    function showPages() {
        const pages = [];
        for (let i = startIndex; i <= endIndex; i++) {
            pages.push(
                <div
                    key={i}
                    className={`text-xl font-bold bg-slate-300 w-[25px] h-[25px] text-center m-auto cursor-default ${
                        i === page ? 'opacity-70' : ''
                    }`}
                    onClick={(e) => clickPage(i)}
                >
                    {i}
                </div>
            );
        }
        return pages;
    }

    return (
        <div className='flex flex-col justify-center items-center w-full xl:h-screen relative xl:top-10 top-32'>
            <div className='xl:grid grid-cols-4 grid-rows-2 p-5 bg-slate-300 rounded-md gap-5 w-5/6 h-5/6 flex flex-col'>
                {invoices.map((invoice, index) => (
                    <InvoiceCard invoice={invoice} key={invoice.id} />
                ))}
            </div>
            <div className='flex flex-row items-center mt-3 rounded-md'>
                <ArrowLeft
                    className={`text-xl font-bold bg-slate-300 w-[25px] h-[25px] ${
                        page === 1 ? 'opacity-70' : ''
                    }`}
                    onClick={decrementPage}
                />
                {showPages()}
                <ArrowRight
                    className={`text-xl font-bold bg-slate-300 w-[25px] h-[25px] ${
                        page === totalPages ? 'opacity-70' : ''
                    }`}
                    onClick={incrementPage}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    showInvoice: state.showInvoice,
});

export default connect(mapStateToProps, {
    getTotalInvoice,
    getInvoices,
    incrementPage,
    decrementPage,
    clickPage,
})(ShowInvoice);
