const players= [{
    name: 'Aleksi',
    place:1,
    rating:2.12,
    image:'images/dima.png',
    team:'images/mvs.png'
},{
    name: 'NicKaJ',
    place:2,
    rating:1.09,
    image:'images/nikita.png',
    team:'images/royalFlames.png'
},
{
    name: 'Lampo4ka',
    place:3,
    rating:0.23,
    image:'images/dima.png',
    team:'images/dzuz.png'
}]

let playersHTML = '';

players.forEach((player)=>{
    playersHTML += `
    <div class="plashka">
        <div class="bg-square">
            <div class="upp-square">
                <div class="rating">${player.rating} Rating</div>
                <div class="player-image-area">
                    <img class="player-img" src="${player.image}" alt="">
                </div>
                 <div class="circle">
                    <div class="incircle-number">#${player.place}</div>
                </div>
                <div class="nickname">${player.name}</div>
                <div class="team-logo-area">
                     <img class="team-logo" src="${player.team}" alt="">
                </div>
            </div>
        </div>
    </div>
    `;
})

document.querySelector('.js-players-grid').innerHTML = playersHTML