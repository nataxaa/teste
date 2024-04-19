"use client"
import { ButtonLogin, ButtonRegister } from "@/components/Header/styles"
import { Container } from "./styles"
import image from '@/assets/Foto_familia.png'
import icon from '@/assets/aspas-1.png'

export function FirstPage(){
    
    const mobile = window.innerWidth

    return(
        <Container>
            <div className="area-text">
                <h1>Programa de Cuidado e Apoio a Crianças Autistas e suas Famílias</h1>
                <p>
                   Somos uma plataforma dedicada ao cuidado de saúde e desenvolvimento 
                   de crianças autistas e suas famílias, oferecendo serviços acessíveis 
                   e de qualidade por meio de teleconsultas
                </p>
                <div className="button-area">
                    <ButtonRegister>CRIAR CONTA</ButtonRegister>
                    <ButtonLogin>LOGIN</ButtonLogin>
                </div>
            </div>
            {mobile > 700 && (
                <img src={image.src} alt="Imagem de um homem e uma mulher, com o homem segurando um bebe, formando uma familia feliz" />
            )}
        </Container>
    )
}