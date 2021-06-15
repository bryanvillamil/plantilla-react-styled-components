import React from 'react'
import Icon from '../../atoms/Icons'
import boxWhite from '../../../assets/cuadro-blanco.svg';
import logoMetro from '../../../assets/logoMetro.svg';
import iconLocation from '../../../assets/location.svg';
import { ContentModal, ModalClose, ModalBox, ModalType1, ModalType2, IconLocation } from './styledComponents'

const ModalHeader = ({ setOpenModalHeader, openModalHeader }) => {
  return (
    <ContentModal>
      <ModalClose onClick={() => setOpenModalHeader({ open: false })}>
        <Icon iconName="close" height={30} width={30} backgroundColor="#fff" />
      </ModalClose>
      

      <ModalBox bg={openModalHeader.type !== 1 && boxWhite }>
        {openModalHeader.type === 1 ? (
          <ModalType1>
            <h2>Cobertura Nacional</h2>
            <a href="https://www.metro.pe/busca/?ft=peque%C3%B1%C3%ADn" target="_blank" rel="noreferrer">
              <img src={logoMetro} alt="logo metro" />
            </a>
          </ModalType1>
        ) : (
          <>
            <IconLocation>
              <img src={iconLocation} alt="icon location" />
            </IconLocation>
            <ModalType2>
              <h2>¡Encuéntranos!</h2>

              <div className="box">
                <h3>Supermercados: </h3>
                <p>
                  Metro
                </p>
              </div>

              <div className="box">
                <h3>Farmacias: </h3>
                <p>
                  Boticas Peru, Farmacias Universal, América y Salud, Otifarma y otras farmacias.
                </p>
              </div>

              <div className="box">
                <h3>Otros Lugares: </h3>
                <p>
                  Freshmart, Juntoz, Mercado Libre.
                </p>
              </div>

              <div className="box">
                <h3>Mercados y Mayoristas </h3>
              </div>
            </ModalType2>
          </>
        )}
      </ModalBox>
    </ContentModal>
  )
};

export default ModalHeader;