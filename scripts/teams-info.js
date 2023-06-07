const teams = [{
  image:'images/new-royalflames.png',
  player1:'R1lty',
  player2:'NicKaJ'
},{
  image:'images/new-royalflames.png',
  player1:'R1lty',
  player2:'NicKaJ'
}]
let teamsHTML = '';
teams.forEach((teams)=>{
  teamsHTML+=`
  <div class="image-area">
        <img class="team-image" src="${teams.image}" alt="">
      </div>
      <div class="first-line">${teams.player1}</div>
      <div class="second-line">${teams.player2}</div>
  `;
});
document.querySelector('.js-teams-grid').innerHTML = teamsHTML;