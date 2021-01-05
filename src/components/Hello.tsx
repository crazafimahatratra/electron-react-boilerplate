import React from 'react';
import { User } from '../services/models/User';
import { UserService } from '../services/ipcrenderer/UserService';

const userService = new UserService();

export function Hello() {
    const [user, setUser] = React.useState<User>({ age: 0, name: "" });
    const getUser = () => {
        userService.getAge().then(setUser);
    }
    return (
        <div style={{ backgroundColor: "white", height: "100vh" }}>
            <h1>Hello</h1>
            <button onClick={getUser}>Click Here</button>
            <p>
                Name: {user.name}
            </p>
            <p>
                Age: {user.age}
            </p>
        </div>
    );
}
