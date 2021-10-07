import React from 'react'
import {Header} from '../Header'
import {Menu} from '../Menu'
import { MenuCategories } from '../MenuCategories'


import  { Container}  from "./styles"

export function Main() {
  
  
  return (
  <Container>
          <Header/>
          <Menu/>
          <MenuCategories/>

      </Container>
)
}

