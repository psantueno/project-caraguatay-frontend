/* componente encargador de mostrar la cuadricula de botones*/

import { useState } from 'react';
import { ButtonToolbar, Container, Row } from 'react-bootstrap';
import ButtonNoUrl from './ButtonNoUrl';

export const ButtonNoUrlList = ({ buttons, changeDisplay = null }) => {
    
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (id) => {
        setActiveButton(id);
    };


    return (

        <Container>
            <Row className='mb-2'>

                <ButtonToolbar>

                    <nav onClick={changeDisplay} className='btn-toolbar' >

                        {
                            buttons.map((btn) => (

                                <ButtonNoUrl
                                    className="link-btn-square"
                                    icon={btn.icon}
                                    title={btn.title}
                                    key={btn.title}
                                    id={btn.id ? btn.id : ''}
                                    isActive={activeButton === btn.id}
                                    onClick={handleClick}

                                />
                            ))
                        }

                    </nav>

                </ButtonToolbar>
            </Row>
        </Container>

    )
}

/*Para actualizar la clase del botón al hacer clic en otro botón diferente, debes mantener un estado global que almacene el botón activo actual y luego compararlo con el botón que se hizo clic para actualizar su clase.
En el componente que contiene los botones(BUttonList), mantén un estado global para el botón activo actual. También define una función de controlador de clic que actualice el botón activo y pásala a cada botón como una prop (onclick y isActive). Para actualizar la clase del botón al hacer clic en otro botón diferente, debes mantener un estado global que almacene el botón activo actual y luego compararlo con el botón que se hizo clic para actualizar su clase. Aquí hay una posible solución:
En el componente ButtonNoUrl, actualiza la función HandleClassName para que llame a la función de clic pasada como una prop en lugar de actualizar el estado local.
Con esta solución, al hacer clic en un botón, su clase cambiará a "link-activated" y el botón anterior volverá a su clase "link-btn-square". Esto resuelve el problema.

*/