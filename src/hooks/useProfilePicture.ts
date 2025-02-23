import { ChangeEvent, useState } from 'react';

const useProfilePicture = () => {
    const [picture, setPicture] = useState<File | null>(null);
    const [pictureBase64, setPictureBase64] = useState<string | null>(null); // atualizando o objeto usuario no contexto AuthContext com a nova string base64.

    const handlePictureChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setPicture(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPictureBase64(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return { picture, handlePictureChange, pictureBase64 };
};

export default useProfilePicture;
