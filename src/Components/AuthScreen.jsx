import React, { useState } from 'react';
import axios from 'axios';
import md5 from 'md5';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [gravatarUrl, setGravatarUrl] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    const emailHash = md5(email.trim().toLowerCase());
    const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}`;

    try {
      const githubResponse = await axios.get(`https://api.github.com/search/users?q=${email}`);
      const githubUser = githubResponse.data.items[0];

      let repos = [];
      if (githubUser) {
        const reposResponse = await axios.get(githubUser.repos_url);
        repos = reposResponse.data;
      }

      setGravatarUrl(gravatarUrl);
      setRepositories(repos);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Could not fetch data. Please try again.');
    }
  };

  return (
    <div className="auth-screen">
      <form className="auth-screen__form" onSubmit={handleSubmit}>
        <div className="auth-screen__group">
          <label className="auth-screen__label" htmlFor="email">Email:</label>
          <input
            className="auth-screen__input"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
        <button className="auth-screen__button" type="submit">Submit</button>
      </form>
      {error && <p className="auth-screen__error">{error}</p>}
      {gravatarUrl && (
        <div className="auth-screen__gravatar">
          <img src={gravatarUrl} alt="Gravatar" />
        </div>
      )}
      {repositories.length > 0 && (
        <div className="auth-screen__repos">
          <h3>GitHub Repositories:</h3>
          <ul>
            {repositories.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AuthScreen;