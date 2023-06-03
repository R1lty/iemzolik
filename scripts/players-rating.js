const players= [{
    name: 'Aleksi',
    place:2,
    rating:0.12,
    image:'images/dima.png',
    team:'images/mvs.png'
},{
    name: 'NicKaJ',
    place:1,
    rating:2.29,
    image:'images/nikita.png',
    team:'images/new-royalFlames.png'
},
{
    name: 'Lampo4ka',
    place:2,
    rating:2.23,
    image:'images/dima.png',
    team:'images/dzuz.png'
},{
    name:'R1lty',
    rating:0.02,
    place:1,
    image:'images/r1lty.png',
    team:'images/royalFlames.png'
},
{
    name:'franc',
    rating:1.98,
    place:3,
    image:'images/franc.png',
    team:'images/mvs.png',
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