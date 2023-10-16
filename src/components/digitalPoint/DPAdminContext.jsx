import { createContext, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export const DPAdminContext = createContext()

const DPAdminContextProvider = (props) => {
  

  
  const {
    setResponseMsg,
    setShowResOk,
    setShowResBad,
    showResOk,
    showResBad,
    responseMsg,
 
  } = useForm();
    
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowResOk(false);
      setShowResBad(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <DPAdminContext.Provider value={{ 
        
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