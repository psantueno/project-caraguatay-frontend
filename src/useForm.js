import { useState } from 'react';

// recibe por parámetro los valores iniciales del form y se setea en la variable de estado form + función validateForm
export const useForm = (initialForm, validateForm) => {
  const [ form, setForm ] = useState(initialForm);
  const [ errors, setErrors ] = useState({}); // almacena los errores
  const [ loading, setLoading ] = useState(false); 
  const [ response, setResponse ] = useState(null); 


  //Funciones que se ejecutan en el form

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({
        ...form,
        [name]:value
    })
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if(Object.keys(errors).length === 0) {
      alert("Procesando envío de la publicación");
      setLoading(true); //para poner un loader y usar un fetch
      console.log(form)
    }else {
      return;
    }
  };

  const handleCancel = (e) => {
    setForm(initialForm);
    
  };

 return {
    form, 
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCancel
 }


}

 
