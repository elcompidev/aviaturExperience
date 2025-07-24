import { useState } from 'react';
import useReserva from '../hooks/useReserva';

const FormConsulta = () => {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const { consultar, error } = useReserva();

  const handleSubmit = (e) => {
    e.preventDefault();
    consultar({ codigoReserva: codigo, nombreTitular: nombre });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
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
    </form>
  );
};

export default FormConsulta;
