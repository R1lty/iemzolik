const gameinfo =[{
    team1:'',
    team2:'',
    team1_image:'images/new-royalflames.png',
    team2_image:'images/snusitis.png',

    group:'ГРУППА А',
    score:'1 : 0',
    time:'20:15',
    tech_loss:"",
    data:'09.06'
},
,{
  team1:'',
  team2:'',
  team1_image:'images/new-royalflames.png',
  team2_image:'images/jora.png',

  group:'ГРУППА А',
  score:'1 : 0',
  time:'20:30',
  tech_loss:"",
  data:'10.06'
},
{
  team1:'',
  team2:'',
  team1_image:'images/kurushimi.png',
  team2_image:'images/dzuz.png',

  group:'ГРУППА B',
  score:'1 : 0',
  time:'22:30',
  tech_loss:"",
  data:'10.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/dzuz.png',
  team2_image:'images/kk.png',

  group:'ГРУППА B',
  score:'0 : 1',
  time:'21:15',
  tech_loss:"",
  data:'11.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/snusitis.png',
  team2_image:'images/jora.png',

  group:'ГРУППА A',
  score:'0 : 1',
  time:'22:00',
  tech_loss:"",
  data:'11.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/new-royalflames.png',
  team2_image:'images/polinaFans.png',

  group:'ГРУППА A',
  score:'0 : 1',
  time:'20:00',
  tech_loss:"",
  data:'12.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/new-royalflames.png',
  team2_image:'images/gvatar.png',

  group:'ГРУППА A',
  score:'1 : 0',
  time:'20:30',
  tech_loss:"",
  data:'12.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/snusitis.png',
  team2_image:'images/polinaFans.png',

  group:'ГРУППА A',
  score:'0 : 1',
  time:'21:00',
  tech_loss:"",
  data:'12.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/snusitis.png',
  team2_image:'images/gvatar.png',

  group:'ГРУППА A',
  score:'0 : 1',
  time:'21:30',
  tech_loss:"",
  data:'12.06'
},
{
  team1:'',
  team2:'',
  team1_image:'images/mvs.png',
  team2_image:'images/dzuz.png',

  group:'ГРУППА B',
  score:'1 : 0',
  time:'22:15',
  tech_loss:"",
  data:'12.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/kk.png',
  team2_image:'images/mvs.png',

  group:'"Это было изи" - слова Aleksi после победы',
  score:'0 : 1',
  time:'22:45',
  tech_loss:"",
  data:'12.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/jora.png',
  team2_image:'images/gvatar.png',

  group:'ГРУППА А',
  score:'0 : 1',
  time:'21:00',
  tech_loss:"",
  data:'13.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/underAlus.png',
  team2_image:'images/dzuz.png',

  group:'ГРУППА B',
  score:'0 : 1',
  time:'21:00',
  tech_loss:"",
  data:'13.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/ЧлEn0s0s1Ki228.png',
  team2_image:'images/dzuz.png',

  group:'ГРУППА B',
  score:'0 : 1',
  time:'21:30',
  tech_loss:"",
  data:'13.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/ЧлEn0s0s1Ki228.png',
  team2_image:'images/mvs.png',

  group:'ГРУППА B',
  score:'0 : 1',
  time:'23:00',
  tech_loss:"",
  data:'13.06'
}
,{
  team1:'',
  team2:'',
  team1_image:'images/polinaFans.png',
  team2_image:'images/gvatar.png',

  group:'ГРУППА А',
  score:'1 : 0',
  time:'23:30',
  tech_loss:"",
  data:'13.06'
}
,{
  team1:'',
  team2:'',
  team1_image:'images/new-royalflames.png',
  team2_image:'images/beasts.png',

  group:'ГРУППА А',
  score:'1 : 0',
  time:'21:30',
  tech_loss:"",
  data:'14.06'
}
,{
  team1:'',
  team2:'',
  team1_image:'images/underAlus.png',
  team2_image:'images/ЧлEn0s0s1Ki228.png',

  group:'ГРУППА B',
  score:'1 : 0',
  time:'22:00',
  tech_loss:"",
  data:'14.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/underAlus.png',
  team2_image:'images/kk.png',

  group:'ГРУППА B',
  score:'0 : 1',
  time:'23:30',
  tech_loss:"",
  data:'14.06'
},
,{
  team1:'',
  team2:'',
  team1_image:'images/jora.png',
  team2_image:'images/polinaFans.png',

  group:'ГРУППА A',
  score:'0 : 1',
  time:'21:30',
  tech_loss:"Техническое поражение",
  data:'16.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/underAlus.png',
  team2_image:'images/mvs.png',

  group:'ГРУППА B',
  score:'VS',
  time:'22:00',
  tech_loss:"",
  data:'16.06'
},{
  team1:'',
  team2:'',
  team1_image:'images/lenin2.png',
  team2_image:'images/lenin.png',

  group:'"Revolūcija" - голосом Пильки',
  score:'VS',
  time:'Весь день',
  tech_loss:"",
  data:'25.10.1917'
}
]
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
        <div class="time">${gameinfo.tech_loss}</div>
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
