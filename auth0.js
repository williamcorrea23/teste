let auth0 = null;

const configureClient = async () => {
  auth0 = await createAuth0Client({
    domain: 'YOUR_AUTH0_DOMAIN',
    client_id: 'YOUR_AUTH0_CLIENT_ID',
    redirect_uri: window.location.origin
  });
};

const login = async () => {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  });
};

const isAuthenticated = async () => {
  const authenticated = await auth0.isAuthenticated();
  return authenticated;
};

const getUser = async () => {
  const user = await auth0.getUser();
  return user;
};

document.getElementById('auth0-login').addEventListener('click', login);

window.onload = async () => {
  await configureClient();

  if (window.location.search.includes('code=') && window.location.search.includes('state=')) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, '/');
  }

  const authenticated = await isAuthenticated();
  if (authenticated) {
    const user = await getUser();
    console.log('User:', user);
    document.querySelector('.section.active').classList.remove('active');
    document.getElementById('dashboard').classList.add('active');
    fetchUserData(user.sub); // Use Auth0 user ID as userId
  }
};

const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3001/user/${userId}`);
    const data = await response.json();
    updateDashboard(data);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

const updateDashboard = (data) => {
  document.getElementById('lessons-completed').textContent = data.lessonsCompleted;
  document.getElementById('exercises-taken').textContent = data.exercisesTaken;
  document.getElementById('total-score').textContent = `${data.score * 10}%`;

  // Update charts with user data
  const lessonsChart = Chart.getChart('lessonsChart');
  if (lessonsChart) {
    lessonsChart.data.datasets[0].data = generateRandomData(data.lessonsCompleted); // Replace with actual data
    lessonsChart.update();
  }

  const exercisesChart = Chart.getChart('exercisesChart');
  if (exercisesChart) {
    exercisesChart.data.datasets[0].data = generateRandomData(data.exercisesTaken); // Replace with actual data
    exercisesChart.update();
  }

  const scoreChart = Chart.getChart('scoreChart');
  if (scoreChart) {
    scoreChart.data.datasets[0].data = [data.score, 100 - data.score];
    scoreChart.update();
  }

  const progressChart = Chart.getChart('progressChart');
  if (progressChart) {
    progressChart.data.datasets[0].data = [data.lessonsCompleted, 100 - data.lessonsCompleted];
    progressChart.update();
  }
};

// Helper function to generate random data for charts
const generateRandomData = (baseValue) => {
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push(baseValue + Math.floor(Math.random() * 10));
  }
  return data;
};
