/* componente encargador de moostrar la cuadricula de botones*/

import { ButtonToolbar, Container , Row} from 'react-bootstrap';
import ButtonSquare from './ButtonSquare';

export const ButtonSquareList = ({ buttons, changeDisplay=null }) => {

    return (

        <Container>
            <Row className='mb-2'>

                <ButtonToolbar>

                    <nav onClick={ (event) => changeDisplay(event) } className='btn-toolbar'>

                        {
                            buttons.map((btn) => (
                                
                                <ButtonSquare
                                className="button-square"
                                icon={btn.icon}
                                title={btn.title}
                                url={btn.url ? btn.url : null}
                                key={btn.title}
                                id={btn.id ? btn.id : null}
                                />
                                ))
                            }

                    </nav>
                   

                </ButtonToolbar>
            </Row>
        </Container>




    )
}
