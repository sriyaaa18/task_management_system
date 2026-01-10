import { useEffect, useState } from "react";
import { authApi } from "./api/auth";

type User = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Auto-login on refresh
  useEffect(() => {
    authApi
      .me()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  const handleRegister = async () => {
    try {
      const data = await authApi.register(form);
      setUser(data.user ?? data);
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  const handleLogin = async () => {
    try {
      const data = await authApi.login({
        email: form.email,
        password: form.password,
      });
      setUser(data.user ?? data);
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Task Management System</h1>

      {!user ? (
        <>
          <input
            placeholder="Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          <input
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <br />

          <button onClick={handleRegister}>Register</button>
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <h2>Welcome {user.name}</h2>
          <p>{user.email}</p>
        </>
      )}
    </div>
  );
}

export default App;
