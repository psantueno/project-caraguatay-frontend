import { createContext, useEffect, useRef } from 'react';
import { useForm } from '../../hooks/useForm';
import dayjs from 'dayjs';

export const DPAdminContext = createContext()

const DPAdminContextProvider = (props) => {

  const initialForm = {
    start: dayjs().format("YYYY-MM-DD"),
    title: "",
    description: "",
    category: "default",
    status: "default",
    requirements: [],
    image: undefined
};

  const formErrors = {
    start: false,
    title: false,
    description: false,
    category: false,
    status: false,
    requirements: false,
    image: false,
  };

  const inputs = {
    start: useRef(),
    title: useRef(),
    description: useRef(),
    category: useRef(),
    status: useRef(),
    requirements: useRef(),
    image: useRef()
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
    }, 5000);

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