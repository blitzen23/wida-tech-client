function Input({ props }) {
    return props.isInput === true ? (
        <input
            value={props.value}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            className='border-[1px] rounded-md p-3 border-dark/[0.1] text-black w-full font-dm-sans bg-white text-normal outline-none'
            onChange={(e) => props.handleChange(e)}
            onClick={(e) => props.handleClick(e)}
            required
        />
    ) : (
        <textarea
            name={props.name}
            placeholder={props.placeholder}
            className='border-[1px] rounded-md p-3 border-dark/[0.1] text-black
            w-full font-dm-sans bg-white text-normal outline-none'
            onChange={(e) => props.handleChange(e)}
            required
        >
            {props.value}
        </textarea>
    );
}

export default Input;
