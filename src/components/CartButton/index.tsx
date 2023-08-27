import { ShoppingCart } from 'phosphor-react'

import { Button } from './styles'

export function CartButton() {
  return (
    <Button>
      <ShoppingCart size={22} weight="fill" color="#C47F17" />
    </Button>
  )
}