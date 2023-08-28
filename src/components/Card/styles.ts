import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  
  max-width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.375rem;

  img {
    transform: translateY(-20px);
  }
`

export const Tags = styled.div``

export const Tag = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;

  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.625rem;
  font-weight: 700;
  
  margin-right: 0.25rem;
  padding: 0.25rem 0.75rem;
`

export const Description = styled.div`
  margin: 1rem 1.25rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${(props) => props.theme['subtitle']};
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    text-align: center;

    margin-top: 0.5rem;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: auto;
`

export const Price = styled.div`
  display: flex;
  align-items: center;

  margin-right: 2.375rem;

  p {
    font-size: 0.875rem;
    margin-right: 0.25rem;
  }

  span {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
  }
`

export const Buy = styled.div`
  display: flex;

  div {
    margin-right: 0.25rem;
  }
`