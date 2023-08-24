export const  LoginValidations = (form, e, inputs, errors) => {

    const { email, password } = inputs;

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
              errors.password = "Revise la contraseña.";
            } else {
              delete errors.password;
              password.current.className = "form-control is-valid";
            }
          }

    return errors;
}