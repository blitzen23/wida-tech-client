import axios from 'axios';

export const getTotalInvoice = () => async (dispatch) => {
    try {
        const response = await axios.get(
            'http://localhost:5000/api/total-invoice'
        );
        dispatch({
            type: 'GET_TOTAL_INVOICE',
            payload: {
                totalPages: Math.ceil(response.data['total_invoice'] / 8),
            },
        });
    } catch (error) {
        console.error('Error:', error);
    }
};

export const getInvoices = () => async (dispatch, getState) => {
    const state = getState();
    const page = state.showInvoice.page;
    try {
        const response = await axios.get(
            `http://localhost:5000/api/get-invoice?page=${page}`
        );
        dispatch({
            type: 'GET_INVOICES',
            payload: {
                invoices: response.data['invoices'],
            },
        });
    } catch (error) {
        console.error('Error:', error);
    }
};

export const incrementPage = () => (dispatch, getState) => {
    const state = getState();
    const obj = {
        page: state.showInvoice.page,
        endIndex: state.showInvoice.endIndex,
        startIndex: state.showInvoice.startIndex,
        totalPages: state.showInvoice.totalPages,
        nextPage: state.showInvoice.page + 1,
    };
    if (obj.nextPage + 1 <= obj.totalPages) {
        obj.page = obj.nextPage;
        if (obj.nextPage > obj.endIndex) {
            obj.startIndex = obj.endIndex + 1;
            if (obj.endIndex + 5 > obj.otalPages) {
                obj.endIndex = obj.totalPages;
            } else {
                obj.endIndex = obj.endIndex + 5;
            }
        }
    } else {
        obj.page = obj.totalPages;
    }
    dispatch({
        type: 'INCREMENT_PAGE',
        payload: {
            page: obj.page,
            endIndex: obj.endIndex,
            startIndex: obj.startIndex,
        },
    });
};

export const decrementPage = () => (dispatch, getState) => {
    const state = getState();
    const obj = {
        page: state.showInvoice.page,
        endIndex: state.showInvoice.endIndex,
        startIndex: state.showInvoice.startIndex,
        totalPages: state.showInvoice.totalPages,
        previousPage: state.showInvoice.page - 1,
    };
    if (obj.previousPage >= 1) {
        obj.page = obj.previousPage;
        if (obj.previousPage < obj.startIndex) {
            obj.endIndex = obj.startIndex - 1;
            if (obj.startIndex - 5 > 1) {
                obj.startIndex = obj.startIndex - 5;
            } else {
                obj.startIndex = 1;
            }
        }
    } else {
        obj.page = 1;
    }
    dispatch({
        type: 'DECREMENT_PAGE',
        payload: {
            page: obj.page,
            endIndex: obj.endIndex,
            startIndex: obj.startIndex,
        },
    });
};

export const clickPage = (page) => (dispatch) => {
    dispatch({
        type: 'CLICK_PAGE',
        payload: {
            page: page,
        },
    });
};
