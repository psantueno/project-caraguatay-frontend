

export const fileUpload = async ( file, folder ) => {
    if ( !file ) throw new Error('No tenemos ningúna archivo a subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/caraguatay/image/upload';

    const formData = new FormData();
    formData.append('upload_preset', folder); //carpeta en la que se guarda la imagen en cloudinary
    formData.append('file', file );

    try {
 
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });


        if ( !resp.ok ) throw new Error('No se pudo subir imagen');
        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }

}