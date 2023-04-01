import dayjs from "dayjs";


export const DpValidations = (form, e, inputs, errors) => {

    const { category, title, description, start, status } = inputs;

    if (e) {


        if (e.target.name === "category" || e.type === 'submit') {
            if (form.category === "default") {
                category.current.className = "form-control is-invalid";
                errors.category = 'La categoría es requerida.'
            } else {
                delete errors.category;
                category.current.className = "form-control is-valid";
            }
        }


        if (e.target.name === "status" || e.type === 'submit') {
            if (form.status === "default") {
                status.current.className = "form-control is-invalid";
                errors.status = 'El estado de las inscripciones es requerido.'
            } else {
                delete errors.status;
                status.current.className = "form-control is-valid";
            }
        }


        if (e.target.name === "title" || e.type === 'submit') {
            if (!form.title.trim()) {
                errors.title = "El título es requerido.";
                title.current.className = "form-control is-invalid";
            } else if (form.title.trim().length < 3) {
                errors.title = "El título debe tener al menos 3 caracteres.";
                title.current.className = "form-control is-invalid";
            } else if (form.title.trim().length > 50) {
                errors.title = "Máximo permitido: 50 caracteres.";
                title.current.className = "form-control is-invalid";
            } else {
                delete errors.title;
                title.current.className = "form-control is-valid";
            }
        }


        if (e.target.name === "description" || e.type === 'submit') {
            if (!form.description.trim()) {
                errors.description = "El texto de la publicación es requerido.";
                description.current.className = "form-control is-invalid";
            } else if (form.description.trim().length < 10) {
                errors.description = "El texto de la publicación debe tener al menos 10 caracteres.";
                description.current.className = "form-control is-invalid";
            } else if (form.description.trim().length > 130) {
                errors.description = "Máximo permitido: 130 caracteres.";
                description.current.className = "form-control is-invalid";
            } else {
                delete errors.description;
                description.current.className = "form-control is-valid";
            }
        }


        if (e.target.name === "start" || e.type === 'submit') {
            if ((form.start === dayjs().format("YYYY-MM-DD")) || (form.start > dayjs().format("YYYY-MM-DD"))) {
                start.current.className = "form-control is-valid";
                delete errors.start;
            } else {
                start.current.className = "form-control is-invalid";
                errors.start = "Ingrese una fecha válida"
            }
        }

    }

    return errors;
}
