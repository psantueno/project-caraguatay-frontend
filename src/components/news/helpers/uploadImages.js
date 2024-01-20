import { fileUpload } from '../../../helpers/fileUpload';

export const uploadImages = async (files) => {

    const folder = "noticias";                               // apunta al presets "noticias" de cloudinary.
    const fileUploadPromises = [];
    const errors = [];
    let shouldContinue = true;

    for (const file of files) {                  // files viene del "estado files" en linea 26.

         // Check if the file size is greater than 2MB (in bytes)
         const maxSize = 2 * 1024 * 1024; // 2MB in bytes
         if (file.size > maxSize) {
             errors.push({
                 success: false,
                 msg: `El tamaño del archivo "${file.name}" excede el límite de 2MB.`,
             });
             shouldContinue = false;
             break; // Stop processing further files if one exceeds the size limit
         }
         
        if (!shouldContinue) break;              // Si shouldContinue es falso, detiene la iteración.                                         
                                   
        const response = await fileUpload(file, folder);

        if (response.success === false) {
            errors.push(response);
            shouldContinue = false;              // Establece shouldContinue en falso para detener la carga de imágenes.
        } else {
            fileUploadPromises.push(response);
        }
    }
    
    if (errors.length > 0) {
        const errorsArray = {
            errors
          };
        return errorsArray;
    }

    const photosUrls = await Promise.all(fileUploadPromises);   // proceso para obtener las urls de las imagenes subidas. 
    const imagesToString = photosUrls.join(', ');               // proceso para convertir el array en strings separados por ", ".

    return imagesToString;
}

// fileUploadPromises.push(fileUpload(file, folder)) esto reemplza las lineas9 a 14