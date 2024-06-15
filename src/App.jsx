import { AuthContextProvider, UserAuth } from './context/AuthContext'
import { MyRoutes } from './routes/routes'

import './App.css'

function App() {

  return (
    <AuthContextProvider>
      <div className='contenedor-app'>
        <MyRoutes/>
      </div>
    </AuthContextProvider>

  )
}

export default App
