import { useState } from "react";


export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [errorMessage, setErrorMessage] = useState('');


    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value }))
    };


    const onSubmit = async (e) => {
        e.preventDefault();
   
        try {

            await onSubmitHandler(values); 
            setValues(initialValues);

        } catch (error) {
            setErrorMessage(error.message);
        }

    };

    const changeValues = (newValues) => {

        setValues(newValues);
    };
    

    return {
        values,
        onChangeHandler,
        onSubmit,
        changeValues,
        errorMessage,
    };
};