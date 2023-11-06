import { useModal } from "../../../hooks/useModal"
import { DeleteButton } from "../../buttons/DeleteButton"
import { EditButton } from "../../buttons/EditButton"
import { ModalEdit } from "./modals/ModalEdit"
import { ModalCancel } from "./modals/ModalCancel"
import { useState } from "react"


export const DPCard = ({ id, image, title, start, status, requirements, description }) => {


    const { show, handleShow, handleClose } = useModal();
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    const handleCancelDeletion = () => setShowConfirmDelete(false);

    const handleShowConfirmDelete = () => {
        setShowConfirmDelete(true);
    };

    const arrayReq = requirements.split(";")

    return (

        <div className="sections-card">
            <div className="dpCard-image">
                <img src={image} alt="" />
            </div>
            <br />
            <div className="container">
                <h6 className="card-title-section"><b>{title}</b></h6>
                <div className="column-contact">
                    <p className='contact-card'><i className="far fa-calendar-alt"></i> Fecha de inicio: {start}</p>
                    <p className={status == 1 ? 'registration-card-open' : 'registration-card-closed'}><i className="fas fa-pen-alt"></i>
                        {
                            status == 1 ? "Inscripcion Abierta" : "Inscripción Cerrada"
                        }
                    </p>
                </div>
                <div className="description-card">
                    <p className="subtitles-card"><b>Descripción:</b></p>
                    <p>{description}</p>
                </div>

                <div className="requirements-card">
                    <p className="subtitles-card"><b>Requisitos:</b></p>


                    {
                        arrayReq && arrayReq.map((req, i) => (
                            <ul key={i} >
                                <li className="requirements-card-li">{req}</li>
                            </ul>
                        ))
                    }


                </div>

                <div className="btns-admin-card">
                    <EditButton fx={handleShow}  />
                    <DeleteButton fx={handleShowConfirmDelete} />
                </div>

            </div>

            <ModalEdit show={show} handleClose={handleClose} id={id} />
()
            <ModalCancel show={showConfirmDelete} handleClose={handleCancelDeletion} id={id} title={title} />


        </div>
    )
}
