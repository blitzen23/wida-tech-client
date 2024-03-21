import { useState } from 'react';
import Input from './Input';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    handleClick,
    handleFormInput,
    submitForm,
    addProduct,
    searchProduct,
    setIsSearch,
    handleInputProduct,
} from '../actions/addInvoice';

function AddInvoice({
    addInvoice: {
        formInput,
        inputProduct,
        products,
        suggestions,
        isSearch,
        isClicked,
        successMessage,
    },
    handleClick,
    handleFormInput,
    handleInputProduct,
    submitForm,
    addProduct,
    searchProduct,
    setIsSearch,
}) {
    return (
        <div
            className='flex flex-col justify-center items-center text-black w-full h-screen md:px-0 px-10'
            onClick={(e) => {
                setIsSearch(false);
            }}
        >
            <div
                className={`fixed top-10 left-1/2 -translate-x-1/2 bg-green-700 py-8 px-32 rounded-md z-50 text-2xl font-bold text-center flex items-center text-white transition-opacity duration-500 ${
                    successMessage ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {successMessage}
            </div>
            <form className='bg-slate-400 p-20 rounded-md w-full max-w-xl flex flex-col gap-y-5'>
                <Input
                    props={{
                        value: formInput.date,
                        type: 'date',
                        name: 'date',
                        placeholder: 'Date',
                        isInput: true,
                        handleChange: handleFormInput,
                        handleClick: handleClick,
                    }}
                />
                <label
                    className={
                        !isClicked.date
                            ? 'hidden'
                            : formInput.date === ''
                            ? 'text-red-600 font-bold text-md'
                            : 'hidden'
                    }
                >
                    You need to fill in the date!
                </label>
                <Input
                    props={{
                        value: formInput.customerName,
                        type: 'text',
                        name: 'customerName',
                        placeholder: 'Customer Name',
                        isInput: true,
                        handleChange: handleFormInput,
                        handleClick: handleClick,
                    }}
                />
                <label
                    className={
                        !isClicked.customerName
                            ? 'hidden'
                            : formInput.customerName === ''
                            ? 'text-red-600 font-bold text-md'
                            : 'hidden'
                    }
                >
                    You need to fill in the customer name!
                </label>
                <Input
                    props={{
                        value: formInput.salesPersonName,
                        type: 'text',
                        name: 'salesPersonName',
                        placeholder: 'Sales Person Name',
                        isInput: true,
                        handleChange: handleFormInput,
                        handleClick: handleClick,
                    }}
                />
                <label
                    className={
                        !isClicked.salesPersonName
                            ? 'hidden'
                            : formInput.salesPersonName === ''
                            ? 'text-red-600 font-bold text-md'
                            : 'hidden'
                    }
                >
                    You need to fill in the sales person name!
                </label>
                <div className='rounded-md relative'>
                    <input
                        type='text'
                        name='product'
                        onChange={(e) => searchProduct(e)}
                        onClick={(e) => searchProduct(e)}
                        className='border-[1px] rounded-md p-3 border-dark/[0.1] text-black w-full font-dm-sans bg-white text-normal outline-none'
                        placeholder='Products'
                        value={inputProduct}
                    ></input>
                    <ul>
                        {formInput.products.map((product, index) => (
                            <li
                                className='cursor-default bg-white p-3 flex flex-col'
                                key={index}
                            >
                                {product['name']}, {product['price']},{' '}
                                {product['quantity']}{' '}
                            </li>
                        ))}
                    </ul>
                    {suggestions.length > 0 && isSearch && (
                        <div className='absolute top-12 bg-slate-200 w-full max-h-32 overflow-y-auto'>
                            <ul className='flex flex-col'>
                                {suggestions.map((suggestion, index) => (
                                    <li
                                        className='cursor-default hover:bg-slate-300 p-3 flex flex-col'
                                        key={index}
                                        onClick={(e) => addProduct(e, index)}
                                    >
                                        {suggestion['name']},{' '}
                                        {suggestion['price']},{' '}
                                        {suggestion['quantity']}{' '}
                                        <img
                                            src={suggestion['picture']}
                                            className='w-[50px] h-[50px]'
                                            alt='img'
                                        ></img>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <label
                    className={
                        !isClicked.products
                            ? 'hidden'
                            : formInput.products.length === 0
                            ? 'text-red-600 font-bold text-md'
                            : 'hidden'
                    }
                >
                    You need to choose the products!
                </label>
                <Input
                    props={{
                        value: formInput.notes,
                        name: 'notes',
                        placeholder: 'Notes',
                        isInput: false,
                        handleChange: handleFormInput,
                    }}
                />
                <button
                    className='w-full font-bold bg-blue-500 rounded-md p-3'
                    onClick={(e) => submitForm(e)}
                    disabled={
                        formInput.customerName === '' &&
                        formInput.date === '' &&
                        formInput.salesPersonName === '' &&
                        formInput.products.length === 0
                    }
                >
                    ADD
                </button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => ({
    addInvoice: state.addInvoice,
});

export default connect(mapStateToProps, {
    handleClick,
    handleFormInput,
    submitForm,
    addProduct,
    searchProduct,
    setIsSearch,
    handleInputProduct,
})(AddInvoice);
