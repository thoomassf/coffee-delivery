import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;

  img {
    width: 5.25rem;
  }
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.5rem;

  div {
    display: flex;
    align-items: center;

    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875;

    margin-right: 0.75rem;
    padding: 0.5rem;

    border-radius: 6px;

    p {
      margin-left: 0.25rem;
    }
  }

  span {
    background: ${(props) => props.theme['yellow-light']};
    fill: ${(props) => props.theme['yellow-dark']};
    border-radius: 6px;

    padding: 0.5rem;
  }
`
