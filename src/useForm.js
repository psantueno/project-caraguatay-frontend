import { useState } from 'react';

// recibe por parámetro los valores iniciales del form y se setea en la variable de estado form + función validateForm
export const useForm = (initialForm, validateForm) => {
  const [ form, setForm ] = useState(initialForm);
  const [ errors, setErrors ] = useState({}); // almacena los errores
  const [ loading, setLoading ] = useState(false); 
  const [ response, setResponse ] = useState(null); 

  // const para Upload File
    const MAX_COUNT = 5;
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false);

  //Funciones para Upload File

  const handleUploadFiles = files => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
        if (uploaded.findIndex((f) => f.name === file.name) === -1) {
            uploaded.push(file);
            if (uploaded.length === MAX_COUNT) setFileLimit(true);
            if (uploaded.length > MAX_COUNT) {
                alert(`You can only add a maximum of ${MAX_COUNT} files`);
                setFileLimit(false);
                limitExceeded = true;
                return true;
            }
        }
    })
    if (!limitExceeded) setUploadedFiles(uploaded)

}

const handleFileEvent =  (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files)
    handleUploadFiles(chosenFiles);
}


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
    handleBlur,
    handleSubmit,
    handleCancel,
    uploadedFiles,
    fileLimit,
    handleUploadFiles,
    handleFileEvent,

 }


}

 
