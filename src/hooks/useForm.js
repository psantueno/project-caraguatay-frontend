import { useState } from 'react';
import { validations } from '../components/helpers/validations';

/* 
Este hook recibe: 

1° valores iniciales.
2° validaciones de cualaquier formulario.
3° inputs para marcar errores en los components "form-control" o "inputs".

La funcion "FormValidation" recibe los datos del form, eventos, inputs y errores. Solo retorna errores.
*/


export const useForm = (initialForm = {}, FormValidations = {}, inputs={}, handleShow={}) => {

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = ({target}) => {
    const { name, value } = target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(FormValidations(form, e, inputs, errors));
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
    setForm(initialForm);                                     // className de todos los inputs evitando que queden en rojo o verde.
    for (let clave in inputs) {
      inputs[clave].current.className = "form-control";
    }
  }

  const handleSubmit = (e) => {
    handleChange(e);
    e.preventDefault();
    setErrors(FormValidations(form, e, inputs, errors));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      console.log(form);
      setShowMessage(true);
      setForm(initialForm);
      handleReset();

    } else {
      setShowMessage(false);
      alert("Revise los errores del formulario.");
      return;
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
    setShowMessage,
    setErrors,
    loading,
    errors,
    showMessage,
    ...form
  }
}