import React from "react";

interface CheckProps {
    checkValue: boolean;
    setValue: (value: boolean) => void;
}

export const CheckButton: React.FC<CheckProps> = ({checkValue, setValue}) => {
    return(
        <div className="flex items-center me-4">
            <input checked={checkValue}
                   type="checkbox"
                   onChange={(e) => setValue(e.target.checked)}
                   className="w-4 h-4 text-red-500 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="red-checkbox"
                   className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Запомнить меня</label>
        </div>
    )
}