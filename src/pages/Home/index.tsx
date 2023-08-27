import { Cards, Catalog, HomeContainer, InfoItem, Infos, IntroContainer, Subtitle, Title } from './styles'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeImg from '../../assets/CoffeeImg.png'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <div>
          <Title>
            Encontre o café perfeito para qualquer hora do dia
          </Title>

          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </Subtitle>

          <Infos>
            <InfoItem>
              <span>
                <ShoppingCart size={14} color="#ffffff" weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </InfoItem>

            <InfoItem>
              <span>
                <Package size={14} color="#ffffff" weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </InfoItem>

            <InfoItem>
              <span>
                <Timer size={14} color="#ffffff" weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </InfoItem>

            <InfoItem>
              <span>
                <Coffee size={14} color="#ffffff" weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </InfoItem>
          </Infos>
        </div>
        
        <div>
          <img 
            src={CoffeeImg} 
            alt="Imagem de um copo de café para apresentação da página" 
          />
        </div>
      </IntroContainer>

      <Catalog>
        <h2>Nossos cafés</h2>

        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
        
      </Catalog>
    </HomeContainer>
  )
}