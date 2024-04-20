"use client"

import icon from '@/assets/aspas.png'
import star from '@/assets/star.png'
import Container, { ItemsComments } from './styles'


export default function EightPage(){

   

    return(
        <Container>
            <h1>Retratos do Autismo</h1>
            <p>
                Estima-se que o Brasil possua cerca de 
                2 milhões de autistas
            </p>
            <div className="area-items">
                <ItemsComments>
                    <img className="icon" src={icon.src} alt="" />
                    <p>
                        Muitas famílias enfrentam dificuldades para acessar serviços de saúde, 
                        educação e terapia especializados para atender às necessidades específicas 
                        de seus filhos com autismo.
                    </p>
                    <img src={star.src} alt="" />
                </ItemsComments>
                <ItemsComments>
                    <img className="icon" src={icon.src} alt="" />
                    <p>
                        Muitas famílias enfrentam dificuldades para acessar serviços de saúde, 
                        educação e terapia especializados para atender às necessidades específicas 
                        de seus filhos com autismo.
                    </p>
                    <img src={star.src} alt="" />
                </ItemsComments>
                <ItemsComments>
                    <img className="icon" src={icon.src} alt="" />
                    <p>
                        Muitas famílias enfrentam dificuldades para acessar serviços de saúde, 
                        educação e terapia especializados para atender às necessidades específicas 
                        de seus filhos com autismo.
                    </p>
                    <img src={star.src} alt="" />
                </ItemsComments>
            </div>
        </Container>
    )
}