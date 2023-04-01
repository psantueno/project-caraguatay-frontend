import { Row, Container } from 'react-bootstrap';
import Makers from '../../assets/images/escuela-robotica.jpg'

export const RoboticSchool = () => {


  return (
    <>
      <h5 ><b>Escuela de Robótica</b></h5>
      <Row className='text-indent'>


        <div className="box-img">
          <img className="img-place" src={Makers} ></img>
        </div>

        <p> La Red Maker, es un  espacio  educativo  de gestión estatal no arancelado que ofrece una propuesta pedagógica entorno a la ciencia y a la tecnología, orientadas a la programación y la robótica educativa
          Está pensada para  niños a partir de los 5 años y jóvenes que se fortalecerán como ciudadanos  con la  formación  en robótica y programación.
          La Escuela de Robótica nace en la ciudad de Posadas y ya está presente en los 78 municipios con sedes. En la ciudad de Posadas además de la Sede central también nos pueden encontrar en los barrios Nemesio Parma, Yacyretá, Sur Argentino y Manantiales.
        </p>
        <p>
          Nuestra sede: Caraguatay - Ruta Provincial 212  en el Punto Digital.
        </p>

      </Row>
    </>

  )
}
