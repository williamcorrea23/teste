// Inicializar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDwNC4QWaBQYqvayl98oMArcGdYV0JuqSk",
    authDomain: "elearning-568mbq.firebaseapp.com",
    projectId: "elearning-568mbq",
    storageBucket: "elearning-568mbq.appspot.com",
    messagingSenderId: "956581108104",
    appId: "1:956581108104:web:2be9a9b0c5978cd4b3823d",
    measurementId: "G-WLB4FBXE9R"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Função para carregar dados do perfil do usuário
function loadUserProfile() {
  const user = firebase.auth().currentUser;

  if (user) {
    const userId = user.uid;
    const userRef = db.collection('usuarios').doc(userId);

    userRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        document.getElementById('user-name').textContent = data.nome || 'Nome do Usuário';
        document.getElementById('user-email').textContent = data.email || 'Email do Usuário';
      } else {
        console.log("Nenhum documento encontrado!");
      }
    }).catch((error) => {
      console.error("Erro ao obter documento:", error);
    });
  }
}

// Função para editar o perfil do usuário
function editProfile() {
  const user = firebase.auth().currentUser;
  if (user) {
    const userId = user.uid;
    const newName = prompt('Digite seu novo nome:');
    const newEmail = prompt('Digite seu novo email:');

    db.collection('usuarios').doc(userId).update({
      nome: newName,
      email: newEmail
    }).then(() => {
      loadUserProfile();
      alert('Perfil atualizado com sucesso!');
    }).catch((error) => {
      console.error('Erro ao atualizar perfil:', error);
    });
  }
}

// Função para carregar dados do dashboard do usuário
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

// Função para atualizar os gráficos do dashboard
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

// Carregar o perfil e dashboard ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  loadUserProfile();
  loadUserDashboard();
});
