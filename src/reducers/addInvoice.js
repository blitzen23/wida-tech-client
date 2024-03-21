const products = [
    {
        name: 'Bluetooth speaker',
        price: '756000',
        quantity: '3',
        picture:
            'https://www.alter-a.com/wp-content/uploads/2019/07/Test-Logo-Small-Black-transparent-1.png',
    },
    {
        name: 'Headphone',
        price: '480000',
        quantity: '8',
        picture:
            'https://www.alter-a.com/wp-content/uploads/2019/07/Test-Logo-Small-Black-transparent-1.png',
    },
    {
        name: 'Laptop charger',
        price: '960000',
        quantity: '4',
        picture:
            'https://www.alter-a.com/wp-content/uploads/2019/07/Test-Logo-Small-Black-transparent-1.png',
    },
    {
        name: 'LCD Monitor',
        price: '600000',
        quantity: '1',
        picture:
            'https://www.alter-a.com/wp-content/uploads/2019/07/Test-Logo-Small-Black-transparent-1.png',
    },
    {
        name: 'Bluetooth speaker',
        price: '504000',
        quantity: '2',
        picture:
            'https://www.alter-a.com/wp-content/uploads/2019/07/Test-Logo-Small-Black-transparent-1.png',
    },
    {
        name: 'Headphone',
        price: '60000',
        quantity: '1',
        picture:
            'https://www.alter-a.com/wp-content/uploads/2019/07/Test-Logo-Small-Black-transparent-1.png',
    },
    {
        name: 'Laptop charger',
        price: '720000',
        quantity: '3',
        picture:
            'https://www.alter-a.com/wp-content/uploads/2019/07/Test-Logo-Small-Black-transparent-1.png',
    },
    {
        name: 'Bluetooth speaker',
        price: '252000',
        quantity: '1',
        picture:
            'https://www.alter-a.com/wp-content/uploads/2019/07/Test-Logo-Small-Black-transparent-1.png',
    },
    {
        name: 'Bluetooth speaker',
        price: '252000',
        quantity: '1',
        picture:
            'https://www.alter-a.com/wp-content/uploads/2019/07/Test-Logo-Small-Black-transparent-1.png',
    },
    {
        name: 'Headphone',
        price: '120000',
        quantity: '2',
        picture:
            'https://www.alter-a.com/wp-content/uploads/2019/07/Test-Logo-Small-Black-transparent-1.png',
    },
];
const initialState = {
    formInput: {
        date: '',
        customerName: '',
        salesPersonName: '',
        notes: '',
        products: [],
    },
    inputProduct: '',
    products: products,
    suggestions: [],
    isSearch: false,
    isClicked: {
        customerName: false,
        salesPersonName: false,
        date: false,
        products: false,
    },
    successMessage: '',
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'SET_FORM_INPUT':
            return {
                ...state,
                formInput: payload.formInput,
            };
        case 'SET_INPUT_PRODUCT':
            return {
                ...state,
                inputProduct: payload.inputProduct,
            };
        case 'SEARCH_PRODUCT':
            return {
                ...state,
                isSearch: true,
                suggestions: payload.suggestions,
                inputProduct: payload.inputProduct,
                isClicked: payload.isClicked,
            };
        case 'ADD_PRODUCT':
            return {
                ...state,
                isSearch: false,
                products: payload.products,
                formInput: payload.formInput,
                suggestions: payload.suggestions,
            };
        case 'HANDLE_CLICK':
            return {
                ...state,
                isClicked: payload.isClicked,
            };
        case 'SUBMIT_FORM':
            return {
                ...state,
                inputProduct: '',
                products: products,
                isClicked: {
                    customerName: false,
                    salesPersonName: false,
                    date: false,
                    products: false,
                },
                formInput: {
                    date: '',
                    customerName: '',
                    salesPersonName: '',
                    notes: '',
                    products: [],
                },
            };
        case 'SET_SUCCESS_MESSAGE':
            return {
                ...state,
                successMessage: payload.successMessage,
            };
        case 'SET_IS_SEARCH':
            return {
                ...state,
                isSearch: payload.isSearch,
            };
        default:
            return state;
    }
}
