import { useState } from 'react';
import { fileUpload } from '../helpers/fileUpload';


/* 
Este hook recibe: 

1° valores iniciales.
2° validaciones de cualaquier formulario.
3° inputs para marcar errores en los components "form-control" o "inputs".

La funcion "FormValidation" recibe los datos del form, eventos, inputs y errores. Solo retorna errores.
*/


export const useForm = (initialForm = {}, FormValidations = {}, inputs = {}, handleShow = {}) => {

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showResOk, setShowResOk] = useState(false);
  const [showResBad, setShowResBad] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null)
  const [requirementValue, setRequirementValue] = useState("");
  const [items, setItems] = useState([]);       // Maneja los ítems que se agregan en el input de requisitos.
  const [files, setFiles] = useState([])
  const [avatar, setAvatar] = useState([])

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleBlur = (e) => {
    if (!(e.target.name === "image")) {                            //adaptado para que no genere inconsistencias en DP Create new.
      handleChange(e);
      setErrors(FormValidations(form, e, inputs, errors));
    } else {
      setErrors(FormValidations(form, e, inputs, errors));
    }

  };

  const handleKeyUp = (e) => {
    handleChange(e);
    setErrors(FormValidations(form, e, inputs, errors));
  }

  const handleMouseup = (e) => {
    handleChange(e);
    setErrors(FormValidations(form, e, inputs, errors));
  }

  const handleReset = () => {                                  // establece los valores del form a los iniciales y resetea los 
    setForm(initialForm);
    setItems([]);                                             // className de todos los inputs evitando que queden en rojo o verde.
    for (let clave in inputs) {
      inputs[clave].current.className = "form-control";
    }
  }

  const handleSubmit = async (e) => {
    handleChange(e);
    e.preventDefault();
    setForm(prevState => {
      const idUsers = 1;
      return {
        ...prevState,
        idUsers: idUsers
      };
    });

    setErrors(FormValidations(form, e, inputs, errors));

    // podria setear form para agregar el idUser antes de enviarlo //


    if (Object.keys(errors).length === 0) {
      setLoading(true);

      const folder = "noticias";                               // apunta al presets "noticias" de cloudinary.

      const fileUploadPromises = [];
      for (const file of files) {                              // files viene del "estado files".
        fileUploadPromises.push(fileUpload(file, folder))
      }

      const photosUrls = await Promise.all(fileUploadPromises);
      console.log (photosUrls);

      setForm(prevState => {
        return {
          ...prevState,
          imagesUrl: photosUrls
        };
      });

      // ver si se puede hacer lo mismo que con las imagenes: subir simultaneamente las urls en mysql.
      // Para convertir un array de elementos a un string separados por comas, puedes utilizar el método join() en JavaScript. 
      // El método join() une todos los elementos de un array en una cadena de texto, utilizando el separador que especifiques.
      // Sí, puedes convertir un string separado por comas de nuevo a un array utilizando el método split() en JavaScript. 
      // El método split() divide una cadena de texto en un array de subcadenas utilizando un separador especificado.

      console.log(form)

      try {

        const req = await fetch('http://localhost:4001/api/noticias/create', {
          method: "POST",
          body: JSON.stringify(form),
          headers: { 'Content-Type': 'application/json' }
        })

        const res = await req.json();

        console.log(res)

        setResponseMsg(res);

        if (res.status === 201) {
          setShowResOk(true);
          setShowResBad(false);
          setForm(initialForm);
          setItems([])
          setRequirementValue('')
          inputs.image.current.value = '';
          handleReset();
        } else {
          setShowResBad(true);
          console.log("-------------------")
          console.log(res.errors)
          console.log("-------------------")

        }
      }
      catch (error) {
        console.log(error)
      }
    } else {
      setShowResOk(false);
      alert("Revise los errores del formulario");
     }
  }

  return {
    form,
    setForm,
    handleChange,
    handleBlur,
    handleKeyUp,
    handleMouseup,
    handleReset,
    handleSubmit,
    setShowResOk,
    setShowResBad,
    setErrors,
    setFiles,
    setAvatar,
    requirementValue,
    items,
    files,
    avatar,
    setItems,
    setRequirementValue,
    loading,
    errors,
    showResOk,
    showResBad,
    responseMsg
  }
}