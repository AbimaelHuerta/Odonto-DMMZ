import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import avatar from '../../../Images/Mendoza.png'
const CustomWhatsAppButton = () => {
  return (
    <div>
      

      <FloatingWhatsApp
        phoneNumber="+522828291829"
        accountName='Mendoza odonto'
        statusMessage='Disponible'
        chatMessage='Hola, ¿En que podemos ayudarte?'
        avatar={avatar}     
      />
    </div>
  );
};

export default CustomWhatsAppButton;
