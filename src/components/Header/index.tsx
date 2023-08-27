import { MapPin } from 'phosphor-react'
import { HeaderContainer, Options } from './styles'

import { CartButton } from '../CartButton'

import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo da Coffee Delivery" />

      <Options>
        <div>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <p>São Paulo, SP</p>
        </div>

        <CartButton />
      </Options>
    </HeaderContainer>
  )
}