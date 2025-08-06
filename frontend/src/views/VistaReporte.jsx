import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BoardingPass from 'components/BoardingPass';

const VistaReporte = () => {
  const [reserva, setReserva] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('reserva');
    if (!data) return navigate('/');
    setReserva(JSON.parse(data));
  }, []);

  if (!reserva) return null;

  return (
    /*<motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-semibold">Resumen de tu reserva</h2>
      <ul className="mt-4 space-y-1">
        <li>Pasajero: {reserva.pasajero}</li>
        <li>Vuelo: {reserva.vuelo}</li>
        <li>Origen: {reserva.origen}</li>
        <li>Destino: {reserva.destino}</li>
        <li>Salida: {reserva.fechaSalida}</li>
        <li>Regreso: {reserva.fechaRegreso}</li>
      </ul>
      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2"
        onClick={() => navigate('/experiencias')}
      >
        Ver experiencias
      </button>
    </motion.div>*/
     <div className="min-h-screen">
          <BoardingPass />
        </div>
  );
};

export default VistaReporte;
