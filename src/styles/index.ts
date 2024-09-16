import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
    text-decoration: none;
  }
`
export const MainContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;
`
export const Container = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  border-radius: 8px;
  color: #666666;
  border-color: #666666;
  width: 100%;
  margin-bottom: 16px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
