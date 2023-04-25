import styled from 'styled-components'
import { FormEvent, useState } from 'react'

type Props = {
  aoPesquisar: (termo: string) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const input = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <form onSubmit={aoEnviarForm}>
      <input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button type="submit">Pesquisar</button>
    </form>
  )
}
export default FormVagas
