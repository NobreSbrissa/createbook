import { useState } from 'react';

export default function CreateBook() {
  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState('');
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGenerated('');

    try {
      // Simulando chamada à IA
      const response = await fetch('https://api.criakids.ai/generate-book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, theme }),
      });

      const data = await response.json();
      setGenerated(data.story || 'História gerada!');
    } catch (err) {
      alert('Erro ao gerar história. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Criar Livro com IA</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Livro"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Tema (ex: amizade, aventura...)"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Gerando...' : 'Gerar livro com IA'}
        </button>
      </form>

      {generated && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Livro Gerado</h2>
          <p>{generated}</p>
        </div>
      )}
    </div>
  );
}
