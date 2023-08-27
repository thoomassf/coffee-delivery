import { Buy, Container, Description, Price, PriceContainer, Tag, Tags } from './styles'

import Latte from '../../assets/Latte.png'
import { CartButton } from '../CartButton'
import { Counter } from '../Counter'

export function Card() {
  return (
    <Container>

      <img src={Latte} alt="" />

      <Tags>
        <Tag>TRADICIONAL</Tag>
        <Tag>GELADO</Tag>
      </Tags>

      <Description>
        <h3>Latte</h3>
        <p>Uma dose de café expresso com o dobro de leite e espuma cremosa</p>
      </Description>

      <PriceContainer>
        <Price>
          <p>R$</p>
          <span>9,90</span>
        </Price>

        <Buy>
          <div>
            <Counter />
          </div>

          <CartButton />
        </Buy>
      </PriceContainer>
    </Container>
  )
}