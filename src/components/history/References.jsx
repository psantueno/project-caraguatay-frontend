import React from 'react'
import { Container, Row } from 'react-bootstrap'
import mapPhoto from '../../../src/assets/images/mapaCaraguatay.png'

export const References = () => {
   return (
      <>
         <Container>

            <Row className='text-indent'>

               <h3 > <b>  Referencias del lugar </b></h3>
               <h6> <p> Área del municipio de Caraguataý, en la Provincia de Misiones; el punto pequeño representa la localidad de Tarumá.</p></h6>
               <img src={mapPhoto} alt={'map'} />
               <p >
                  Caraguatay o Caraguataí es una localidad y municipio argentino que ocupa una superficie de 459 km² dentro del departamento Montecarlo, en la provincia de Misiones.
               </p>

               <p>
                  Su nombre proviene del idioma guaraní: la caraguatá -"karaguata"- es un tipo de planta bromeliácea; e "y" que significa agua. Se podría interpretar como "Karaguata de Agua" (Karaguatay).
               </p>
               <h5 > <b>  Población </b></h5>
               <p>
                  Aunque la colonia se encuentra poblada desde 1909, recién en 1940 se formó la primera Comisión de Fomento.
               </p>
               <p >
                  El municipio cuenta con una población de 3.378 habitantes, según datos del censo del año 2010 (INDEC). Dentro del municipio se encuentra también el núcleo urbano de Tarumá.
                  En Puerto Caraguatay se encuentra emplazada la que fuera casa del matrimonio de Ernesto Guevara Lynch y Celia de la Serna, mientras ella estaba embarazada de quien sería luego conocido como el <b> Che Guevara</b>. Cerca de esta localidad, poseían plantaciones de yerba mate, por lo cual el guerrillero pasó los primeros años de su infancia en esta localidad. Hoy funciona allí un museo que exhibe la casa que perteneció a su familia Guevara Lynch.
               </p>
               <h5 > <b>  Principales cultivos </b></h5>
               <p >
                  Desde comienzos del siglo XXI, la principal actividad económica del municipio está basada en :
                  <br />
                  <br />

                  <ul>

                     <li> el cultivo de yerba mate </li>
                     <li> el cultivo de cítricos </li>
                     <li> el cultivo de cítricos </li>
                     <li> cultivos anuales </li>
                     <li> la forestación </li>
                     <li> la ganadería. </li>


                  </ul>
               </p>
               <p>
                  En la Isla Caraguatay, se impone un majestuoso paraíso recubierto de exuberante vegetación, bañado por el río Paraná que con sus correderas y el "bairuzú" (remolino), invitan a cientos de pescadores a disfrutar de esta importante actividad regional.
                  Los arroyos Itacuruzú, Tarumá y Caraguatay ofrecen una abundante pesca y numerosos balnearios naturales. La reserva de Vida Silvestre permite apreciar a un coloso de la selva,  el famoso "Timbó Gigante".

               </p>

            </Row>
         </Container>


      </>
   )
}
