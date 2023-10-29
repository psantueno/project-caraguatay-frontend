import React, { useContext } from 'react'
import DPAdminContextProvider, { DPAdminContext } from '../components/digitalPoint/context/DPAdminContext';
import { ShowAlerts } from './ShowAlerts';

export const DPAlertHandler = () => {

    const {
        setShowResOk,
        setShowResBad,
        showResOk,
        showResBad,
        responseMsg,
      } = useContext(DPAdminContext, DPAdminContextProvider);
    
    
    
  return (
   
      <>
          <ShowAlerts 
          setShowResOk= {setShowResOk}
          setShowResBad={setShowResBad}
          showResOk={showResOk}
          showResBad={showResBad}
          responseMsg={responseMsg}          
          />
      </>
  )
}
