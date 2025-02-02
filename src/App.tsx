import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import { Container, EstiloGlobal } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral>
          <ListaDeTarefas />
        </BarraLateral>
      </Container>
    </>
  )
}

export default App
