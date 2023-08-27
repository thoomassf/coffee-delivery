import styled from 'styled-components'

export const Button = styled.button`
  width: 2.375rem;

  background: ${(props) => props.theme['yellow-light']};
  outline: 0;
  border: 0;
  border-radius: 6px;

  padding: 0.5rem;

  cursor: pointer;
`