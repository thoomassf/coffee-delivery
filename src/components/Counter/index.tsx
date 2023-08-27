import { Minus, Plus } from 'phosphor-react'

import { Button, CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <Button>
        <Minus size={24} color="#4d579d" weight="bold" />
      </Button>

      <span>1</span>

      <Button>
        <Plus size={24} color="#4d579d" weight="bold" />
      </Button>
    </CounterContainer>
  )
}