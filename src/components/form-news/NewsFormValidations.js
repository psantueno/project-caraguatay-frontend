import dayjs from "dayjs";

export const NewsFormValidations = (form, e, inputs, errors) => {

    const { category, title, mainText, date } = inputs;

    if (e) {

      // if (e.target.name === "category" || e.type === 'submit') {
      //   if (form.category === "default") {
      //     category.current.className = "form-control is-invalid";
      //     errors.category = 'La categoría es requerida.'
      //   } else {
      //     delete errors.category;
      //     category.current.className = "form-control is-valid";
      //   }
      // }

      // if (e.target.name === "title" || e.type === 'submit') {
      //   if (!form.title.trim()) {
      //     errors.title = "El título es requerido.";
      //     title.current.className = "form-control is-invalid";
      //   } else if (form.title.trim().length < 3) {
      //     errors.title = "El título debe tener al menos 3 caracteres.";
      //     title.current.className = "form-control is-invalid";
      //   } else {
      //     delete errors.title;
      //     title.current.className = "form-control is-valid";
      //   }
      // }

      // if (e.target.name === "mainText" || e.type === 'submit') {
      //   if (!form.mainText.trim()) {
      //     errors.mainText = "El texto de la publicación es requerido.";
      //     mainText.current.className = "form-control is-invalid";
      //   } else if (form.mainText.trim().length < 100) {
      //     errors.mainText = "El texto de la publicación debe tener al menos 100 caracteres.";
      //     mainText.current.className = "form-control is-invalid";
      //   } else {
      //     delete errors.mainText;
      //     mainText.current.className = "form-control is-valid";
      //   }
      // }

      // if (e.target.name === "date" || e.type === 'submit') {
      //   if ((form.date === dayjs().format("YYYY-MM-DD")) || (form.date > dayjs().format("YYYY-MM-DD"))) {
      //     date.current.className = "form-control is-valid";
      //     delete errors.date;
      //   } else {
      //     date.current.className = "form-control is-invalid";
      //     errors.date = "Ingrese una fecha válida"
      //   }
      // }
    }
    return errors;
  }