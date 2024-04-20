"use client"
import  Container  from "./styles";
import image from '@/assets/image-six-page.png'
import googleplay from '@/assets/google-play.png'
import appstore from '@/assets/app-store.png'

export default function SixPage(){
    return(
        <Container>
            <div className="text-title">
                <h1>Cabine de Teleconsulta</h1>
                <p>
                    As consultas online permitem que os pacientes recebam atendimento 
                    em um ambiente familiar e confortável, o que pode reduzir a 
                    ansiedade e melhorar a comunicação durante a consulta.
                </p>
                <h1 style={{marginTop:'4rem'}}>Aplicativo</h1>
                <p>
                    Através do nosso aplicativo é possível realizar as consultas de qualquer lugar
                </p>
                <div className="links-app">
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=br.com.flimed.paciente">
                        <img src={googleplay.src} alt="" />
                    </a>
                    <a target="_blank"  href="https://apps.apple.com/br/app/flimed-sa%C3%BAde/id1571800500">
                        <img src={appstore.src} alt="" />
                    </a>
                </div>
            </div>
            <img className="image" src={image.src} alt="" />

        </Container>
    )
}