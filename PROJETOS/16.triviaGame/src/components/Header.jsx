import md5 from 'crypto-js/md5';
import React from 'react';

class Header extends React.Component {
  render() {
    const parseando = JSON.parse(localStorage.getItem('state'));
    const { score, name, emailGravatar } = parseando.player;
    const transformedEmail = md5(emailGravatar).toString();
    const imgAvatar = `https://www.gravatar.com/avatar/${transformedEmail}`;

    return (
      <div className="header">
        <img src={ imgAvatar } alt="" data-testid="header-profile-picture" />
        <div className="flex-column">
          <span className="bold">Jogador</span>
          <span data-testid="header-player-name">{ name }</span>
        </div>
        <div className="flex-column">
          <span className="bold">Score</span>
          <span data-testid="header-score">
            { score }
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
