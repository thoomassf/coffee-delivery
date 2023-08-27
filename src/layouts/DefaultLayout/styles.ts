import styled from 'styled-components'

export const LayoutComponent = styled.div`
  max-width: 90rem;
  margin: auto;

  background: ${(props) => props.theme['background']};

  display: flex;
  flex-direction: column;
`