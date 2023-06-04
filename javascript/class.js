class Reserva {
    constructor(carritoDeReservas){
        this.carrito = carritoDeReservas
    }
    obtenerReservas(){
        if(this.carrito.length > 0){
            return this.carrito.reduce((acc, turno)=> acc + turno.valor * precioTurno, 0)
        }
    }
}
