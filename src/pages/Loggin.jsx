import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';

import './Loggin.css'

import logogoogle from "../assets/logoogle.png";

const Loggin = () => {
    const navigate = useNavigate();
    const {user,googleSignIn} = UserAuth();

    const iniciarSesion=async()=>{
        try {
        await googleSignIn();
        } catch (error) {
        console.log(error);
        }
    }

    useEffect(()=>{
    if(user!=null){
    navigate("/")
    }
    },[user])

  return (
    <div className='contenedor-login'>
      <section className="imgseccion">
        <h1>Estas a un click del sabor</h1>
        <div className="fondocontent">
          <img className='cheff' src="src\assets\cheffAmigo.png" alt="aqui va el cheff" />          
        </div>
      </section>

      <section className="panelsesion">
        <h2>Iniciar sesión</h2>

        <button onClick={iniciarSesion}   className="btniniciar">
          <img src={logogoogle} />
          <span> Iniciar con Gmail</span>
        </button>
      </section>
    </div>
  )
}

export default Loggin
