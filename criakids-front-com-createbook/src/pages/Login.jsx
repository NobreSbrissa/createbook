
import React from 'react';

export default function Login() {
  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h1>Login Criakids</h1>
      <input placeholder="Email" style={{ display: 'block', margin: '10px auto' }} />
      <input placeholder="Senha" type="password" style={{ display: 'block', margin: '10px auto' }} />
      <button style={{ marginTop: 10 }}>Entrar</button>
    </div>
  );
}
