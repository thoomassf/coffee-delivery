import styled from "styled-components";

export const Item = styled.div`
  display: flex;

  img {
    margin-right: 1.25rem;
  }
`

export const Main = styled.div`
  margin-right: 3.125rem;

  h2 {
    color: ${(props) => props.theme['subtitle']};
    font-size: 1rem;
    font-weight: 400;

    margin-bottom: 0.5rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrashButton = styled.button`
  width: 5.625rem;
  height: 2.375rem;
  margin-left: 0.5rem;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;

  outline: 0;
  border: 0;
  border-radius: 6px;

  cursor: pointer;
`

export const Price = styled.h2`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 700;
`

export const Divider = styled.div`
  border-bottom: 1px solid black;
`