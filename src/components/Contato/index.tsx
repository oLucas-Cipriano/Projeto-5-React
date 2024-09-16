import { Botao, BotaoSalvar } from '../../styles'
import * as S from './styles'

import ContatoClass from '../../models/contato'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { editar, remover } from '../../store/reducers/contato'

type Props = ContatoClass

const Contato = ({
  nome,
  email: emailOriginal,
  numero: numeroOriginal,
  id
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
  }, [numeroOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setNumero(numeroOriginal)
  }

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.Informacao
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      ></S.Informacao>
      <S.Informacao
        disabled={!estaEditando}
        value={numero}
        onChange={(evento) => setNumero(evento.target.value)}
      ></S.Informacao>
      <S.Acoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome,
                    email,
                    numero
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.Acoes>
    </S.Card>
  )
}

export default Contato
