import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainNews } from '../components/home/main-news/MainNews'
import { SearchNews } from '../components/news/SearchNews'
import { Button, Container } from 'react-bootstrap'


export const NewsAdmin = () => {

  useEffect(() => {
    // Desplázate hacia arriba cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);

  return (

    <>
      <h1 className="mb-1">Administración de noticias</h1>
      <p className="mb-5">Cree, modifique o elimine noticias del sitio desde aquí.</p>

      <Container>
        <h3 className="mt-3 mb-1 form-title"><i className="far fa-newspaper"></i> CREACION DE NOTICIAS</h3>
        <p className="mt-3">Haga click en el botón para crear una nueva noticia.</p>
      </Container>

      <Link to="/admin/noticias/crear-noticia">
        <Button style={{ width: 'auto', textAlign: '', marginBottom: "15px" }}>
          <i className="fas fa-plus"></i> Crear nueva noticia
        </Button>
      </Link>
      <hr />

      <SearchNews />

      <hr />

      <MainNews />
    </>

  )
}
