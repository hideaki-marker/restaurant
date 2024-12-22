import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { options = null, className = '', isFocused = false, ...props },
    ref,
) { const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' +
                className
            }
            ref={input}
        >
            {options.map((option) => (
                <option value={option} key={option}>{option}</option>
            ))}
        </ select>
    );
});
