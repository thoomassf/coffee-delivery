import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Header } from "../../components/Header";


import { CartItem } from "../../components/CartItem";
import {
  Button,
  CheckoutContainer,
  Content,
  Form,
  FormContainer,
  FormTitle,
  GridForm,
  InputCep,
  InputCity,
  InputComplement,
  InputNeighborhood,
  InputNumber,
  InputStreet,
  InputUF,
  Label,
  Paymment,
  PaymmentMethods,
  Subtotal,
  SubtotalInfo,
  Summary,
  SummaryContainer,
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
              <div>
                <MapPinLine size={24} color="#C47F17" />
              </div>
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </Title>

            <GridForm>
              <div>
                <InputCep type="text" placeholder="CEP" />
              </div>
              <div>
                <InputStreet type="text" placeholder="Rua" />
              </div>
              <div>
                <InputNumber type="text" placeholder="Número" />
                <InputComplement type="text" placeholder="Complemento" />
              </div>
              <div>
                <InputNeighborhood type="text" placeholder="Bairro" />
                <InputCity type="text" placeholder="Cidade" />
                <InputUF type="text" placeholder="UF" />
              </div>
            </GridForm>
          </Form>
            
            
          <Paymment>
            <Title>
              <div>
                <CurrencyDollar size={24} color="#8047F8" />
              </div>
              <div>
                <h2>Pagamento</h2>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
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

        <SummaryContainer>
          <SummaryTitle>Cafés selecionados</SummaryTitle>

          <Summary>
            <CartItem />
            <CartItem />
            
            <Subtotal>
              <SubtotalInfo>
                <div>
                  <p>Total  de itens</p>
                  <h3>R$ 29,70</h3>
                </div>
                
                <div>
                  <p>Entrega</p>
                  <h3>R$ 3,50</h3>
                </div>

                <div>
                  <h2>Total</h2>
                  <h2>R$ 33,20</h2>
                </div>
              </SubtotalInfo>
              <button>
                CONFIRMAR PEDIDO
              </button>
            </Subtotal>
          </Summary>
        </SummaryContainer>
      </Content>
      
    </CheckoutContainer>
    
  )
}