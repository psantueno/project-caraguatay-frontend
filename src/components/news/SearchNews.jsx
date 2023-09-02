import { useEffect, useRef, useState } from 'react';
import { useFetchNewsCategories } from '../../hooks/useFetchNewsCategories';
import { useForm } from '../../hooks/useForm';
import { SearchResults } from './SearchResults';
import { NewsFormValidations } from './NewsFormValidations';
import { Loader } from '../buttons/Loader';
import { Form, FormControl, InputGroup, Button, Container } from 'react-bootstrap';


const initialForm = {
    title: "",
    category: "default",
};

export const SearchNews = () => {

    const inputs = {
        title: useRef(),
        category: useRef()
    }

    const { newsCategories } = useFetchNewsCategories(); // trae las categorías de news.

    const {
        form,
        handleChange,
        handleBlur,
        handleKeyUp,
        handleMouseup,
        setLoading,
        errors,
        loading,
    } = useForm(initialForm, NewsFormValidations, inputs)   // hook useForm que maneja el formulario.

    const { title, category } = form; // Desestructura title y category de form.

    const [results, setResults] = useState([]);
    const [msgApi, setMsgApi] = useState(null);

    // handleSearch podria ser un helper. 

    const handleSearch = async (e) => {
        e.preventDefault();

        if (Object.keys(errors).length === 0) {
            setLoading(true);

            try {
                const res = await fetch('http://localhost:4001/api/noticias/buscar-noticia', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title, category })
                });

                if (res.status === 400) {
                    const data = await res.json();
                    setLoading(false);
                    let errorsList = data.errors.map((field => field.msg));
                    errorsList = errorsList.join(' ');
                    setMsgApi(errorsList)

                } else {
                    const data = await res.json();
                    setLoading(false);
                    const { news, msg } = data;
                    setResults(news);
                    setMsgApi(msg)
                }
            } catch (error) {
                console.error('Error al obtener los resultados:', error);
                setMsgApi('Error al obtener los resultados:', error)
            }

        } else {
            alert("Revise los errores del formulario");
        }
    }

    const handleClose = () => {
        setMsgApi(null);
    }

    useEffect(() => {
    }, [results, msgApi]);



    return (

        <>
            <Container className="mt-4">
                <h3 className="mt-3 mb-1 form-title" ><i className="far fa-edit"></i> EDICIÓN DE NOTICIAS</h3>
                <p className="mt-3">Utilice el buscador para encontrar una noticia en particular por título y categoría.</p>
                <p>Si la noticia fue creada recientemente, puede buscar en la sección <em><b>"últimas noticias"</b></em> que se encuentran más abajo.</p>
            </Container>

            <Form onSubmit={handleSearch}>
                <InputGroup className="mb-3">

                    <FormControl
                        className="form-control"
                        name="title"
                        placeholder="Escriba el título..."
                        value={title}
                        ref={inputs.title}
                        onChange={handleChange}
                        onKeyUp={handleKeyUp}
                        onBlur={handleBlur}
                        style={{ marginBottom: "16px", width: "100%" }}
                        required
                    />

                    <Form.Select
                        className="form-control"
                        name="category"
                        value={category}
                        ref={inputs.category}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onMouseUp={handleMouseup}
                        style={{ marginBottom: "16px", width: "100%" }}
                        required
                    >
                        <option disabled value="default">-Seleccione una categoría-</option>
                        {
                            newsCategories && newsCategories.length > 0
                                ? (newsCategories.map((category, index) => (
                                    <option key={index} value={category.id} > {category.category} </option>
                                )))
                                : null
                        }
                    </Form.Select>

                    {/* Display errors of input title */}
                    {
                        errors && errors.title
                            ? <Form.Control.Feedback type="invalid" style={{ marginTop: "0px", marginBottom: "0px" }}>
                                {errors.title}
                            </Form.Control.Feedback>
                            : null
                    }
                    {/* Display errors of input title */}

                    {/* Display errors of input category */}
                    {
                        errors && errors.category
                            ? <Form.Control.Feedback type="invalid" style={{ marginTop: "0px", marginBottom: "0px" }}>
                                {errors.category}
                            </Form.Control.Feedback>
                            : null
                    }
                    {/* Display errors of input category */}

                </InputGroup>

                <Button
                    type="submit"
                    style={{ marginBottom: "10px", marginTop: "0px" }}
                    variant="primary">
                    <i className="fas fa-search"></i>  Buscar
                </Button>
            </Form>

            <Loader
                loader={loading}
                text={"Buscando la noticia..."}
            />

            {/* componente que lista las noticias encontradas */}
            {results.length > 0 && <SearchResults results={results} />}

            {/* Muestra los mensajes de errores, como por ej status 400 o si no se encontraron resultados */}
            {
                msgApi &&
                <div className="alert alert-danger" style={{ marginTop: '18px', position: 'relative' }}>
                    <p style={{ marginBottom: "0px", marginTop: "2px", padding: "5px", fontSize: '14px', }}> {msgApi} </p>
                    <button
                        title='Cerrar'
                        style={{
                            position: 'absolute',
                            top: '5px',
                            right: '2px',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                        }}
                        onClick={handleClose}
                    >
                        <i className="fas fa-times" style={{ color: "#842029" }}></i>
                    </button>
                </div>
            }
        </>
    );
}
