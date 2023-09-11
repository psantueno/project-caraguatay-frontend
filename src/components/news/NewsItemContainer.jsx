import { Alert, Button, Col, Modal, Row } from "react-bootstrap";
import { useFetchNews } from "../../hooks/useFetchNews";
import { NewsItem } from "./NewsItem";
import { useRef, useState } from "react";
import { Loader } from "../buttons/Loader";


export const NewsItemContainer = () => {

    const { news } = useFetchNews();
    const [showResOk, setShowResOk] = useState(false);
    const [showResBad, setShowResBad] = useState(false);
    const [responseMsg, setResponseMsg] = useState(null)
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    const [selectedNewsForDeletion, setSelectedNewsForDeletion] = useState(null);
    const [loading, setLoading] = useState(false);

    const refToMsg = useRef();


    const handleDeleteNews = (id) => {
        setSelectedNewsForDeletion(id);
        setShowConfirmDelete(true);
    };

    const handleCancelDeletion = () => setShowConfirmDelete(false);

    const handleConfirmDeletion = async () => {

        setLoading(true)
        const id = selectedNewsForDeletion;

        try {
            const response = await fetch("http://localhost:4001/api/noticias/delete", {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });

            if (!response.ok) {
                throw new Error('Hubo un error al eliminar la noticia.');
            }

            const res = await response.json(); // Parse the JSON data from the response 
            setResponseMsg(res);

            if (res.status === 200) {
                setShowConfirmDelete(false);
                setLoading(false)
                setShowResOk(true);
                // window.scrollTo(0, 0);
                // window.scrollTo(0, msgPosition);
                refToMsg.current.scrollIntoView({ behavior: "smooth" });

                /* Falta resolver el tema de que cuando elimino una news, haga el scroll.
                Podria intentar poner un mensaje en el mismo modal para avisar o un nuevo modal para que el usuario clickee en ok 
                y se cierre el aviso.

                Terminar tmb el edit form

                */
            } else {
                setLoading(false)
                setShowConfirmDelete(false);
                setShowResBad(true);
                // window.scrollTo(0, 0)
            }
        } catch (error) {
            setShowConfirmDelete(false);
            console.error('Error deleting user:', error);
        }
    };

    return (
        <>

            <h4 ref={refToMsg}>Últimas Noticias</h4>
            <hr />

            {/* SHOW CONFIRM DELETE 
            
            CREAR COMPONENTES DINAMICOS SHOW CONFIRM DELETE, SHOWRESOK Y RESBAD
            */}
            <Modal show={showConfirmDelete} className="mt-5 p-4">
                <Modal.Body>
                    <h3 className="form-title mt-4"><i className="fas fa-exclamation-triangle"></i> ¡Atención!. ¿Confirma que desea eliminar la noticia?</h3>
                    <Modal.Footer>
                        <Button onClick={handleCancelDeletion} disabled={loading}>
                            Cancelar
                        </Button>
                        <Button onClick={handleConfirmDeletion} disabled={loading}>
                            Sí, eliminar
                        </Button>
                    </Modal.Footer>
                    <Loader loader={loading} text={"Eliminando la noticia, aguarde por favor..."} />
                </Modal.Body>
            </Modal>
            {/* SHOW CONFIRM DELETE */}

            {/* RESPUESTA OK DEL RESPONSE */}
            <Alert show={showResOk} variant="primary" className="mt-2">
                <Row>
                    <Col>
                        <p> {responseMsg && responseMsg.msg ? responseMsg.msg : null} </p>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button
                            onClick={() => setShowResOk(false)}>
                            Cerrar
                        </Button>
                    </Col>
                </Row>
            </Alert>
            {/* RESPUESTA OK DEL RESPONSE */}

            {/* RESPUESTA BAD DEL RESPONSE */}

            <Alert show={showResBad} variant="danger" className="mt-2">
                <Row>
                    <Col>
                        <p>{responseMsg && responseMsg.errors
                            ? responseMsg.errors.map((field, index) => (
                                <li key={index}>{field.msg}</li>
                            ))
                            : null
                        }</p>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button
                            variant='danger'
                            onClick={() => setShowResBad(false)}>
                            Cerrar
                        </Button>
                    </Col>
                </Row>
            </Alert>
            {/* RESPUESTA BAD DEL RESPONSE */}

            {
                news.map((news, i) => (

                    <div key={`${news.id}-${i}`}>

                        <NewsItem
                            id={news.id}
                            category={news.category}
                            date={news.date}
                            title={news.title}
                            mainText={news.mainText}
                            urls={news.urls}
                            urlArray={news.urlArray}
                            link={`/noticias/${news.id}`}
                            onDelete={handleDeleteNews}
                        />
                    </div>

                ))
            }
        </>
    )
}







