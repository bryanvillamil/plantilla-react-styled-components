import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import ApiService from '../../../services/ApiServices'
import { toggleLoader } from '../../../redux/actions'

import Loading from '../../atoms/Loading'

import imageContact from '../../../assets/HOME/img-form@2x.png'
import { ContenContact, ContactLeft, ContactRight, ContactDescription, Form, SpanError, BoxTermsCheck } from './styledComponents'

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
    email: '',
    celular: '',
    term: false,
  })

  const [ error, setError ] = useState({
    name: '',
    email: '',
    term: false,
  })

  const onChangeInput = (fieldName, e) => {
    const { value } = e.target;
    let regex = new RegExp("^[a-zA-Z ]+$");

    if (fieldName === 'name') {
      if (!regex.test(value)) {
        setError({ ...error, name: 'Debe ingresar solo letras' })
      } else {
        setError({...error, name: '' })
      }
    }

    setDataContact({
      ...dataContact,
      [fieldName]: value,
    });
  };

  const onCheckboxChange = (e, isChecked) => {
    setDataContact({
      ...dataContact,
      [e]: isChecked.target.checked,
    });
  };

  const onSubmitContact = (e) => {
    e.preventDefault();

    let isError = false;
    const errorCustom = {
      name: '',
      email: '',
      term: '',
    };

    for (const field in errorCustom) {
      if (!dataContact[field]) {
        isError = true;
        errorCustom[field] = `¡Debes llenar este campo!`;
      }
    }

    let regex = new RegExp("^[a-zA-Z]+$");

    if (!regex.test(dataContact.name)) {
      isError = true;
      errorCustom.name = '¡Debes ingresar solo letras!';
    }

    if (!dataContact.term) {
      isError = true;
      errorCustom.term = '¡Haz clic en el cuadro si autorizas el tratamiento de tus datos!';
    }
    console.log(dataContact)

    setError({ ...errorCustom });

    if (!isError) {
      dispatch(toggleLoader());
      const sendData = {
        name: dataContact.name,
        email: dataContact.email,
        celular: dataContact.celular,
        term: dataContact.term,
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
            title: response["Errores"][0],
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
                    type="text"
                    value={dataContact.name} 
                    placeholder="Nombre"
                    onChange={e => {
                      onChangeInput('name', e);
                      // setError({ ...error, name: '' });
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
                  <input 
                    name="celular" 
                    type="number"
                    value={dataContact.celular} 
                    placeholder="Celular"
                    onChange={e => {
                      onChangeInput('celular', e);
                    }}
                  />
                </div>
                
                <div className="row">
                  <BoxTermsCheck>
                    <div className="check">
                      <input
                      type="checkbox" 
                      checked={dataContact.term}
                      name="term"
                      onChange={e => {
                        onCheckboxChange('term', e);
                        setError({ ...error, term: '' });
                      }}
                    />
                      <label>He leído y autorizo tratamiento de datos</label>

                      {error.term && (
                        <span className="error--term">{error.term}</span>
                      )}
                    </div>

                    <div className="text">
                      <span>Autorización de datos personales:</span>

                      <p>Mediante el registro de mis datos personales en este medio autorizo a Productos Familia S.A y Productos
                        Sancela del Perú S.A. para la recolección, almacenamiento y uso de los mismos con la finalidad de
                        contactarme mediante aplicaciones de mensajería instantánea (Whatsapp o similares),  redes sociales,
                        correo electrónico o correo físico para ofrecer servicios de valor agregado; participar en programas de
                        beneficios y fidelización; consultar hábitos de consumo y aficiones para ofertas, promociones, servicios,
                        entre otros; contactarlo para realizar estudios de mercado y encuestas de satisfacción; gestionar tramites
                        (solicitudes, quejas y reclamos), envío de productos o premios, participación en actividad y concursos.
                      </p>

                      <p>
                        Autorizo a la Compañía para que, con base en las regulaciones de transferencia nacional e internacional
                        de datos, remita a otras filiales de Grupo Familia o terceros, en caso de ser necesario, la información
                        personal objeto de este tratamiento para llevar a cabo las finalidades enunciadas en los términos de la
                        política de protección de datos personales, en donde se establecen los principios para el manejo de mis
                        datos personales. la cual podré consultar la web página 
                        <a href="https://www.grupofamilia.com.co/es/DTLCentroDocumentos/PoliticaProteccionDatosPersonales2020.pdf" target="_blank" rel="noreferrer">
                          https://www.grupofamilia.com.co/es/DTLCentroDocumentos/PoliticaProteccionDatosPersonales2020.pdf  
                        </a>
                      </p>

                      <p>
                        Autorizo el tratamiento de mis datos personales por el tiempo necesario para cumplir con las finalidades propuestas.
                      </p>

                      <p>Como titular de mi información, tengo derecho a conocer, actualizar, corregir, suprimir y revocar mis
                        datos personales, en los términos señalados en la política de tratamiento y protección de datos
                        personales de Productos Familia S.A, a través de los medios dispuestos, tales como: correo electrónico
                        XXX, además de la página web anteriormente indicada.
                      </p>
                    </div>
                  </BoxTermsCheck>
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