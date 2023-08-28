import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 5.75rem 0;
`

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 588px 1fr;
  align-items: center;
  justify-content: space-between;

  gap: 374px;
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-size: 3rem;
  font-weight: 800;
  color: ${(props) => props.theme['title']};

  margin-bottom: 1rem;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme['subtitle']};
`

export const Infos = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;

  gap: 1.25rem;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme['yellow']};
    border-radius: 9999px;

    padding: 0.25rem;
    margin-right: 0.75rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const Catalog = styled.div`
  margin-top: 6.4rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['subtitle']};
  }
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
