import Logo from '../../assets/Logo 1.svg';
import { CartItens, CartResume } from '../../components';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt='logo devsburger' />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
        <CartItens />
        <CartResume />
      </Content>
    </Container>
  );
}