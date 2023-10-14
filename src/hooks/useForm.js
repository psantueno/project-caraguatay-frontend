import { useState } from 'react';

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
  const [filesNews, setFilesNews] = useState([]);
  const [files, setFiles] = useState([]);
  const [avatar, setAvatar] = useState([]);


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


  return {
    form,
    setForm,
    handleChange,
    handleBlur,
    handleKeyUp,
    handleMouseup,
    handleReset,
    setShowResOk,
    setShowResBad,
    setErrors,
    setFilesNews,
    setLoading,
    setAvatar,
    setResponseMsg,
    requirementValue,
    FormValidations,
    items,
    filesNews,
    avatar,
    setItems,
    setRequirementValue,
    loading,
    errors,
    showResOk,
    showResBad,
    responseMsg,
    files,
    setFiles
  }
}