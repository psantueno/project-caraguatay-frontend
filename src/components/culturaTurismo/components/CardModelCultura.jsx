
export const CardModelCultura = ({cover, name, address, phone, website, facebook, instagram}) => {

    return (

        <div className="cultura-card">
            <img src={cover} alt="" />
            <br />
            <div className="container">
                <h6 className="card-title-cultura"><b>{name}</b></h6>
                <div className="column-contact">
                    <p className='contact-card'><i className="fas fa-map-marker-alt"></i> {address}</p>
                    <p className='contact-card'><i className="fas fa-phone-alt"></i> {phone}</p>
                </div>
                <div className="social-net-card">
                    <span className="box-simple-network">
                        <a href={website} className="link-phones">
                            <i className="fas fa-globe"></i>
                        </a>
                    </span>
                    <span className="box-simple-network">
                        <a href={facebook} className="link-phones">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    </span>
                    <span className="box-simple-network">
                        <a href={instagram} className="link-phones">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}
