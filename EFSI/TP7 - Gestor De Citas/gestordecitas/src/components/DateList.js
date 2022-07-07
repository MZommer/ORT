import Date from "./Date"
export default function DateList(props) {
    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            {props.list.map(
                date => <Date 
                            pet={date.pet}
                            owner={date.owner}
                            date={date.date}
                            time={date.time}
                            details={date.details}
                            id={date.id}
                            deleteHandler={props.deleteHandler}
                        />
            )}
        </div>
    )
}