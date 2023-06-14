const players= [{
    name: 'Aleksii',
    place:1,
    rating:3.26,
    image:'images/r1lty.png',
    team:'images/mvs.png'
},{
    name: 'NicKai',
    place:3,
    rating: 1.52,
    image:'images/nikita.png',
    team:'images/new-royalflames.png'
},{
    name: 'Lampo4ka',
    place:2,
    rating:0.00,
    image:'images/dima.png',
    team:'images/dzuz.png'
},{
    name:'R1lty',
    rating:2.39,
    place:2,
    image:'images/r1lty.png',
    team:'images/new-royalflames.png'
},{
    name:'franc',
    rating:0.00,
    place:3,
    image:'images/franc.png',
    team:'images/ЧлEn0s0s1Ki228.png',
},{
    name:'TreiX',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/mvs.png'
},{
    name:'Максим',
    rating:0.36,
    place:0,
    image:'images/unknown.png',
    team:'images/snusitis.png'
},{
    name:'A1ziks',
    rating:0.91,
    place:3,
    image:'images/unknown.png',
    team:'images/snusitis.png'
},{
    name:'Le{gg}enda',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/underAlus.png'
},{
    name:'-47',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/underAlus.png'
},{
    name:'Эрик',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/beasts.png'
},{
    name:'Сенкин',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/beasts.png'
},{
    name:'Илья',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/recoilsTitans.png'
},{
    name:'Никита',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/recoilsTitans.png'
},{
    name:'Obliq',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/ЧлEn0s0s1Ki228.png'
},{
    name:'adunnond',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/ЧлEn0s0s1Ki228.png'
},{
    name:'Женя',
    rating:1.02,
    place:0,
    image:'images/unknown.png',
    team:'images/kurushimi.png'
},{
    name:'PraiZet',
    rating:1.92,
    place:3,
    image:'images/vitalja.png',
    team:'images/kurushimi.png'
},{
    name:'Женя',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/kurushimi.png'
},{
    name:'Marat',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/polinaFans.png'
},{
    name:'rofclick',
    rating:1.83,
    place:3,
    image:'images/rofclick.png',
    team:'images/polinaFans.png'
},{
    name:'Arturan',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/polinaFans.png'
},{
    name:'leps',
    rating:0.00,
    place:0,
    image:'images/unknown.png',
    team:'images/polinaFans.png'
},{
    name:'dhssyxclairs',
    rating:1.45,
    place:3,
    image:'images/dhssyxclairs.png',
    team:'images/kk.png'
},{
    name:'Rinkēvičs',
    rating:1.67,
    place:3,
    image:'images/rink.png',
    team:'images/kk.png'
}]
players.sort((a, b) => b.rating - a.rating);
const top3_players = players.slice(0, 3);

console.log(top3_players);

let playersHTML = '';

top3_players.forEach((top3_players)=>{
    playersHTML += `
    <div class="plashka">
        <div class="bg-square">
            <div class="upp-square">
                <div class="rating">${top3_players.rating} Rating</div>
                <div class="player-image-area">
                    <img class="player-img" src="${top3_players.image}" alt="">
                </div>
                 <div class="circle">
                    <div class="incircle-number">#${top3_players.place}</div>
                </div>
                <div class="nickname">${top3_players.name}</div>
                <div class="team-logo-area">
                     <img class="team-logo" src="${top3_players.team}" alt="">
                </div>
            </div>
        </div>
    </div>
    `;
})

document.querySelector('.js-players-grid').innerHTML = playersHTML;