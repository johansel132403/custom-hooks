
import React, { useState } from 'react';


export const FormStatee = ( initialization = {} ) => {

    const [formState, setFormState ] = useState(initialization);

   

     const reset = () => {
         setFormState( initialization )
     }  

    const handlerInput = ({target}) =>{
        setFormState({
            ...formState,
            [ target.name ]: target.value
             
        });

    }




    return[    formState, handlerInput, reset ]

}