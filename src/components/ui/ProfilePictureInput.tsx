import React, { ChangeEvent, useRef } from 'react';

interface ProfilePictureInputProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ProfilePictureInput: React.FC<ProfilePictureInputProps> = ({ onChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div>
            <button className='button-config p-2 rounded mx-2' type="button"
             onClick={handleButtonClick}>
                Alterar Foto de Perfil
            </button>
            
            <input 
                type="file" 
                accept="image/*" 
                onChange={onChange} 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
            />
        </div>
    );
};

export default ProfilePictureInput;
