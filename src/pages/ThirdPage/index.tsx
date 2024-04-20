"use client"
import { ItemsThirdPage } from "./styles";
import icon from '@/assets/image-items-1.png'
import icon2 from '@/assets/image-items-2.png'
import icon3 from '@/assets/image-items-3.png'
import image from '@/assets/image-third-page.png'
import side from '@/assets/side-3.png'
import Container from "./styles";

export default function ThirdPage(){

    

    return(
        <Container>
            <img className="side" src={side.src} alt="" />
            <img className="image" src={image.src} alt="" />
            <div>
            <div className="text-title">
                <h1>Sinais do Autismo</h1>
                <p>Compreender os sinais precoces ajuda a saber como agir com informação e sensibilidade</p>
            </div>
            <div className="area-items">
                <ItemsThirdPage>
                    <img src={icon.src} alt="" />
                    <span>Dificuldades de Interação Social</span>
                </ItemsThirdPage>
                <ItemsThirdPage>
                    <img src={icon2.src} alt="" />
                    <span>Dificuldades de Interação Social</span>
                </ItemsThirdPage>
                <ItemsThirdPage>
                    <img src={icon3.src} alt="" />
                    <span>Dificuldades de Interação Social</span>
                </ItemsThirdPage>
            </div>
            </div>
        </Container>
    )
}