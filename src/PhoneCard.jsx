// props vienen del componente padre: Footer.

export const PhoneCard = ({ src, phone, title }) => {

    return (
       
        <a className="link-phones" href={`tel:+54${phone}`}>
            <div className="phone-card">
                <div className="icon-circle">
                    <img className="img-icon" src={src} />
                </div>
                <h6 className="number-phone">{phone}</h6>
                <h6 className="title-phone">{title}</h6>
            </div>
        </a>
    )
}
