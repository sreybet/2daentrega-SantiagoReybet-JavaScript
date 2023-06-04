let precioTurno = 2000
const carrito = []
const reservas= []
const turnos = [{valor: 1, dia: "lunes", codigo: 1, horario: "19 hs"},
                {valor: 1, dia: "lunes", codigo: 2, horario: "21 hs"},
                {valor: 1, dia: "martes", codigo: 3, horario: "19 hs"},
                {valor: 1, dia: "martes", codigo: 4, horario: "21 hs"},
                {valor: 1, dia: "miercoles", codigo: 5, horario: "19 hs"},
                {valor: 1, dia: "miercoles", codigo: 6, horario: "21 hs"},
                {valor: 1, dia: "jueves", codigo: 7, horario: "19 hs"},
                {valor: 1, dia: "jueves", codigo: 8, horario: "21 hs"},
                {valor: 1, dia: "viernes", codigo: 9, horario: "19 hs"},
                {valor: 1, dia: "viernes", codigo: 10, horario: "21 hs"},]

function reservarTurno(){
            let eleccionDia = prompt("Ingrese el día que quiere reservar (Lunes, Martes, Miercoles, Jueves y Viernes)")
            if(eleccionDia === null){
                alert("No entendimos tu seleccion por favor ingrese un día valido")
                return reservarTurno()
            }else{
                const diaSeleccionado = turnos.filter((dia) => dia.dia.includes(eleccionDia.toLowerCase()))
                console.log("Los turnos disponibles en el dia seleccionado son:")
                console.table(diaSeleccionado)
                }
            }
            
            
function seleccionTurno(codigo){
            let resultado =  turnos.find((turno) => turno.codigo === parseInt(codigo))
            console.table(resultado)
            carrito.push(resultado)
            reservas.push(resultado)}


function finalizarReserva(){
            const reservado  = new Reserva(carrito)
            alert("¡Gracias por su reserva! el total es: " + reservado.obtenerReservas() + " $")
}

function nuevaReserva(){
        let confirmacion = confirm("¿Desea reservar un turno?")
        if(confirmacion === true){
            reservarTurno()
            let codigo = parseInt(prompt("Por favor seleccione el codigo del horario que quiere reservar"))
            if(codigo !== isNaN(codigo) && codigo <= 10){
                seleccionTurno(codigo)
                console.log("Su carrito de reservas es el siguiente:")
                console.table(carrito)
                let confirmacion2 = confirm("Su reserva se agrego al carrito. ¿Desea reservar otro turno?")
                if(confirmacion2 === true){
                    nuevaReserva()
                }else{
                    finalizarReserva()
                }
            }else{
                alert("su codigo ingresado no es valido. Por favor actualice la pagina e ingrese un codigo valido.")
                nuevaReserva()
            } 
        }else{
            alert("¡Gracias por visitar nuestra pagina de reservas!")
        }
}
alert("Bienvenido, trabajamos de lunes a viernes. Los turnos que tenemos disponibles son los siguientes:")
console.table(turnos)
nuevaReserva()