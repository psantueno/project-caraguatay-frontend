import { ButtonGroup, ButtonToolbar, Container, Button } from 'react-bootstrap';
import ButtonSquare from '../buttonsSquare/ButtonSquare';
import { HistoryBtns } from '../../assets/data/HistoryBtns';


export const HistoryButtonSquareList = () => {
    
    return (

    <Container>
           
                <ButtonToolbar  >

                    <nav className='btn-toolbar ' style={{flexWrap:'nowrap',  textAlign:'center'}}>

                        {
                            HistoryBtns.map((btn) => (

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
            

        </Container>

    )
}
