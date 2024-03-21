import axios from 'axios';

export const handleFormInput = (e) => (dispatch, getState) => {
    e.stopPropagation();
    const state = getState();
    const formInput = state.addInvoice.formInput;
    formInput[e.target.name] = e.target.value;
    dispatch({
        type: 'SET_FORM_INPUT',
        payload: {
            formInput: formInput,
        },
    });
};

export const handleInputProduct = (e) => (dispatch, getState) => {
    e.stopPropagation();
    dispatch({
        type: 'SET_INPUT_PRODUCT',
        payload: {
            inputProduct: e.target.value,
        },
    });
};

export const searchProduct = (e) => (dispatch, getState) => {
    e.stopPropagation();
    const value = e.target.value;
    const state = getState();
    const obj = {
        suggestions: state.addInvoice.suggestions,
        inputProduct: state.addInvoice.inputProduct,
        isClicked: state.addInvoice.isClicked,
    };

    const products = state.addInvoice.products;
    if (value.length > 0) {
        const filteredProducts = products.filter(
            (product) =>
                product['name'].toLowerCase().indexOf(value.toLowerCase()) > -1
        );
        obj.suggestions = filteredProducts;
        obj.inputProduct = value;
    } else {
        obj.suggestions = products;
    }

    obj.isClicked.products = true;
    dispatch({
        type: 'SEARCH_PRODUCT',
        payload: obj,
    });
};

export const addProduct = (e, index) => (dispatch, getState) => {
    const state = getState();
    const product = state.addInvoice.suggestions[index];
    const obj = {
        formInput: state.addInvoice.formInput,
        suggestions: state.addInvoice.suggestions,
        products: state.addInvoice.products,
    };
    obj.formInput.products.push({
        name: product.name,
        price: product.price,
        quantity: product.quantity,
    });

    const spliceSuggestion = obj.suggestions.filter((suggestion, idx) => {
        return idx !== index;
    });
    obj.suggestions = spliceSuggestion;

    const spliceProduct = obj.products.filter((tempProduct, idx) => {
        return !(
            tempProduct.name === product.name &&
            tempProduct.quantity === product.quantity &&
            tempProduct.price === product.price &&
            tempProduct.picture === product.picture
        );
    });
    obj.products = spliceProduct;
    dispatch({
        type: 'ADD_PRODUCT',
        payload: obj,
    });
};

export const submitForm = (e) => async (dispatch, getState) => {
    e.preventDefault();
    const state = getState();
    try {
        const response = await axios.post(
            'http://localhost:5000/api/add-invoice',
            state.addInvoice.formInput
        );
        if (response.status === 200) {
            dispatch({
                type: 'SUBMIT_FORM',
                payload: {},
            });
            dispatch({
                type: 'SET_SUCCESS_MESSAGE',
                payload: { successMessage: response.data['success'] },
            });
            setTimeout(() => {
                dispatch({
                    type: 'SET_SUCCESS_MESSAGE',
                    payload: { successMessage: '' },
                });
            }, 3000);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

export const handleClick = (e) => (dispatch, getState) => {
    const state = getState();
    const obj = {
        isClicked: state.addInvoice.isClicked,
    };
    obj.isClicked[e.target.name] = true;
    dispatch({
        type: 'HANDLE_CLICK',
        payload: obj,
    });
};

export const setIsSearch = (isSearch) => (dispatch) => {
    dispatch({
        type: 'SET_IS_SEARCH',
        payload: {
            isSearch: isSearch,
        },
    });
};
