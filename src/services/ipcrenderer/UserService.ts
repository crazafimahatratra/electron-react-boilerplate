import app from "../invoke";
import { User } from "../models/User";

export class UserService {
    getAge(): Promise<User> {
        return app.invoke("GETUSERS");
    }
}
