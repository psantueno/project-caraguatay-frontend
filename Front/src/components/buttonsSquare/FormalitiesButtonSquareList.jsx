/* componente encargador de moostrar la cuadricula de botones*/

import { useState } from 'react';
import { ButtonToolbar, Container  } from 'react-bootstrap';
import { MacroClick, DriveLicence, CommerceEnable, PrivateConstruction } from '../Formalities';
import ButtonSquare from './ButtonSquare';


export const FormalitiesButtonSquareList = ({ buttons }) => {


    const [display, setDisplay] = useState(false)


    return (

        <Container>
            <ButtonToolbar>

                <nav className='btn-toolbar'>

                    {
                        buttons.map((btn) => (

                            <>
                                <nav onClick={() => setDisplay(btn.id)}>

                                    <ButtonSquare
                                        className="button-square"
                                        icon={btn.icon}
                                        title={btn.title}
                                        key={btn.title}
                                        url={btn.id}
                                    />
                                </nav>
                            </>
                        ))
                    }
                    <Container>

                        {(display === 'macroClick') && <MacroClick />}
                        {(display === "licencia_conducir") && <DriveLicence />}
                        {(display === 'habilitacion_comercial') && <CommerceEnable />}
                        {(display === 'obras_particulares') && <PrivateConstruction />}

                    </Container>

                </nav>
            </ButtonToolbar>

        </Container>




    )
}
