const gameinfo =[{
    team1:'',
    team2:'',
    team1_image:'images/new-royalFlames.png',
    team2_image:'images/snusitis.png',

    group:'ГРУППА А',
    score:'VS',
    time:'20:15',
    data:'10.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/recoilsTitans.png',
  team2_image:'images/snusitis.png',

  group:'ГРУППА А',
  score:'VS',
  time:'20:15',
  data:'10.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/recoilsTitans.png',
  team2_image:'images/new-royalFlames.png',

  group:'ГРУППА А',
  score:'VS',
  time:'20:15',
  data:'10.06'
}]
gameinfo.sort();
gameinfo.reverse();


let gameinfoHTML = '';
gameinfo.forEach((gameinfo) => {
  gameinfoHTML += `
    <div class="matches-area">
      <div class="left-section">
        <div class="image-area">
          <img class="team-logo" src="${gameinfo.team1_image}" alt="">
        </div>
        <div class="team-name">${gameinfo.team1}</div>
      </div>
      <div class="middle-section">
        <div class="group">${gameinfo.group}</div>
        <div class="score">${gameinfo.score}</div>
        <div class="time">${gameinfo.time}</div>
        <div class="data">${gameinfo.data}</div>
      </div>
      <div class="right-section">
        <div class="image-area">
          <img class="team-logo" src="${gameinfo.team2_image}" alt="">
        </div>
        <div class="team-name">${gameinfo.team2}</div>
      </div>
    </div>
  `;
});

document.querySelector('.js-matches-grid').innerHTML = gameinfoHTML;
