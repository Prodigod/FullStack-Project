import { useState } from "react";
import { useCreateUserMutation } from "./userslice";


export default function Register() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [ createUser, {error, isSuccess }] = useCreateUserMutation();
function handleRegistration(event) {
    event.preventDefault(); 

    createUser({email, password});
}
    return (
        <div>
          <h2>Register New User</h2>
          <form onSubmit={handleRegistration}>
            <div>
                <label>Email</label>
                <input 
                type = "email"
                value={email}
                onChange={function (e) {setEmail(e.target.value); }}
                required
                />
                </div>
                <div>
                <label>Password</label>
                <input 
                type = "password"
                value={password}
                onChange={function (e) {setPassword(e.target.value); }}
                />
                </div>

                <button type="submit">Register</button>
                </form>


                {isSuccess && <p>Registration Sucessful. Welcome, {email}!</p>}
                {error && <p>Error: {error?.data?.message || "Registration failed!"}</p>}
    </div>
  );
};


