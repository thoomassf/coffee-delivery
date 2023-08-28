import { Bank, CreditCard, Money } from "phosphor-react";
import { Header } from "../../components/Header";

import {
  Button,
  CheckoutContainer,
  Content,
  Form,
  FormContainer,
  FormTitle,
  GridForm,
  Label,
  Paymment,
  PaymmentMethods,
  Summary,
  SummaryTitle,
  Title
} from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <Header />

      <Content>
        <FormContainer>
          <FormTitle>Complete seu pedido</FormTitle>

          <Form>
            <Title>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </Title>

            <GridForm>
              <div>
                <input type="text" placeholder="CEP" />
              </div>
              <div>
                <input type="text" placeholder="Rua" />
              </div>
              <div>
                <input type="text" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </div>
              <div>
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </div>
            </GridForm>
          </Form>
            
            
          <Paymment>
            <Title>
              <h2>Pagamento</h2>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </Title>

            <PaymmentMethods>
              <Button>
                <span>
                  <CreditCard size={24} color="#8047F8" />
                </span>
                <Label>
                  CARTÃO DE CRÉDITO
                </Label>
              </Button>

              <Button>
                <span>
                  <Bank size={24} color="#8047F8" />
                </span>
                <Label>
                  CARTÃO DE DÉBITO
                </Label>
              </Button>
              
              <Button>
                <span>
                  <Money size={24} color="#8047F8" />
                </span>
                <Label>
                  DINHEIRO
                </Label>
              </Button>
            </PaymmentMethods>
          </Paymment>
        </FormContainer>

        <Summary>
          <SummaryTitle>Cafés selecionados</SummaryTitle>

          <div>
            teste
          </div>
        </Summary>
      </Content>
      
    </CheckoutContainer>
    
  )
}