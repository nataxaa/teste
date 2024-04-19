"use client"

import Link from "next/link"
import { Content, FooterContainer, Item, ItemsContainer, SectionContainer, SectionFooter, WhatsppFlutuante } from "./styles"
import { Networks } from "../NetWork"

export function Footer(){
    return(
        <FooterContainer>
        <Content>
          <SectionContainer>
            <SectionFooter>
              <h5>Flimed</h5>
              <ItemsContainer>
                <Item>
                  <Link href="https://flimed.com.br/quemsomos">Quem somos</Link>
                </Item>
              </ItemsContainer>
            </SectionFooter>
            <SectionFooter>
              <h5>Para você</h5>
              <ItemsContainer>
                <Item>
                 <Link href='https://flimed.com.br/quemsomos'>Funcionalidades</Link> 
                </Item>
                <Item>
                  <Link href='/'>Planos e Preços</Link>
                </Item>
                <Item>
                  <Link href="https://app.flimed.com.br/signin">Entrar na Flimed</Link>
                </Item>
              </ItemsContainer>
            </SectionFooter>
            {/* 
            <SectionFooter>
              <h5>Educacionais</h5>
              <ItemsContainer>
                <Item>
                  Cursos Flimed
                  <Badge>Breve</Badge>
                </Item>
                <Item>
                  <Link href="https://blog.flimed.com.br/">Nosso Blog</Link>
                </Item>
                <Item>
                  Podcast
                  <Badge>Breve</Badge>
                </Item>
                <Item>
                  Materiais educativos
                  <Badge>Breve</Badge>
                </Item>
                <Item>
                  Casos de Sucesso
                  <Badge>Breve</Badge>
                </Item>
              </ItemsContainer>
            </SectionFooter>
            */}
            <SectionFooter>
              <h5>Central de ajuda</h5>
              <ItemsContainer>
                <Item>
                 <Link href='https://flimed.com.br/contato'>Suporte</Link>
                </Item>
                <Item>
                  <Link href="https://flimed.com.br/termos">Termos de uso</Link>
                </Item>
                <Item>
                  <Link href="https://flimed.com.br/termos">Politica de privacidade</Link>
                </Item>
                <Item>
                  <Link href="https://flimed.com.br/alertadepagamento">Alerta de pagamento</Link>
                </Item>
                <Item>
                  <Link href="https://flimed.com.br/lgpd">LGPD</Link>
                </Item>
              </ItemsContainer>
            </SectionFooter>
            <Networks />
          </SectionContainer>
          <div className="logo-container">
            <img src="../LogoBranca.svg" alt="" />
            <div className="bar" />
            <Link target="_blank" href="http://iccbiolabs.com/">
              <img src="/logoiccbiolabs.png" />
            </Link>
          </div>
          <div className="copy">
            <p>Copyright ©2021 Flimed Saúde. Todos os direitos reservados</p>
          </div>
        </Content>
        <WhatsppFlutuante>
          <a href="https://api.whatsapp.com/send?phone=5585997042671&text=Ol%C3%A1!%20Estou%20interessado%20em%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20sistema%20Flimed" target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>
        </WhatsppFlutuante>
      </FooterContainer>
    )
}