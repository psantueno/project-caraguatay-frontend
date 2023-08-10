import { useEffect, useState } from 'react';
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
  const [requirementValue, setRequirementValue] = useState(""); // exclusivo DP.
  const [items, setItems] = useState([]);       // Maneja los ítems que se agregan en el input de requisitos. Exclusivo de DP
  const [files, setFiles] = useState([])
  const [avatar, setAvatar] = useState([])

  useEffect(() => {
    console.log('render form');
  }, [form]);

  useEffect(() => {
    // if(form.imagesUrl.length>0) {
    console.log('render form images')
    // }
  }, [form.imagesUrl]);

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
      const user_id = 1;
      return {
        ...prevState,
        user_id: user_id
      };
    });

    setErrors(FormValidations(form, e, inputs, errors));

    // podria setear form para agregar el idUser antes de enviarlo //


    if (Object.keys(errors).length === 0) {
      setLoading(true);

      const folder = "noticias";                               // apunta al presets "noticias" de cloudinary.
      const fileUploadPromises = [];

      for (const file of files) {                              // files viene del "estado files" en linea 26.
        fileUploadPromises.push(fileUpload(file, folder))
      }

      const photosUrls = await Promise.all(fileUploadPromises);   // proceso para obtener las urls de las imagenes subidas. 
      const imagesToString = photosUrls.join(', ');               // proceso para convertir el array en strings separados por ", ".


      const data = {                    // preparando el archivo para enviarlo al back.
        ...form,
        imagesUrl: imagesToString
      }


      try {

        const req = await fetch('http://localhost:4001/api/noticias/create', {
          method: "POST",
          body: JSON.stringify(data),
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
    setResponseMsg,
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