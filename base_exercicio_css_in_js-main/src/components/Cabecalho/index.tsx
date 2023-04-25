import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`
const Cabecalho = () => (
  <header>
    <title>EBAC Jobs</title>
  </header>
)

export default Cabecalho
