import React, {useEffect, useState} from 'react';

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasErrors: null,
    });

    const getFetch = async() => {

        setState({
            ...state,
            isLoading: true
        });
        
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data[0]);

        setState({
            data: data,
            isLoading: false,
            hasErrors: null,
        });
    };
    

    useEffect(() => {
   
        getFetch();
      
    }, [url])
    

  return {
      data: state.data,
      isLoading : state.isLoading,
      hasErrors: state.hasErrors,
  } ;
}
