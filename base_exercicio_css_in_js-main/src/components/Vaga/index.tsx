import styled from 'styled-components'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VagaWrapper = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  h3 {
    font-weight: bold;
    margin-bottom: 16px;
  }

  a {
    border-color: var(--cor-secundaria);
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);

    a {
      border-color: var(--cor-principal);
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }
`

const Vaga = (props: Props) => (
  <VagaWrapper>
    <h3>{props.titulo}</h3>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <a href="#">Ver detalhes e candidatar-se</a>
  </VagaWrapper>
)

export default Vaga
