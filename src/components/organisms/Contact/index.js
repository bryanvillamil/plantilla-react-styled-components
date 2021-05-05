import React, { useState } from 'react'

import imageContact from '../../../assets/HOME/img-form@2x.png'
import { ContenContact, ContactLeft, ContactRight, ContactDescription, Form } from './styledComponents'

const Contact = (props) => {

  const [ dataContact, setDataContact ] = useState({
    name: '',
    email: ''
  })

  const [ error, setError ] = useState({
    name: '',
    email: ''
  })

  const onChangeInput = (fieldName, e) => {
    const { value } = e.target;
    setDataContact({
      ...dataContact,
      [fieldName]: value,
    });
  };

  const onSubmitContact = (e) => {
    e.preventDefault();
    console.log('send', dataContact)
  }

  return (
    <ContenContact>
      <ContactLeft>
        <img src={imageContact} alt="img contact" />
      </ContactLeft>

      <ContactRight>
        <ContactDescription>¿Quieres estar informado de todos nuestros productos y promociones?</ContactDescription>
        <ContactDescription>Registra tu correo y te mantendremos al tanto de todas las novedades</ContactDescription>

        <Form onSubmit={onSubmitContact}>
          <div className="row">
            <input 
              name="name" 
              type="string"
              value={dataContact.name} 
              placeholder="Nombre" 
              onChange={e => {
                onChangeInput('name', e);
                setError({ ...error, name: '' });
              }}
            />
          </div>

          <div className="row">
            <input 
              name="email"
              type="email"
              value={dataContact.email} 
              placeholder="Correo electrónico" 
              onChange={e => {
                onChangeInput('email', e);
                setError({ ...error, email: '' });
              }}
            />
          </div>

          <div className="row">
            <button className="btnSubmit" type="submit">Enviar</button>
          </div>
        </Form>
      </ContactRight>
    </ContenContact>
  )
}

export default Contact;