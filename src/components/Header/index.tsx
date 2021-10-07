import React from 'react'
import logo from '../../assets/logo.png'



import  { 
  Container, 
  Headerz,
  Login,
  Actions1,
  Actions2,
  Actions3
}  from "./styles"

export function Header() {
  return (
      <Container>
        <Headerz>
            <img src={logo} alt="logo" />
            <input  type="text" placeholder="busque aqui seu produto" name="name" ></input>
             <Login></Login>
             <Actions1/>
             <Actions2/>
             <Actions3/>

        </Headerz>
      </Container>
)
}

