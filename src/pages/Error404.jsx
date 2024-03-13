import imageNotFound from "../assets/images/404NotFound.jpeg";


export const Error404 = () => {

    return (


        <div className="container-not-found">
            <h5 className="title-not-found">ERROR 404</h5>
            <img src={imageNotFound} className="error-404"></img>
            <br />
            <h5 className="title-not-found">Página no encontrada</h5>
            <span style={{textAlign: "center"}}>Pongase en contacto con el administrador del sitio para obtener más detalles. </span>
        </div>

    )
}
