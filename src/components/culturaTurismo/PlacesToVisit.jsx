import { Row, Container } from 'react-bootstrap';
import ParqueCheGuevara from '../../assets/images/solar-del-che-guevara.jpg';
import IslaCaraguatay from '../../assets/images/parque-isla-caraguatay.jpg';

export const PlacesToVisit = () => {

  return (
    <>
      <Container>
        <Row className='text-indent'>
          {/* <h5 ><b>Lugares para visitar</b></h5>
          <br /> */}

          <h6 className='titles-subtitles'><b>Parque Ernesto Che Guevara</b></h6>

          <div className="box-img">
            <img className="img-place" src={ParqueCheGuevara} ></img>
          </div>

          <div className='paragraphs'>
            <p className='text-paragraphs'>
              En la ciudad de Caraguatay, el Parque Provincial Ernesto “Che” Guevara es uno de los lugares más emblemáticos de la región.
              En estas tierras, se supone que el “Che” pasó los primeros años de vida junto a sus padres. Hoy, se conserva la casa en la que
              residió la familia transformada en un Museo Temático que recuerda la vida del mítico personaje.
              En el resto de las 22 hectáreas que conforman el Parque Provincial se exponen los hermosos paisajes que la naturaleza de
              Misiones acostumbra a pintar: el arroyo Salamanca lo recorre regando la abundante vegetación que tapiza su suelo colorado.
              Los senderos invitan a dejarse llevar por las sensaciones que el marco selvático provoca, respirando este aire cargado de
              pureza.
            </p>
          </div>
          <br />
          <hr />
          <h6 className='titles-subtitles'><b>Isla Caraguatay</b></h6>

          <div className="box-img">
            <img className="img-place" src={IslaCaraguatay} ></img>
          </div>

          <div className='paragraphs'>
            <p className='text-paragraphs'>
              En la ciudad de Caraguatay, el Parque Provincial Ernesto “Che” Guevara es uno de los lugares más emblemáticos de la región.
              En estas tierras, se supone que el “Che” pasó los primeros años de vida junto a sus padres. Hoy, se conserva la casa en la que
              residió la familia transformada en un Museo Temático que recuerda la vida del mítico personaje.
              En el resto de las 22 hectáreas que conforman el Parque Provincial se exponen los hermosos paisajes que la naturaleza de
              Misiones acostumbra a pintar: el arroyo Salamanca lo recorre regando la abundante vegetación que tapiza su suelo colorado.
              Los senderos invitan a dejarse llevar por las sensaciones que el marco selvático provoca, respirando este aire cargado de
              pureza.
            </p>
          </div>

        </Row>
      </Container>
    </>
  )
}

