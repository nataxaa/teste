"use client"

import { Container, ItemDoctor } from "./styles"
import image from '@/assets/doctor-image.png'

export function SevenPage(){
    return(
        <Container>
           <h1>Profissionais Altamente Capacitados</h1>
           <p style={{marginBottom:'60px'}}>
              Nossos especialistas estão comprometidos 
              com o desenvolvimento das crianças com autismo.
           </p>
            <div className="area-items">
                <ItemDoctor>
                    <img src={image.src} alt="" />
                    <p style={{fontWeight:"bold"}}>Julian Jameson</p>
                    <span>Cardiologista</span>
                    <button>Agendar</button>
                </ItemDoctor>
                <ItemDoctor>
                    <img src={image.src} alt="" />
                    <p style={{fontWeight:"bold"}}>Julian Jameson</p>
                    <span>Cardiologista</span>
                    <button>Agendar</button>
                </ItemDoctor>
                <ItemDoctor>
                    <img src={image.src} alt="" />
                    <p style={{fontWeight:"bold"}}>Julian Jameson</p>
                    <span>Cardiologista</span>
                    <button>Agendar</button>
                </ItemDoctor>
                <ItemDoctor>
                    <img src={image.src} alt="" />
                    <p style={{fontWeight:"bold"}}>Julian Jameson</p>
                    <span>Cardiologista</span>
                    <button>Agendar</button>
                </ItemDoctor>
            </div>
        </Container>
    )
}