import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contato'

type ContatoState = {
  itens: Contato[]
}
const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'marlon',
      email: 'marlon@gmail.com',
      numero: '(34) 99988-6601'
    },
    {
      id: 2,
      nome: 'jorge',
      email: 'jorge@gmail.com',
      numero: '(34) 99780-7601'
    },
    {
      id: 3,
      nome: 'adamastor',
      email: 'adamastor@gmail.com',
      numero: '(11) 99080-6601'
    }
  ]
}

const ContatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExite = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExite) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = ContatoSlice.actions

export default ContatoSlice.reducer
