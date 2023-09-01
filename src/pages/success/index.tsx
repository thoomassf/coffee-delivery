import { Header } from "../../components/Header";

import DeliveryImg from '../../assets/DeliveryImg.svg';

import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { IconDolar, IconMap, IconTimer, Info, Informations, Main, Sections, SuccessContainer, Title } from './styles';

export function Success() {
  return (
    <SuccessContainer>
      <Header />

      <Main>
        <Title>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Title>

        <Informations>
          <Sections>
            <Info> 
              <IconMap>
                <MapPin size={16} color="#ffffff" weight="fill" />
              </IconMap>
              <p>Entrega em Rua João Daniel Martinelli, 102 <br/>
              Farrapos - Porto Alegre, RS</p>
            </Info>

            <Info> 
              <IconTimer>
                <Timer size={16} color="#ffffff" weight="fill" />
              </IconTimer>
              <p>Previsão de entrega <br/>
              <strong>20 min - 30 min</strong> </p>
            </Info>

            <Info> 
              <IconDolar>
                <CurrencyDollar size={16} color="#ffffff" weight="fill" />
              </IconDolar>
              <p>Pagamento na entrega
              <strong>Cartão de Crédito</strong></p>
            </Info>
          </Sections>

          <img src={DeliveryImg} alt="" />
        </Informations>
        
      </Main>
    </SuccessContainer>
  )
}