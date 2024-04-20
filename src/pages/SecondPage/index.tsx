"use client"

import icon1 from '@/assets/icon1.png'
import icon2 from '@/assets/icon2.png'
import icon3 from '@/assets/icon3.png'
import image from '@/assets/image-second-page.png'
import elipse from '@/assets/Ellipse.png'
import Container, { Items } from './styles'
 
export default function SecondPage(){

    return(
        <Container>
            <img className="elipse" src={elipse.src} alt="" />
            <div style={{display:'flex', flexDirection:'column'}}>

            <div className="title-text-area">
                <h1>Tratamento além da Consulta</h1>
                <p>
                    Nosso objetivo é oferecer suporte para que pacientes 
                    e seus cuidadores enfrentem os desafios frequentes
                </p>
            </div>
            <div className="area-items">
                <Items colorBackground="rgba(242, 239, 252, 1)" colorText="rgba(76, 54, 152, 1)">
                    <img src={icon1.src} alt="" />
                    <span>Avaliação Integral​</span>
                    <p>Avaliação abrangente da criança e dos pais para entender suas necessidades e desafios específicos.</p>
                </Items>

                <Items colorBackground="rgba(255, 245, 232, 1)" colorText="rgba(255, 155, 25, 1)">
                    <img src={icon2.src} alt="" />
                    <span>Atendimento Online​</span>
                    <p>Diagnóstico e tratamento realizados por especialistas, sem a necessidade de deslocamento para consultas presenciais.</p>
                </Items>

                <Items colorBackground="rgba(230, 253, 248, 1)" colorText="rgba(1, 186, 145, 1)">
                    <img src={icon3.src} alt="" />
                    <span>Orientação Parental​</span>
                    <p>Uma jornada de apoio e aprendizado para construir lares mais felizes e saudáveis.</p>
                </Items>
            </div>
            </div>
            <img className="image-second-page" src={image.src} alt="" />
        </Container>
    )
}