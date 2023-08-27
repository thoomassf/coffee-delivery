import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;

  background: ${(props) => props.theme['base-button']};

  width: 4.5rem;
  height: 2.375rem;
  padding: 0.5rem;

  border-radius: 6px;

  span {
    color: ${(props) => props.theme['title']};
  }
`

export const Button = styled.button`
  
`