import { useState } from 'react';
import './Formulario.css'

export const useForm = (initialForm = {}, validateForm = {}) => {

  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState([]); // almacena los archivos seleccionados.
  const [errors, setErrors] = useState({}); // almacena los errores
  const [loading, setLoading] = useState(false);


  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files));
    setErrors(validateForm(form, e));
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form, e));
  };

  const handleKeyUp = (e) => {
    handleChange(e);
    setErrors(validateForm(form, e));
  }

  const handleMouseup = (e) => {
    handleChange(e);
    setErrors(validateForm(form, e));
  }

  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }

  const handleCancel = () => {
    setForm(initialForm);
  };

  const handleSubmit = (e) => {
    handleChange(e);
    e.preventDefault();
    setErrors(validateForm(form));


    if (files.length === 0 || files.length > 10) {
      alert(`Cantidad mínima de archivos: 1 (uno). Seleccionados: ${files.length}`);
      return;

    } else {
      if (Object.keys(errors).length === 0) {
        alert("Procesando envío de la publicación");
        setLoading(true); //para poner un loader y usar un fetch
        console.log(form)
        console.log(files);
        setFiles([]);
        setForm(initialForm);
      } else {
        alert("Revise los errores del formulario.");
        return;
      }
    }
  }

  return {
    ...form,
    form,
    handleChange,
    handleFiles,
    handleBlur,
    handleKeyUp,
    handleMouseup,
    handleDelete,
    handleCancel,
    handleSubmit,
    files,
    loading,
    errors
  }
}