"use client"
import { ButtonLogin, ButtonRegister, Container } from "./styles";
import logo from '@/assets/logo-flimed.png'

export function Header(){
    return(
        <Container>
            <img src={logo.src} alt="" />
            <div className="button-area">
                <ButtonRegister onClick={()=>window.open('https://app.flimed.com.br/signup')}>CRIAR CONTA</ButtonRegister>
                <ButtonLogin onClick={()=>window.open('https://app.flimed.com.br/signin')}>LOGIN</ButtonLogin>
            </div>
        </Container>

    )
}