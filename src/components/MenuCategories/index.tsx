import React from 'react'
import hamburguer from '../../assets/hamburguer.svg'
import  { Container, Menuc}  from "./styles"

export function MenuCategories() {
  
  
  return (
  
    <Container>
          <Menuc>
             <img src={hamburguer} alt="menuhamburguer" />
              <h4>compre por departamento</h4>
              <a href="#">mercado</a>
              <a href="#">dia das crianças</a>
              <a href="#">celulares</a>
              <a href="#">tv e home theater</a>
              <a href="#">eletrodomésticos</a>
              <a href="#">notebook</a>
              <a href="#">beleza e perfumaria</a>
              <a href="#">móveis e decoração</a>

          </Menuc>
      </Container>
)
}

