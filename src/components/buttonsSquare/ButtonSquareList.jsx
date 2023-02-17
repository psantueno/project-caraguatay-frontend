/* componente encargador de moostrar la cuadricula de botones*/

import { ButtonToolbar, Container , Row} from 'react-bootstrap';
import ButtonSquare from './ButtonSquare';

export const ButtonSquareList = ({ buttons }) => {

    return (

        <Container>
            <Row className='mb-2'>

                <ButtonToolbar>

                    <nav className='btn-toolbar'>

                        {
                            buttons.map((btn) => (
                                
                                <ButtonSquare
                                className="button-square"
                                icon={btn.icon}
                                title={btn.title}
                                url={btn.url}
                                key={btn.title}
                                id={btn.id}
                                />
                                ))
                            }

                    </nav>
                   

                </ButtonToolbar>
            </Row>
        </Container>




    )
}
