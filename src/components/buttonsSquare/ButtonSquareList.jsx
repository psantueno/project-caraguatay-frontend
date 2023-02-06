import { ButtonGroup, ButtonToolbar, Container } from 'react-bootstrap';
import ButtonSquare from './ButtonSquare';
import { CultureBtns } from '../../assets/data/CultureBtns';


export const ButtonSquareList = () => {

    return (

        <Container>
            <ButtonGroup>
                <ButtonToolbar>

                    <nav className='btn-toolbar ' style={{flexWrap:'nowrap',  textAlign:'center'}}>

                        {
                            CultureBtns.map((btn) => (

                                <ButtonSquare
                                    className="button-square"
                                    icon={btn.icon}
                                    title={btn.title}
                                    url={btn.url}
                                    key={btn.title}
                                />
                            ))
                        }

                    </nav>

                </ButtonToolbar>
            </ButtonGroup>

        </Container>




    )
}
