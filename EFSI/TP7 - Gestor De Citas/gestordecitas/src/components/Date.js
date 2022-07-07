export default function Date( {deleteHandler, id, pet, owner, date, time, details} ) {
    function clickHandler() {
        deleteHandler(id);
    }
    return (
        <div className="cita">
            <p>Mascota: <span>{pet}</span></p>
            <p>Dueño: <span>{owner}</span></p>
            <p>Fecha: <span>{date}</span></p>
            <p>Hora: <span>{time}</span></p>
            <p>Sintomas: <span>{details}</span></p>
            <button className="button elimnar u-full-width" onClick={clickHandler}>Eliminar ×</button>
        </div>
    )
}