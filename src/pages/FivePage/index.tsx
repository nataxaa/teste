"use client"
import { Container, SectionPage } from "./styles";
import image from '@/assets/five-image.png'
import icon from '@/assets/icon1-5.png'
import icon2 from '@/assets/icon2-5.png'
import icon3 from '@/assets/icon3-5.png'
import icon4 from '@/assets/icon4-5.png'
import boll from '@/assets/boll.png'

export function FivePage(){
    return(
        <Container>
            <img className="boll" src={boll.src} alt="" />
            <h1>Programa de Tratamento Integral</h1>
            <p>O sucesso do tratamento depende de etapas que são muito importantes</p>
            <SectionPage>
                <img src={image.src} alt="" />
                <ul>
                    <li>
                        <img src={icon.src} alt="" />
                        <div className="text-icon">
                            <p>Intensidade</p>
                            <span>
                                O primeiro passo para que um tratamento seja efetivo é a 
                                intensidade com a qual ele acontece. Quanto mais sessões 
                                são realizadas, mais rápido será o desenvolvimento da criança.
                            </span>
                        </div>
                    </li>
                    <li>
                        <img src={icon2.src} alt="" />
                        <div className="text-icon">
                            <p>Precocidade</p>
                            <span>
                                O diagnóstico precoce é extremamente importante para garantir o 
                                desenvolvimento da criança no TEA. Por isso, esse é, também, um dos 
                                passos essenciais no que diz respeito a um tratamento de sucesso.
                            </span>
                        </div>
                    </li>
                    <li>
                        <img src={icon3.src} alt="" />
                        <div className="text-icon">
                            <p>Adaptação e Desenvolvimento da Escola</p>
                            <span>
                                A escola é um dos ambientes mais importantes para o desenvolvimento, tanto 
                                de crianças com autismo ou não. É lá que elas passam a maior parte do tempo 
                                e tem possibilidades de interação que vão além do ambiente familiar/terapêutico.
                            </span>
                        </div>
                    </li>
                    <li>
                        <img src={icon4.src} alt="" />
                        <div className="text-icon">
                            <p>Capacitação dos Pais e Cuidadores</p>
                            <span>
                                Essa é uma das etapas mais importantes, que chamamos de capacitação parental. Mais do 
                                que qualquer coisa, é importante que os pais e cuidadores estejam empenhados no tratamento 
                                e consigam aplicar os aprendizados na terapia e também incentivar tudo aquilo que 
                                acontece na escola.
                            </span>
                        </div>
                    </li>
                </ul>
            </SectionPage>
        </Container>
    )
}