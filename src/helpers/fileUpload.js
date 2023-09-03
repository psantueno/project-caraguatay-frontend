

export const fileUpload = async ( file, folder ) => {
    if ( !file ) throw new Error('No tenemos ningún archivo a subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/caraguatay/image/upload';

    const formData = new FormData();
    formData.append('upload_preset', folder); //carpeta en la que se guarda la imagen en cloudinary
    formData.append('file', file );

    try {
 
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });


        if ( !resp.ok ) {  
            console.log(resp);   
            console.error('Error al subir la imagen:', resp.status, resp.statusText);
            const errorsArray = { success: false, msg: 'Hubo un problema al subir una o más imagenes. Por favor vuelva a intentarlo.' }
            return errorsArray;
        } 
            
        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }

}