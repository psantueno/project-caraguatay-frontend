import { fileUpload } from '../../../helpers/fileUpload';

export const uploadImages = async (files) => {

    const folder = "noticias";                               // apunta al presets "noticias" de cloudinary.
    const fileUploadPromises = [];

    for (const file of files) {                              // files viene del "estado files" en linea 26.
        fileUploadPromises.push(fileUpload(file, folder))
    }

    const photosUrls = await Promise.all(fileUploadPromises);   // proceso para obtener las urls de las imagenes subidas. 
    const imagesToString = photosUrls.join(', ');               // proceso para convertir el array en strings separados por ", ".

    return imagesToString;
}