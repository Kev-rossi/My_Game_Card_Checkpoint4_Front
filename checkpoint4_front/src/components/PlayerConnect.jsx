import axios from "axios";
import { useState } from "react";

const PlayerConnect = ({ connect, setConnect}) => {
  const{Gamer_tag, setGamer_tag} = useState('');
const {email, setEmail} = useState('');
const {password, setPassword} = useState('');
const [error, setError] = useState('');
const [validPassword, setValidPassword] = useState('');


const handleSubmit = async (e) => {
  e.preventDefault();
  if (password !== validPassword) {
    setError('Mot de passe incorrect');
    return null;
  }
  const body = { Gamer_tag, email, password };
const response = await axios.post
('http//localhost:5000/players', body);
if(response.data.error) setError(response.data.error);
else window.location.href = '/';
};

return (
  <div className={connect ? 'connect-window' : 'connect-hidden'}>
      <div
        className="connect-close"
        role="button"
        tabIndex={0}
        onClick={() => setConnect(false)}
      ></div>
      <h2 className="connect-title">Inscription</h2>
      <form className="connect-form" onSubmit={handleSubmit}>
        <div className="connect-line">
          <label htmlFor="password">Prénom</label>
          <input
            className="connect-input"
            type="text"
            name="password"
            id="password"
            value={Gamer_tag}
            required
            onChange={(e) => setGamer_tag(e.target.value)}
          />
        </div>
        <div className="connect-line">
          <label htmlFor="email">Email</label>
          <input
            className="connect-input"
            type="text"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="connect-line-password">
          <label htmlFor="password">Mot de passe</label>
          <input
            className="connect-input"
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="connect-line-password">
          <label htmlFor="password">Mot de passe</label>
          <input
            className="connect-input"
            type="password"
            name="password"
            id="password"
            value={validPassword}
            required
            onChange={(e) => setValidPassword(e.target.value)}
          />
        </div>
        <button className="connect-button" type="submit">
          Connect
        </button>
        {error && <p className="connect-error">{error}</p>}
      </form>
    </div>
);
};

export default PlayerConnect;