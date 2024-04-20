"use client"

import image from '@/assets/image4.png'
import icon from '@/assets/icon-4.png'
import icon2 from '@/assets/icon2-4.png'
import icon3 from '@/assets/icon3-4.png'
import Container, { Items } from './styles'


export default function FourthPage(){

    return(
        <Container>
            <div className="text-area">
                <h1>Benefícios da Teleconsulta</h1>
                <p className="text-p">
                    As consultas online permitem que os pacientes recebam atendimento em um ambiente 
                    familiar e confortável, o que pode reduzir a ansiedade e melhorar a comunicação 
                    durante a consulta.
                </p>
                <div className="area-icons">
                    <Items color="rgba(56, 29, 152, 1)" colorBackground="rgba(247, 247, 255, 1)">
                        <img src={icon.src} alt="" />
                        <p>Continuidade do Cuidado</p>
                        <span>
                            Possibilita que os pacientes mantenham contato regular 
                            com seus profissionais de saúde sem interrupções, mesmo 
                            em situações como pandemias ou restrições de mobilidade.
                        </span>
                    </Items>
                    <Items color="rgba(154, 87, 0, 1)" colorBackground="rgba(255, 245, 232, 1)">
                        <img src={icon2.src} alt="" />
                        <p>Continuidade do Cuidado</p>
                        <span>
                            Possibilita que os pacientes mantenham contato regular 
                            com seus profissionais de saúde sem interrupções, mesmo 
                            em situações como pandemias ou restrições de mobilidade.
                        </span>
                    </Items>
                    <Items color="rgba(1, 91, 71, 1)" colorBackground="rgba(230, 253, 248, 1)">
                        <img src={icon3.src} alt="" />
                        <p>Continuidade do Cuidado</p>
                        <span>
                            Possibilita que os pacientes mantenham contato regular 
                            com seus profissionais de saúde sem interrupções, mesmo 
                            em situações como pandemias ou restrições de mobilidade.
                        </span>
                    </Items>
                </div>
            </div>
            <img className="image" src={image.src} alt="" />
        </Container>
    )
}