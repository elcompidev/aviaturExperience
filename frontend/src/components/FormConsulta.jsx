import { useState } from 'react';
import useReserva from '../hooks/useReserva';
import '../assets/general.css';
import '../assets/login.css';

const FormConsulta = () => {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const { consultar, error } = useReserva();

  const handleSubmit = (e) => {
    e.preventDefault();
    consultar({ codigoReserva: codigo, nombreTitular: nombre });
  };

  return (
    <div className="login-card">
  <div className="text-center mb-4">
    <h1 className="text-sm font-bold uppercase text-blueGray-500">Experiencia Aviatur</h1>
  </div>

  <hr className="my-4 border-blueGray-300 bg-white" />

  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label class="form-control-label" for="example3cols1Input" style={{ fontSize: '1.1rem' }}>Código de Reserva</label>
      <input
        id="codigo"
        type="text"
        placeholder="PN1234"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        class="form-control"
      />
    </div>

    <div className="mb-4">
      <label class="form-control-label" for="example3cols1Input" style={{ fontSize: '1.1rem' }}>Nombre del Titular</label>
      <input
        id="nombre"
        type="text"
        placeholder="Luis Perez"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        class="form-control"
      />
    </div>
      
    {error && <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <span class="alert-text"><strong>{error}</strong></span>
      </div>}

    <div className="text-center mt-1">
      <button
        type="submit"
        class="btn btn-primary btn-lg btn-block bgAviatur"
        
      >
        Consultar
      </button>
    </div>
  </form>
</div>

   /*<div class="login-card">
    <div class="text-center mb-4">
      <h6 class="text-sm font-bold uppercase text-blueGray-500">Inicia sesión con</h6>
      <div class="flex justify-center mt-2">
        <button class="login-button" type="button">Google</button>
        <button class="login-button" type="button">Facebook</button>
      </div>
    </div>
    
    <hr class="my-4 border-blueGray-300" />
    
    <form>
      <div class="mb-4">
        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="email">
          Correo Electrónico
        </label>
        <input id="email" type="email" placeholder="ejemplo@correo.com"
          class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring"
        />
      </div>
      
      <div class="mb-4">
        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="password">
          Contraseña
        </label>
        <input id="password" type="password" placeholder="********"
          class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring"
        />
      </div>

      <div class="text-center mt-6">
        <button class="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg w-full"
          type="button">
          Iniciar Sesión
        </button>
      </div>
    </form>
  </div>
      /*<form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Experiencia Aviatur</h1>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Código de Reserva"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Nombre del Titular"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white p-2 w-full">
        Consultar
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>*/
    
  );
};

export default FormConsulta;

