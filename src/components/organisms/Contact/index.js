import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import ApiService from '../../../services/ApiServices'
import { toggleLoader } from '../../../redux/actions'

import Loading from '../../atoms/Loading'

import imageContact from '../../../assets/HOME/img-form@2x.png'
import { ContenContact, ContactLeft, ContactRight, ContactDescription, Form, SpanError } from './styledComponents'

const Contact = (props) => {
  const dispatch = useDispatch();
  const { 
    showLoader
  } = useSelector(
    (state) => ({
      showLoader: state.UI.showLoader
    }),
    shallowEqual
  )

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

    let isError = false;
    const errorCustom = {
      name: '',
      email: '',
    };

    for (const field in errorCustom) {
      if (!dataContact[field]) {
        isError = true;
        errorCustom[field] = `¡Error, debe llenar este campo!`;
      }
    }

    setError({ ...errorCustom });

    if (!isError) {
      dispatch(toggleLoader());
      const sendData = {
        name: dataContact.name,
        email: dataContact.email,
      }

      ApiService.sendDataUser(sendData).then((response) => {
        console.log('resp', response);
        dispatch(toggleLoader());
        if (response["Resultado"] === 2) {
          Swal.fire({
            title: '¡Envío Exitoso!',
            icon: 'success',
            confirmButtonColor: '#6A469E'
          })
          setDataContact({
            name: '',
            email: '',
          })
        } else {
          Swal.fire({
            title: '¡Error',
            icon: 'error',
            confirmButtonColor: '#6A469E'
          })
        }
      })
    }
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
            {showLoader ? <Loading /> : (
              <>
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
                  {error.name && (
                    <SpanError>{error.name}</SpanError>
                  )}
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
                  {error.email && (
                    <SpanError>{error.email}</SpanError>
                  )}
                </div>

                <div className="row">
                  <button className="btnSubmit" type="submit">Enviar</button>
                </div>
              </>
            )}
          </Form>
      </ContactRight>
    </ContenContact>
  )
}

export default Contact;