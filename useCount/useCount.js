import { useState } from "react"


//esto es un coutn...


export const Counts = (starvalue = 10) => {

    let [ constState, setState ] = useState(starvalue);

    

    const addValue = () => {

        //aqui tube que hacer un cambio para que se pueda ejecutar en el button de mame
        //en esta funcion yo le pasaba un valor por default que era = 1, para que en caso de que
        //no me pasaran un ya tenia un valor 
   
        setState(constState + 1);
    }

    const restValue = (defaultValue = 1) => {
        setState(constState - defaultValue);
    }

    const reset = (value) => {
        /*
           otra forma de poder hacer esto es poniendo el ( starvalue ), solo eso y ya 

           ej:

           setState( starvalue );

           y asi podemos resetiar con el valor que tiene predeterminado...
         
        */
 
      setState( constState  = value )
    }


    return{
        constState,
        reset,
        addValue,
        restValue
    }

}

