import React from 'react'

interface InputProps {
    value: string;
    setValue: (value: string) => void;
    placeholder: string;
}

export const IndexInput: React.FC<InputProps> = ( { value, setValue, placeholder } ) => {
    return(
        <input type="text"
               className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 focus:outline-none"
               placeholder={placeholder}
               value={value}
               onChange={(e) => { setValue(e.target.value) }}/>
    )
}