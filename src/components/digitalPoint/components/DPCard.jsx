import { useModal } from "../../../hooks/useModal"
import { DeleteButton } from "../../buttons/DeleteButton"
import { EditButton } from "../../buttons/EditButton"
import { ModalEdit } from "./modals/ModalEdit"

export const DPCard = ({ id, image, title, start, status, requirements, description, dpnew }) => {

    const { show, handleShow, handleClose } = useModal()

    const arrayReq = requirements.split( ";")

    

    return (

        <div className="sections-card">
            <img src={image} alt="" />
            <br />
            <div className="container">
                <h6 className="card-title-section"><b>{title}</b></h6>
                <div className="column-contact">
                    <p className='contact-card'><i className="far fa-calendar-alt"></i> Fecha de inicio: {start}</p>
                    <p className={status === 1 ? 'registration-card-open' : 'registration-card-closed'}><i className="fas fa-pen-alt"></i> Inscripción </p>
                </div>
                <div className="description-card">
                    <p className="subtitles-card"><b>Descripción:</b></p>
                    <p>{description}</p>
                </div>

                <div className="requirements-card">
                    <p className="subtitles-card"><b>Requisitos:</b></p>
        
                    {
                        arrayReq && arrayReq.map((req, i) => (
                            <ul key={i}>
                                <li style={{ listStyleType: 'disclosure-closed' }}>{req}</li>
                            </ul>
                        ))
                    } 
        
                </div>

                <div className="btns-admin-card">
                    <EditButton fx={handleShow} />
                    <DeleteButton  />
                   
                </div>

            </div>

            <ModalEdit show={show} handleClose={handleClose} id={id} dpnew={dpnew} />
        </div>
    )
}
