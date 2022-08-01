import Users from "../Users.json";

export default class DB { // Simulate we have a db
    _users = Users;

    static getUsersOlderThan(age){
        return this._users.filter(user => user.age >= age).length;
    }
    static getOldestUsers(){
        const oldest = [];
        // implement
        return oldest;
    }
    static getYoungestUsers(){
        const youngest = [];
        // implement
        return youngest;
    }
}