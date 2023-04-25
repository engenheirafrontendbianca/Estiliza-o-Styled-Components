import { ThemeProvider } from 'styled-components'

import Cabecalho from './components/Cabecalho'
import FormVagas from './components/FormVagas'
import Hero from './components/Hero'
import Vaga from './components/Vaga'
import ListaVagas from './containers/themes'

function App() {
  return (
    <>
      <ThemeProvider theme={undefined} />
      <Cabecalho />
      <FormVagas
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        aoPesquisar={function (_termo: string): void {
          throw new Error('Function not implemented.')
        }}
      />
      <Hero />
      <Vaga
        titulo={''}
        localizacao={''}
        nivel={''}
        modalidade={''}
        salarioMin={0}
        salarioMax={0}
        requisitos={[]}
      />
      <ListaVagas />
    </>
  )
}

export default App
