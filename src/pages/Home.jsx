
import HeaderLogin from '../components/HeaderLogin'
import RecipeList from '../components/RecipeList'
import { UserAuth } from '../context/AuthContext'
import './Home.css'

const Home = () => {

  const {user, logOut} = UserAuth()
  const cerrarSesion = async() => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    // <div className='hola'>
    //     <h1>BIenvenido {user.displayName}</h1>
    //     <img src={user.photoURL} alt="" />
        
        
    //     <button onClick={cerrarSesion}>cerrar sesion</button>
    // </div>

    <div className="home-container">
      
        <HeaderLogin user={user} cerrarSesion={cerrarSesion}/>

        <RecipeList/>


    </div>
    
  )
}

export default Home
