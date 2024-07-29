function loadUserDashboard() {
  const user = firebase.auth().currentUser;

  if (user) {
    const userId = user.uid;
    const userRef = db.collection('usuarios').doc(userId);

    userRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        document.getElementById('lessons-completed').textContent = data.lessonsCompleted || 0;
        document.getElementById('exercises-taken').textContent = data.exercisesTaken || 0;
        document.getElementById('total-score').textContent = `${data.totalScore || 0}%`;
        
        // Atualize os gráficos aqui se necessário
        updateCharts(data);
      } else {
        console.log("Nenhum documento encontrado!");
      }
    }).catch((error) => {
      console.error("Erro ao obter documento:", error);
    });
  }
}

function updateCharts(data) {
  const lessonsChartCtx = document.getElementById('lessonsChart').getContext('2d');
  const exercisesChartCtx = document.getElementById('exercisesChart').getContext('2d');
  const scoreChartCtx = document.getElementById('scoreChart').getContext('2d');
  const progressChartCtx = document.getElementById('progressChart').getContext('2d');

  new Chart(lessonsChartCtx, {
    type: 'bar',
    data: {
      labels: ['Aulas Concluídas'],
      datasets: [{
        label: 'Aulas',
        data: [data.lessonsCompleted || 0],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    }
  });

  new Chart(exercisesChartCtx, {
    type: 'bar',
    data: {
      labels: ['Exercícios Realizados'],
      datasets: [{
        label: 'Exercícios',
        data: [data.exercisesTaken || 0],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }]
    }
  });

  new Chart(scoreChartCtx, {
    type: 'bar',
    data: {
      labels: ['Pontuação Total'],
      datasets: [{
        label: 'Pontuação',
        data: [data.totalScore || 0],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
      }]
    }
  });

  new Chart(progressChartCtx, {
    type: 'line',
    data: {
      labels: ['Progresso'],
      datasets: [{
        label: 'Progresso',
        data: [data.totalScore || 0],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  loadUserDashboard();
});
