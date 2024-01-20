export const UserValidations = (form, e, inputs, errors) => {
  const { email, name, lastName, password, role } = inputs;

  if (e && (e.target.name === "name" || e.type === 'submit')) {
    if (!form.name.trim()) {
      errors.name = "El nombre es requerido.";
      name.current.className = "form-control is-invalid";
    } else if (form.name.trim().length < 3) {
      errors.name = "El nombre debe tener al menos 3 caracteres.";
      name.current.className = "form-control is-invalid";
    } else {
      delete errors.name;
      name.current.className = "form-control is-valid";
    }
  }

  if (e && (e.target.name === "lastName" || e.type === 'submit')) {
    if (!form.lastName.trim()) {
      errors.lastName = "El apellido es requerido.";
      lastName.current.className = "form-control is-invalid";
    } else if (form.lastName.trim().length < 3) {
      errors.lastName = "El apellido debe tener al menos 3 caracteres.";
      lastName.current.className = "form-control is-invalid";
    } else {
      delete errors.lastName;
      lastName.current.className = "form-control is-valid";
    }
  }

  if (e) {
    if (e.target.name === "role" || e.type === 'submit') {
      if (form.role === "default") {
        role.current.className = "form-control is-invalid";
        errors.role = 'Seleccione un rol.'
      } else {
        delete errors.role;
        role.current.className = "form-control is-valid";
      }
    }

    if (e.target.name === "email" || e.type === 'submit') {
      const regEx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

      if (!form.email.trim()) {
        email.current.className = "form-control is-invalid";
        errors.email = "La dirección email es requerida.";
      } else if (!regEx.test(form.email.trim())) {
        email.current.className = "form-control is-invalid";
        errors.email = "Ingrese un formato de email válido.";
      } else {
        delete errors.email;
        email.current.className = "form-control is-valid";
      }
    }

    if (e.target.name === "password" || e.type === 'submit') {
      const regEx = new RegExp(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/)

      if (!form.password.trim()) {
        password.current.className = "form-control is-invalid";
        errors.password = "La contraseña es requerida.";
      } else if (!regEx.test(form.password.trim())) {
        password.current.className = "form-control is-invalid";
        errors.password = "La contraseña requiere al menos 6 caracteres, incluyendo una mayúscula, una minúscula, un número y un caracter especial.";
      } else {
        delete errors.password;
        password.current.className = "form-control is-valid";
      }
    }
  }

  return errors;
}