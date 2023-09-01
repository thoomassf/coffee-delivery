import { ButtonsContainer, Divider, Item, Main, Price, TrashButton } from './styles'

import { Trash } from 'phosphor-react'
import CafeArabeImg from '../../assets/CafeArabe.png'
import { Counter } from '../Counter'

export function CartItem() {
  return (
    <Item>
      <img src={CafeArabeImg} alt="" width={64} height={64} />

      <Main>
        <h2>Expresso Tradicional</h2>
        <ButtonsContainer>
          <Counter />

          <TrashButton>
            <Trash size={16} color="#8047F8" />
            REMOVER
          </TrashButton>
        </ButtonsContainer>
      </Main>

      <Price>
        R$ 9,90
      </Price>

      <Divider />
    </Item>
  )
}