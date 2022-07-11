import { useContext } from "react"
import Date from "./Date"
import { DatesContext } from "../App"

export default function DateList({deleteHandler}) {
    const Dates = useContext(DatesContext)
    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            {Dates.map(
                _date => <Date 
                            pet={_date.pet}
                            owner={_date.owner}
                            date={_date.date}
                            time={_date.time}
                            details={_date.details}
                            id={_date.id}
                            deleteHandler={deleteHandler}
                        />
            )}
        </div>
    )
}