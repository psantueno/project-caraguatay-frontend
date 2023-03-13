  const validarTamaño = (value, length) => {
    return value.trim().length < length ? false : true;
  };
  const validarTexto = (value) => {
    const regEx = new RegExp("\\W")
    return regEx.test(value)?true:false;
  };
  const validarNumero = (value) => {
    const regEx = new RegExp('\\d')
    return regEx.test(value)?true:false;
  };

  const validarEmail = (value) => {
    const regEx = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")
    return regEx.test(value)?true:false;
  };

  const validarPassword = (value) => {
    const regEx = new RegExp(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/)
    return regEx.test(value)?true:false

  };
  
  export const validations = {
    validarTamaño,
    validarTexto,
    validarNumero,
    validarEmail,
    validarPassword,
  };
