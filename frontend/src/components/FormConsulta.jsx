import { useState } from 'react';
import useReserva from '../hooks/useReserva';
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
    <h1 className="text-sm font-bold uppercase text-blueGray-500" class="aviatur-logo-text">Experiencia Aviatur</h1>
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
        class="btn btn-primary btn-lg btn-block bgAviatur boton-text"
      >
        Consultar
      </button>
    </div>
  </form>
</div>
  );
};

export default FormConsulta;

