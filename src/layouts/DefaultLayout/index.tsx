import { Header } from '../../components/Header'
import { Home } from '../../pages/Home'
import { LayoutComponent } from './styles'

export function DefaultLayout() {
  return (
    <LayoutComponent>
      <Header />
      <Home />
    </LayoutComponent>
  )
}