import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'
import { Titulo } from './styles'
import { RootReducer } from '../../store'

const ListaDeContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  return (
    <MainContainer>
      <Titulo>Lista de contatos</Titulo>
      <ul>
        {itens.map((t) => (
          <li key={t.nome}>
            <Contato
              nome={t.nome}
              email={t.email}
              numero={t.numero}
              id={t.id}
            ></Contato>
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContato
