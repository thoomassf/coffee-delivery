import styled from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
`

export const Main = styled.div`
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};

    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['subtitle']};
  }
`

export const Title = styled.div`
  margin-bottom: 2.5rem;
`

export const Informations = styled.div`
  display: flex;
`

export const Sections = styled.div`
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme['yellow']};

  padding: 2.5rem;
  margin-right: 6.375rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 2rem;

  p {
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
  }
`

export const IconMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;

  background: ${(props) => props.theme['purple']};
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
`

export const IconTimer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;

  background: ${(props) => props.theme['yellow']};
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
`

export const IconDolar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;

  background: ${(props) => props.theme['yellow-dark']};
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
`