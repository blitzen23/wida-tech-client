const initialState = {
    totalPages: 0,
    invoices: [],
    page: 1,
    startIndex: 1,
    endIndex: 5,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_TOTAL_INVOICE':
            return {
                ...state,
                totalPages: payload.totalPages,
                endIndex:
                    payload.totalPages > 0 &&
                    state.endIndex > payload.totalPages
                        ? payload.totalPages
                        : state.endIndex,
            };
        case 'GET_INVOICES':
            return {
                ...state,
                invoices: payload.invoices,
            };
        case 'INCREMENT_PAGE':
        case 'DECREMENT_PAGE':
            return {
                ...state,
                endIndex: payload.endIndex,
                startIndex: payload.startIndex,
                page: payload.page,
            };
        case 'CLICK_PAGE':
            return {
                ...state,
                page: payload.page,
            };
        default:
            return state;
    }
}
