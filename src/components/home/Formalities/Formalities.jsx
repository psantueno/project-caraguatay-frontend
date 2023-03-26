import {FormalitiesBtns} from '../../../assets/data/FormalitiesBtns'
import { Container } from 'react-bootstrap'
import { ButtonNoUrlList } from '../../buttonsWithoutURL/ButtonNoUrlList'
import { MacroClick, DriveLicence, CommerceEnable, PrivateConstruction } from '../Formalities';
import { useState } from 'react'

export const Formalities = () => {

  const [display, setDisplay] = useState(null)
  const [isMacroClickActive, setIsMacroClickActive] = useState(false);
  const [isDriveLicenceActive, setIsDriveLicenceActive] = useState(false);
  const [isCommerceEnableActive, setIsCommerceEnableActive] = useState(false);
  const [isPrivateConstructionActive, setIsPrivateConstructionActive] = useState(false);

  
  
  const changeDisplay = (event) => {
    
    setIsMacroClickActive(event.target.id === "macroClick" && !isMacroClickActive );
    setIsDriveLicenceActive(event.target.id === "licencia_conducir" && !isDriveLicenceActive ) ;
    setIsCommerceEnableActive(event.target.id === "habilitacion_comercial" && !isCommerceEnableActive  );
    setIsPrivateConstructionActive(event.target.id === "obras_particulares" && !isPrivateConstructionActive  );
    setDisplay(event.target.id)
   
  }

  return (
    <>
      <Container className='containers-home'>

        <h4>Guía de Trámites</h4>
        <hr />

            <ButtonNoUrlList 
              changeDisplay={changeDisplay} 
                buttons={FormalitiesBtns} 
                onClick={()=>changeDisplay()}/>
        
          <Container>
    
              {(display === "macroClick"  && isMacroClickActive) && <MacroClick /> }
              {(display === "licencia_conducir" && isDriveLicenceActive) && <DriveLicence />}
              {(display === 'habilitacion_comercial' && isCommerceEnableActive) && <CommerceEnable />}
              {(display === 'obras_particulares' && isPrivateConstructionActive) && <PrivateConstruction />}

          </Container>


      </Container>

    </>
  )
}
