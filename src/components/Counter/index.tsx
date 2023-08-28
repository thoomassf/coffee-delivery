import { Minus, Plus } from 'phosphor-react'

import { Button, CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <Button>
        <Minus size={14} color="#8047F8" weight="bold" />
      </Button>

      <span>1</span>

      <Button>
        <Plus size={14} color="#8047F8" weight="bold" />
      </Button>
    </CounterContainer>
  )
}