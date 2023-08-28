import styled from "styled-components";

export const CheckoutContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 5rem;
`

export const FormContainer = styled.div`
  max-width: 640px;
`

export const FormTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme['subtitle']};

  margin-bottom: 1rem;
`

export const Form = styled.form`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  
  padding: 2.5rem;
  margin-bottom: 0.75rem;
`

export const Title = styled.div`
  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['subtitle']};

    margin-bottom: 0.125rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    margin-bottom: 2rem;
  }
`

export const GridForm = styled.div`
  

  
`

export const Paymment = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  
  padding: 2.5rem;
`

export const PaymmentMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  
`

export const Button = styled.button`
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: 0;

  width: 11.125rem;
  padding: 1rem;

  display: flex;
  align-items: center;

  cursor: pointer;
  transition: 0.2s;

  span {
    margin-right: 0.25rem;
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['subtitle']};
  }
`

export const Label = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
`

export const Summary = styled.div`
  max-width: 448px;
`

export const SummaryTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme['subtitle']};

  margin-bottom: 1rem;
`