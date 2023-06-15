const teamPositionA = [
  {
    name: 'Royal Flames',
    playedGames: 5,
    scores: 12
  },
  {
    name: 'Sņusītis',
    playedGames: 4,
    scores: 0,
  },
  {
    name: '最も多く支払った人が勝ちです',
    playedGames: 3,
    scores: 3
  },
  {
    name: 'Жилистые звери',
    playedGames: 1,
    scores: 0
  },
  {
    name: 'POLINA FANS',
    playedGames: 3,
    scores: 9
  },
  {
    name: 'GVATAR',
    playedGames: 4,
    scores: 6
  }
];

const teamPositionB = [
  {
    name: 'MVS',
    playedGames: 3,
    scores: 9
  },
  {
    name: 'Под ALUS',
    playedGames: 3,
    scores: 3,
  },
  {
    name: 'ЧлEn0s0s1Ki228',
    playedGames: 3,
    scores: 0
  },
  {
    name: 'Kurushimi',
    playedGames: 1,
    scores: 3
  },
  {
    name: 'DZUZ',
    playedGames: 5,
    scores: 6
  },
  {
    name: 'KK E-sports',
    playedGames: 3,
    scores: 6
  }
  
  
];

// Функция для создания таблицы команд
function createTable(teamPosition, tableId) {
  // Сортируем команды по убыванию очков
  teamPosition.sort((a, b) => b.scores - a.scores);

  // Получаем таблицу команд
  const table = document.getElementById(tableId);

  // Очищаем содержимое таблицы
  table.tBodies[0].innerHTML = '';

  // Создаем строки для каждой команды и обновляем их данные
  teamPosition.forEach((team, index) => {
    const row = table.insertRow();
    const positionCell = row.insertCell();
    const nameCell = row.insertCell();
    const playedGamesCell = row.insertCell();
    const scoresCell = row.insertCell();

    positionCell.textContent = index + 1;
    nameCell.textContent = team.name;
    playedGamesCell.textContent = team.playedGames;
    scoresCell.textContent = team.scores;
  });
}

// Создаем таблицу команд A
createTable(teamPositionA, 'team-table-a');

// Создаем таблицу команд B
createTable(teamPositionB, 'team-table-b');

// Функция для обновления позиций команд в таблице
function updatePositions(teamPosition, tableId) {
  // Сортируем команды по убыванию очков
  teamPosition.sort((a, b) => b.scores - a.scores);

  // Получаем таблицу команд
  const table = document.getElementById(tableId);

  // Обновляем позиции команд в таблице
  const rows = table.tBodies[0].rows;
  for (let i = 0; i < rows.length; i++) {
    const positionCell = rows[i].cells[0];
    positionCell.textContent = i + 1;
  }
}

// Пример обновления количества очков команды "Navi" в таблице A
teamPositionA.find(team => team.name === 'Navi').scores = 3;
updatePositions(teamPositionA, 'team-table-a');

// Пример обновления количества очков команды "argus" в таблице B
teamPositionB.find(team => team.name === 'argus').scores = 4;
updatePositions(teamPositionB, 'team-table-b');
