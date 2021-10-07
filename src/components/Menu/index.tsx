import React from 'react'
import iconCEP from '../../assets/iconCEP.svg'
import  { Container, Menuz}  from "./styles"

export function Menu() {
  
  
  return (
  
    <Container>
          <Menuz>
             <img src={iconCEP} alt="logo" />
              <h4>informe seu CEP</h4>
              <a href="#">para empresas</a>
              <a href="#">vote na gente</a>
              <a href="#">baixe o app</a>
              <a href="#">receba hoje</a>
              <a href="#">produtos internacionais</a>
              <a href="#">marcas próprias</a>
              <a href="#">americanas social</a>
              <a href="#">$ oferta do dia</a>
          </Menuz>
      </Container>
)
}

