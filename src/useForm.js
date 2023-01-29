import { useState } from 'react';
import './Formulario.css'

// recibe por parámetro los valores iniciales del form y se setea en la variable de estado form + función validateForm
export const useForm = (initialForm, validateForm) => {
  const [ form, setForm ] = useState(initialForm);
  const [ errors, setErrors ] = useState({}); // almacena los errores
  const [ loading, setLoading ] = useState(false); 
  const [ response, setResponse ] = useState(null); 
  const [validated, setValidated] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  //Funciones que se ejecutan en el form

  const handleChange = (e) => {
  //  const {name, value} = e.target
    setForm({
        ...form,
        [e.target.name]:e.target.value,
        [e.target.files]:e.target.value
    })
  };

  const handleOnKeyUp = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
    setValidated(true);
  };

  const handleOnblur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
    setValidated(true);
  };
  //Funciones para subir imágenes

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
//fin funciones para manejo de imágenes
   
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setErrors(validateForm(form));

    if(Object.keys(errors).length === 0) {
      alert("Procesando envío de la publicación");
      setLoading(true); //para poner un loader y usar un fetch
      console.log(form)
      console.log(selectedImages);
      setSelectedImages([]);
      setForm(initialForm);
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
    handleOnKeyUp,
    handleOnblur,
    handleSubmit,
    handleCancel,
    validated,
    selectedImages,
    onSelectFile,
    deleteHandler
    
 }


}

 
