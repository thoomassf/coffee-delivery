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
  display: flex;

  div {
    margin-right: 0.75rem;
  }

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
  display: flex;
  flex-direction: column;
`

export const InputCep = styled.input`
    width: 12.5rem;
    padding: 0.75rem;
    margin-bottom: 1rem;

    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
`

export const InputStreet = styled.input`
    width: 35rem;
    padding: 0.75rem;
    margin-bottom: 1rem;

    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
`

export const InputNumber = styled.input`
    width: 12.5rem;
    padding: 0.75rem;
    margin: 0 0.75rem 1rem 0;

    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
`

export const InputComplement = styled.input`
    width: 21.75rem;
    padding: 0.75rem;
    margin-bottom: 1rem;

    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
`

export const InputNeighborhood = styled.input`
    width: 12.5rem;
    padding: 0.75rem;
    margin-right: 0.75rem;

    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
`

export const InputCity = styled.input`
    width: 17.25rem;
    padding: 0.75rem;
    margin: 0 1rem 0.75rem 0;

    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
`

export const InputUF = styled.input`
    width: 3.5rem;
    padding: 0.75rem;
    margin-bottom: 1rem;

    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
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

export const SummaryContainer = styled.div`
  max-width: 448px;
`

export const SummaryTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme['subtitle']};

  margin-bottom: 1rem;
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const Subtotal = styled.div`
  button {
    background: ${(props) => props.theme['yellow']};
    border: 0;
    border-radius: 6px;

    padding: 0.75rem 7.5rem;

    color: ${(props) => props.theme['white']};
    font-size: 0.75rem;
    font-weight: 700;

    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const SubtotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  margin-bottom: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }

  h2 {
    color: ${(props) => props.theme['subtitle']};
    font-weight: 700;
    font-size: 1.25rem;
  }

  h3 {
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 1rem;
  }
`
