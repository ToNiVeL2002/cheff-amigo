import React from 'react'

const HeaderLoginSimple = () => {
  return (
    <>
    <header className='header'>
      <div className="menu container">
        <a href="#" className='logo'>Cheff Amigo</a>
        <input type="checkbox" />
        <label htmlFor="menu">
          <img src="src\assets\menu.png" alt="menu" className='menu-icono'/>
        </label>

        <nav className='navbar'>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Recetas</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>

      </div>

      <div className="header-content container">
        <div className="header-txt">
          <h1>El mejor menu</h1>
          <p>Comida especial</p>
        </div>
      </div>
    </header>
      
    </>
  )
}

export default HeaderLoginSimple
