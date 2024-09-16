import { Form } from './styles'
import { Botao, BotaoSalvar, Campo, Container } from '../../styles'
import { Titulo } from '../ListaDeContatos/styles'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { cadastrar } from '../../store/reducers/contato'

const Formulario = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        email,
        numero
      })
    )
    navigate('/')
  }
  return (
    <Container>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          type="text"
          placeholder="Nome Completo"
          onChange={(evento) => setNome(evento.target.value)}
        ></Campo>
        <Campo
          type="email"
          placeholder="Email"
          onChange={(evento) => setEmail(evento.target.value)}
        ></Campo>
        <Campo
          type="text"
          placeholder="Telefone"
          onChange={(evento) => setNumero(evento.target.value)}
        ></Campo>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        <Botao onClick={() => navigate('/')} type="button">
          Cancelar
        </Botao>
      </Form>
    </Container>
  )
}

export default Formulario
