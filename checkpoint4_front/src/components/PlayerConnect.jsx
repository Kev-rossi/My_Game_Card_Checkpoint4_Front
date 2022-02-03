import axios from "axios";
import { useEffect, useState } from "react";

export const PlayerConnect = ({ connect, setConnect}) => {
const [Gamer_tag, setGamer_tag] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [validPassword, setValidPassword] = useState('');
const [players, setPlayers] = useState('');

useEffect(() => {
  axios.get('http://localhost:5000/players')
  .then(({data}) => {
    setPlayers(data)
  })
}, [])
console.log(players);

const handleSubmit = (e) => {
  e.preventDefault();
  if (password !== validPassword) {
    setError('Mot de passe incorrect');
  }
  else {
    const body = {
      Gamer_tag: Gamer_tag,
      email: email,
      password: password
    };
    const url= 'http://localhost:5000/players';
    axios.post(url, body)
    .then(({data}) => {
      if(data.error) setError(data.error);
    })
    console.log(url);
  }
};

return (
  <div className={connect ? 'connect-window' : 'connect-hidden'}>
      <div
        className="connect-close"
        role="button"
        tabIndex={0}
        onClick={() => setConnect(false)}
      ></div>
      <h2 className="connect-title">Register</h2>
      <form className="connect-form" onSubmit={handleSubmit}>
        <div className="connect-line">
          <label htmlFor="password">Gamer Tag</label>
          <input
            className="connect-input"
            type="text"
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
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register-line-password">
          <label htmlFor="password">Mot de passe</label>
          <input
            className="register-input"
            type="password"
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