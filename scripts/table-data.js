const teamPositionA = [
    {
      name: 'Royal Flames',
      playedGames: 1,
      scores: 3
    },
    {
      name: 'Navi',
      playedGames: 1,
      scores: 0,
    },
    {
      name: 'Heroic',
      playedGames: 2,
      scores: 6
    },
    {
      name: 'Astralis',
      playedGames: 3,
      scores: 9
    },
    {
      name: 'Ence',
      playedGames: 3,
      scores: 6
    },
    {
      name: 'Game Legion',
      playedGames: 0,
      scores: 0
    }
  ];
  
  // Сортируем команды по убыванию очков
  teamPositionA.sort((a, b) => b.scores - a.scores);
  
  // Получаем таблицу команд
  const table = document.getElementById('team-table');
  
  // Создаем строки для каждой команды и обновляем их данные
  teamPositionA.forEach((team, index) => {
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
  
  // Функция для обновления таблицы
  function updateTable() {
    // Удаляем текущие строки из таблицы
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
  
    // Обновляем данные и сортируем команды
    teamPositionA.forEach((team, index) => {
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
  
  // Пример обновления количества очков команды "Navi"
  teamPositionA.find(team => team.name === 'Navi').scores = 3;
  
  // Вызываем функцию обновления таблицы
  updateTable();