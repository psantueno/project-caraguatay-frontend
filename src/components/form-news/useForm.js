import { useState } from 'react';
import './Formulario.css';

export const useForm = (initialForm = {}, validateForm = {}, handleShow) => {

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = ({ target }) => {

    const { name, value } = target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleFiles = (e) => {

    const { files } = e.target;
    setForm(prevState => {
      const newFiles = Array.from(files);
      return {
        ...prevState,
        files: prevState.files.concat(newFiles)
      };
    });
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
    setForm(prevForm => ({
      ...prevForm,
      files: prevForm.files.filter((_, i) => i !== index)
    }));
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      console.log(form);
      setShowMessage(true);
      setForm({
        ...initialForm,
        files: []
      });
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
    handleFiles,
    handleBlur,
    handleKeyUp,
    handleMouseup,
    handleDelete,
    handleSubmit,
    setShowMessage,
    loading,
    errors,
    showMessage,
    ...form
  }
}