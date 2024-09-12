import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
`

function Teste() {
  return (
    <>
      <Botao principal>enviar</Botao>
      <Botao principal={false}>cancelar</Botao>
    </>
  )
}

export default Teste
