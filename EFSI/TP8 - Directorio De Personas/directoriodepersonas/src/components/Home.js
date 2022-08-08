import users from "../Users.json";
import User from "./User";

export default function Home() {
    return (
        <div className="page-wrapper">
            <div className="page-content">  
                <div className="d-flex justify-content-between flex-wrap">
                    {users.map(_user => 
                        <User id={_user.id} name={_user.name} lastName={_user.lastName} email={_user.email} age={_user.age}/>)}
                </div>
            </div>
        </div>
    )
}