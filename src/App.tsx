import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

import EstiloGlobal from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal></EstiloGlobal>
      <RouterProvider router={rotas}></RouterProvider>
    </Provider>
  )
}

export default App
