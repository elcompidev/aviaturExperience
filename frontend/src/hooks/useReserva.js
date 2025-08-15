import { useState } from 'react';
import { validarReserva } from '../api/reservaApi.js';
import { useNavigate } from 'react-router-dom';

const useReserva = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const consultar = async({ codigoReserva, nombreTitular }) => {
        const res = await validarReserva({ codigoReserva, nombreTitular });
        if (res.success) {
            localStorage.setItem('reserva', JSON.stringify(res.data));
            navigate('/experience');
        } else {
            setError(res.message);
        }
    };

    return { consultar, error };
};

export default useReserva;