import React, {useState} from 'react';

export const useForm = (inicialForm = {}) => {
    const [formState, setFormState] = useState(inicialForm);

    
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState( 
            {...formState, 
                [name]: value
            }
        )
        console.log({name, value});
        
    }

    const onResetForm = () => {
        setFormState(inicialForm);
    }
    
   
  return {
      ...formState,
      formState,
      onInputChange,
      onResetForm
  }
  
}
