export const validarReserva = async({ codigoReserva, nombreTitular }) => {
    // Simula llamada a backend Symfony
    if (codigoReserva === 'ABC123' && nombreTitular.toLowerCase() === 'juan perez') {
        return {
            success: true,
            data: {
                pasajero: 'Juan Perez',
                vuelo: 'AV001',
                origen: 'Bogotá',
                destino: 'Cartagena',
                fechaSalida: '2025-08-10',
                fechaRegreso: '2025-08-15',
            },
        };
    }
    return { success: false, message: 'Reserva no encontrada' };
};