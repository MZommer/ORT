import { useParams } from "react-router-dom";
import Users from "../Users.json";
export default function Person(){
    const { id } = useParams();
    const user = Users.filter(_user => _user.id == id )[0]; 
    return (
        <>

        </>
    )
}