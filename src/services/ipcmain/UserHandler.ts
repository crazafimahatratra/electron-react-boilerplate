import { User } from "../models/User";

export class UserHandler {
    getOne(): User {
        return {age: Math.ceil(Math.random() * 100), name: "RAKOTO"};
    }
}
