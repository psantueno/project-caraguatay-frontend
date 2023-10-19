import { createContext, useEffect, useRef } from 'react';
import { useForm } from '../../hooks/useForm';
import dayjs from 'dayjs';

export const DPAdminContext = createContext()

const DPAdminContextProvider = (props) => {

  const initialForm = {
    category: "default",
    status: "default",
    start: dayjs().format("YYYY-MM-DD"),
    title: "",
    description: "",
    image: undefined,
    requirements: [],
};

  const formErrors = {
    category: false,
    status: false,
    start: false,
    title: false,
    description: false,
    image: false,
    requirements: false,
  };

  const inputs = {
    category: useRef(),
    status: useRef(),
    start: useRef(),
    title: useRef(),
    description: useRef(),
    image: useRef(),
    requirements: useRef(),
  }
  

  
  const {
    setResponseMsg,
    setShowResOk,
    setShowResBad,
    showResOk,
    showResBad,
    responseMsg,
 
  } = useForm(initialForm, inputs);
    
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowResOk(false);
      setShowResBad(false);
    }, 55000);

    return () => clearTimeout(timeoutId);
  }, [showResBad, showResOk]);


  return (
    <DPAdminContext.Provider value={{ 
        initialForm,
        formErrors,
        inputs,
        
        setResponseMsg,
        setShowResOk,
        setShowResBad,
        showResOk,
        showResBad,
        responseMsg,     
      }}>
      {props.children}
    </DPAdminContext.Provider>
  )
}

export default DPAdminContextProvider;