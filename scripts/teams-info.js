const teams = [
  {
    image: 'images/new-royalflames.png',
    player1: 'R1lty',
    player2: 'NicKaJ'
  },
  {
    image: 'images/dzuz.png',
    player1: 'Lampo4ka',
    player2: 'Rutra_FM'
  },
  {
    image: 'images/team2.png',
    player1: 'Lampo4ka',
    player2: 'Rutra_FM'
  }
];

let teamsHTML = '';
teams.forEach(team => {
  teamsHTML += `
    <div class="teams-area">
      <img class="pic" src="${team.image}" alt="">
      <div class="line1">${team.player1}</div>
      <div class="line2">${team.player2}</div>
    </div>
  `;
});

document.querySelector('.js-teams-grid').innerHTML = teamsHTML;
