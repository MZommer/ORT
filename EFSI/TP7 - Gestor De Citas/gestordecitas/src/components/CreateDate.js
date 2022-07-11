import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
export default function CreateDate({ createHandler }){
    let today = new Date()
    const handleSubmit = useCallback(event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const values = Object.fromEntries(data.entries());
        if (values.date < today)
            return toast.error("La fecha no puede ser en el pasado!")
        for (const [key, value] of data.entries())
            if (!value)
                return toast.error(`El campo "${key}" No puede estar vacio!`) 
        values.id = uuidv4();
        createHandler(dates => [...dates, values]);
        toast.success("Cita creada!")
    }, [createHandler])
    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form onSubmit={handleSubmit}>
              <label>Nombre Mascota</label>
              <input type="text" name="pet" className="u-full-width" placeholder="Nombre Mascota" />
              <label>Nombre Dueño</label>
              <input type="text" name="owner" className="u-full-width" placeholder="Nombre dueño de la mascota" />
              <label>Fecha</label>
              <input type="date" name="date" defaultValue={today.toLocaleDateString('en-CA')} className="u-full-width" />
              <label>hora</label>
              <input type="time" name="time" className="u-full-width" />
              <label>Sintomas</label>
              <textarea name="details" className="u-full-width"></textarea>
              <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    )
}