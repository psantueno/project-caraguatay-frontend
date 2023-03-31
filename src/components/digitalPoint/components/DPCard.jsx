import { DeleteButton } from "../../buttons/DeleteButton"
import { EditButton } from "../../buttons/EditButton"

export const DPCard = ({image, title, start, status, req1, req2, description}) => {

    return (

        <div className="sections-card">
            <img src={image} alt="" />
            <br />
            <div className="container">
                <h6 className="card-title-section"><b>{title}</b></h6>
                <div className="column-contact">
                    <p className='contact-card'><i className="far fa-calendar-alt"></i> Fecha de inicio: {start}</p>
                    <p className={ status == "abiertas" ? 'registration-card-open' : 'registration-card-closed' }><i className="fas fa-pen-alt"></i> Inscripciones {status}</p>
                </div>
                <div className="description-card">
                <p className="subtitles-card"><b>Descripción:</b></p>
                    <p>{ description }</p>
                </div>

                <div className="requirements-card">
                    <p className="subtitles-card"><b>Requisitos:</b></p>
                    <ul>
                        <li style={{listStyleType: 'disclosure-closed'}}>{ req1 }</li>
                        <li style={{listStyleType: 'disclosure-closed'}}>{ req2 }</li>
                    </ul>
                </div>

                <div className="btns-admin-card">
                    <EditButton />
                    <DeleteButton />
                </div>
                
            </div>
        </div>
    )
}
