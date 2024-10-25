import { useState } from "react";
import { useLoginUserMutation } from "./userslice";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser, { error, isSuccess, isLoading }] = useLoginUserMutation();
    const message = `Welcome to the University ${email}`

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
          const { user, token, message } = await loginUser({ email, password }).unwrap();
          console.log("Login successful:", user, token, message);
          localStorage.setItem('authToken', token);
    
        } catch (error) {
          console.error("Login error:", error);
        }
      };
    
      return (
        <div>
          <h2>Sign-In</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
            
          {isSuccess && message && (
            <p style={{ color: 'green' }}>{message}</p>
          )}
          {error && (
            <p style={{ color: 'red' }}>An error occurred: {error.data?.message}</p>
          )}
        </div>
      );
    }
