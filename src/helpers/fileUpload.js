import { cloudinaryUrl } from '../cloudinary/cloudinaryUrl';


export const fileUpload = async(file) => {

    const cloudUrl = cloudinaryUrl;

    const formData = new FormData();
    formData.append('upload_preset', 'journal-app');
    formData.append('file', file);
    

    try {

        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const cloudResponse = await response.json();
            return cloudResponse.secure_url;
        } else {
            throw await response.json();
        }
        
        
    } catch (error) {
        throw error;
    }

}