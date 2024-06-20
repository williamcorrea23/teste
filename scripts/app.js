 document.getElementById('voice-btn').addEventListener('click', () => {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'pt-BR';
      recognition.start();
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('user-input').value = transcript;
      };
    });

    // Defina os objetos de aulas e exercícios
    const lessons = {
      'Matemática': {
        id: 'matematica',
        title: "Matemática",
        details: "Selecione uma aula para saber mais:\n1. Álgebra\n2. Geometria\n3. Trigonometria\n4. Cálculo\n5. Estatística\n6. Probabilidade\n7. Álgebra Linear\n8. Equações Diferenciais\n9. Números Complexos\n10. Teoria dos Números",
        subtopics: {
          '1': "+Conteúdo Enem de Álgebra.",
          '2': "+Conteúdo Enem de Geometria.",
          '3': "+Conteúdo Enem de Trigonometria.",
          '4': "+Conteúdo Enem de Cálculo.",
          '5': "+Conteúdo Enem de Estatística.",
          '6': "+Conteúdo Enem de Probabilidade.",
          '7': "+Conteúdo Enem de Álgebra Linear.",
          '8': "+Conteúdo Enem de Equações Diferenciais.",
          '9': "+Conteúdo Enem de Números Complexos.",
          '10': "+Conteúdo Enem de Teoria dos Números."
        }
      },
      'Linguagens': {
        id: 'linguagens',
        title: "Linguagens",
        details: "Selecione uma aula para saber mais:\n1. Português\n2. Inglês\n3. Literatura\n4. Técnicas de Escrita\n5. Gramática\n6. Fonética\n7. Semântica\n8. Sintaxe\n9. Interpretação de Texto\n10. Oratória",
        subtopics: {
          '1': "+Conteúdo Enem de Português.",
          '2': "+Conteúdo Enem de Inglês.",
          '3': "+Conteúdo Enem de Literatura.",
          '4': "+Conteúdo Enem de Técnicas de Escrita.",
          '5': "+Conteúdo Enem de Gramática.",
          '6': "+Conteúdo Enem de Fonética.",
          '7': "+Conteúdo Enem de Semântica.",
          '8': "+Conteúdo Enem de Sintaxe.",
          '9': "+Conteúdo Enem de Interpretação de Texto.",
          '10': "+Conteúdo Enem de Oratória."
        }
      },
      'Ciências Humanas': {
        id: 'humanas',
        title: "Ciências Humanas",
        details: "Selecione uma aula para saber mais:\n1. História\n2. Geografia\n3. Sociologia\n4. Filosofia\n5. Antropologia\n6. Ciência Política\n7. Economia\n8. Psicologia\n9. Direito\n10. Ética",
        subtopics: {
          '1': "+Conteúdo Enem de História.",
          '2': "+Conteúdo Enem de Geografia.",
          '3': "+Conteúdo Enem de Sociologia.",
          '4': "+Conteúdo Enem de Filosofia.",
          '5': "+Conteúdo Enem de Antropologia.",
          '6': "+Conteúdo Enem de Ciência Política.",
          '7': "+Conteúdo Enem de Economia.",
          '8': "+Conteúdo Enem de Psicologia.",
          '9': "+Conteúdo Enem de Direito.",
          '10': "+Conteúdo Enem de Ética."
        }
      },
      'Ciências da Natureza': {
        id: 'natureza',
        title: "Ciências da Natureza",
        details: "Selecione uma aula para saber mais:\n1. Física\n2. Química\n3. Biologia\n4. Astronomia\n5. Ciências da Terra\n6. Ciências Ambientais\n7. Genética\n8. Ecologia\n9. Geologia\n10. Oceanografia",
        subtopics: {
          '1': "+Conteúdo Enem de Física.",
          '2': "+Conteúdo Enem de Química.",
          '3': "+Conteúdo Enem de Biologia.",
          '4': "+Conteúdo Enem de Astronomia.",
          '5': "+Conteúdo Enem de Ciências da Terra.",
          '6': "+Conteúdo Enem de Ciências Ambientais.",
          '7': "+Conteúdo Enem de Genética.",
          '8': "+Conteúdo Enem de Ecologia.",
          '9': "+Conteúdo Enem de Geologia.",
          '10': "+Conteúdo Enem de Oceanografia."
        }
      },
      'Redação': {
        id: 'redacao',
        title: "Redação",
        details: "Selecione uma aula para saber mais:\n1. Escrevendo uma Redação\n2. Estrutura da Redação\n3. Tese\n4. Desenvolvimento de Argumentos\n5. Introdução e Conclusão\n6. Revisão\n7. Escrita Argumentativa\n8. Escrita Persuasiva\n9. Escrita Expositiva\n10. Escrita Narrativa",
        subtopics: {
          '1': "+Conteúdo Enem de Escrevendo uma Redação.",
          '2': "+Conteúdo Enem de Estrutura da Redação.",
          '3': "+Conteúdo Enem de Tese.",
          '4': "+Conteúdo Enem de Desenvolvimento de Argumentos.",
          '5': "+Conteúdo Enem de Introdução e Conclusão.",
          '6': "+Conteúdo Enem de Revisão.",
          '7': "+Conteúdo Enem de Escrita Argumentativa.",
          '8': "+Conteúdo Enem de Escrita Persuasiva.",
          '9': "+Conteúdo Enem de Escrita Expositiva.",
          '10': "+Conteúdo Enem de Escrita Narrativa."
        }
      }
    };

    const exercises = {
      'Matemática': {
        title: "Exercícios de Matemática",
        details: "Selecione um exercício para começar:\n1. Exercício de Álgebra\n2. Exercício de Geometria\n3. Exercício de Trigonometria\n4. Exercício de Cálculo\n5. Exercício de Estatística\n6. Exercício de Probabilidade\n7. Exercício de Álgebra Linear\n8. Exercício de Equações Diferenciais\n9. Exercício de Números Complexos\n10. Exercício de Teoria dos Números",
      },
      'Linguagens': {
        title: "Exercícios de Linguagens",
        details: "Selecione um exercício para começar:\n1. Exercício de Português\n2. Exercício de Inglês\n3. Exercício de Literatura\n4. Exercício de Técnicas de Escrita\n5. Exercício de Gramática\n6. Exercício de Fonética\n7. Exercício de Semântica\n8. Exercício de Sintaxe\n9. Exercício de Interpretação de Texto\n10. Exercício de Oratória",
      },
      'Ciências Humanas': {
        title: "Exercícios de Ciências Humanas",
        details: "Selecione um exercício para começar:\n1. Exercício de História\n2. Exercício de Geografia\n3. Exercício de Sociologia\n4. Exercício de Filosofia\n5. Exercício de Antropologia\n6. Exercício de Ciência Política\n7. Exercício de Economia\n8. Exercício de Psicologia\n9. Exercício de Direito\n10. Exercício de Ética",
      },
      'Ciências da Natureza': {
        title: "Exercícios de Ciências da Natureza",
        details: "Selecione um exercício para começar:\n1. Exercício de Física\n2. Exercício de Química\n3. Exercício de Biologia\n4. Exercício de Astronomia\n5. Exercício de Ciências da Terra\n6. Exercício de Ciências Ambientais\n7. Exercício de Genética\n8. Exercício de Ecologia\n9. Exercício de Geologia\n10. Exercício de Oceanografia",
      },
      'Redação': {
        title: "Exercícios de Redação",
        details: "Selecione um exercício para começar:\n1. Exercício de Escrevendo uma Redação\n2. Exercício de Estrutura da Redação\n3. Exercício de Tese\n4. Exercício de Desenvolvimento de Argumentos\n5. Exercício de Introdução e Conclusão\n6. Exercício de Revisão\n7. Exercício de Escrita Argumentativa\n8. Exercício de Escrita Persuasiva\n9. Exercício de Escrita Expositiva\n10. Exercício de Escrita Narrativa",
      }
    };

    // Defina as funções principais do chatbot
    let currentFunction = '';
    let currentTopic = '';
    let currentPrompt = '';
    let userId = 'user123'; // Isso deve ser atribuído dinamicamente em uma aplicação real
    let score = 0;
    let lessonsCompleted = 0;
    let exercisesTaken = 0;

    const agentConfig = {
      'Matemática': {
        id: 'gpt-agent-id-matematica',
        prompt: {
          exercise: 'Gere 15 questões de exercícios com 5 opções cada sobre Conteúdo de Matemática Abordado no ENEM.',
        }
      },
      'Linguagens': {
        id: 'gpt-agent-id-linguagens',
        prompt: {
          exercise: 'Gere 15 questões de exercícios com 5 opções cada sobre Conteúdo de Linguagens da Língua Portuguesa Abordado no ENEM.',
        }
      },
      'Ciências Humanas': {
        id: 'gpt-agent-id-humanas',
        prompt: {
          exercise: 'Gere 15 questões de exercícios com 5 opções cada sobre Conteúdo de Ciências Humanas Abordado no ENEM.',
        }
      },
      'Ciências da Natureza': {
        id: 'gpt-agent-id-natureza',
        prompt: {
          exercise: 'Gere 15 questões de exercícios com 5 opções cada sobre Conteúdo de Ciências da Natureza Abordado no ENEM.',
        }
      },
      'Redação': {
        id: 'gpt-agent-id-redacao',
        prompt: {
          exercise: 'Gere 15 questões de exercícios com 5 opções cada sobre Conteúdo de Redação Abordado no ENEM.',
        }
      }
    };

    function showChat(topic, type = 'lesson') {
      currentTopic = topic;
      currentFunction = '';
      currentPrompt = '';
      clearChat();
      document.querySelector('.section.active').classList.remove('active');
      document.getElementById('chatbot').classList.add('active');
      if (type === 'lesson' && lessons[topic]) {
        displayMessage(`Bem-vindo ao curso de ${lessons[topic].title}! Por favor, selecione uma aula para começar:\n${lessons[topic].details}`);
      } else if (type === 'exercise' && exercises[topic]) {
        displayMessage(`Bem-vindo aos exercícios de ${exercises[topic].title}! Por favor, selecione um exercício para começar:\n${exercises[topic].details}`);
      } else {
        displayMessage('Erro: Tópico ou tipo selecionado inválido.');
      }
    }

    function showSection(sectionId) {
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
      // Redefinir variáveis de chat e limpar chat
      currentFunction = '';
      currentPrompt = '';
      currentTopic = '';
      clearChat();
    }

    function goBack() {
      currentFunction = '';
      currentPrompt = '';
      clearChat();
      document.querySelector('.section.active').classList.remove('active');
      const lessonsSection = document.getElementById('lessons');
      if (lessonsSection) {
        lessonsSection.classList.add('active');
      }
      const chatBox = document.getElementById('chat-box');
      if (chatBox) {
        chatBox.innerHTML = '<div class="message bot-message" id="bot-welcome-message">Olá! Vamos começar.</div>';
      }
    }

    function clearChat() {
      const chatBox = document.getElementById('chat-box');
      if (chatBox) {
        chatBox.innerHTML = '<div class="message bot-message" id="bot-welcome-message">Olá! Vamos começar.</div>';
      }
    }

    function displayMessage(message) {
      const chatBox = document.getElementById('chat-box');
      if (chatBox) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'bot-message');
        messageDiv.innerText = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    }

    function sendMessage() {
      const userInput = document.getElementById('user-input').value;
      if (userInput.trim() === '') return;

      // Exibir mensagem do usuário
      const chatBox = document.getElementById('chat-box');
      if (chatBox) {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('message', 'user-message');
        userMessageDiv.innerText = userInput;
        chatBox.appendChild(userMessageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
      }

      // Limpar entrada
      const userInputField = document.getElementById('user-input');
      if (userInputField) {
        userInputField.value = '';
      }

      if (currentFunction === '') {
        if (userInput.toLowerCase() === 'exercício') {
          currentFunction = 'exercise';
          initiateExercise();
        } else {
          displayMessage('Erro: Por favor, selecione uma função válida: Exercício.');
        }
        return;
      }

      // Avaliar a resposta do usuário
      evaluateResponse(userInput);
    }

    async function initiateExercise() {
      const agent = agentConfig[currentTopic];
      const prompt = agent.prompt[currentFunction];
      currentPrompt = prompt;

      const message = await callGPTAssistant('');
      displayMessage(message);
    }

    async function evaluateResponse(userInput) {
      const message = await callGPTAssistant(userInput);

      if (message.includes('correto') || message.includes('parabéns')) {
        displayMessage('Parabéns! Isso está correto.');
        updateScore(userId, 3);
      } else {
        displayMessage(`Desculpe, isso está incorreto. A resposta correta é: ${message}`);
      }
    }

    async function callGPTAssistant(userInput) {
      const apiKey = 'sk-proj-rsB70Vd2hYtB27F9nlZsT3BlbkFJYRGOuAjMPapAaUaLFqCa'; // Substitua pela sua chave de API OpenAI
      const endpoint = 'https://api.openai.com/v1/chat/completions';
      const prompt = `${currentPrompt} ${userInput}`;

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo-0613",
            messages: [{
              role: "user",
              content: prompt
            }],
            max_tokens: 850,
            temperature: 0.7,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Erro na resposta:', errorText);
          return `Erro de resposta da API: ${response.status} - ${response.statusText}`;
        }

        const data = await response.json();
        if (data.choices && data.choices.length > 0) {
          return data.choices[0].message.content.trim();
        }

        return 'Resposta inesperada da API.';
      } catch (error) {
        console.error('Erro na requisição:', error);
        return 'Erro ao chamar o assistente GPT.';
      }
    }

    function updateScore(userId, points) {
      score += points;
      lessonsCompleted += 1;
      exercisesTaken += 1;
      document.getElementById('lessons-completed').textContent = lessonsCompleted;
      document.getElementById('exercises-taken').textContent = exercisesTaken;
      document.getElementById('total-score').textContent = `${score * 10}%`;
      displayMessage(`Sua pontuação atual é: ${score}`);
    }

// Função para iniciar os exercícios
function startExercise(topic) {
  currentTopic = topic;
  currentFunction = 'exercise';
  currentPrompt = agentConfig[topic].prompt.exercise;
  showSection('chatbot');
  displayMessage(`Bem-vindo aos exercícios de ${exercises[topic].title}! Por favor, selecione um exercício digitando o número correspondente.\n${exercises[topic].details}`);
}

// Adicionar event listeners aos botões de exercício
document.querySelectorAll('[data-exercise]').forEach(item => {
  item.addEventListener('click', function () {
    const exerciseId = this.getAttribute('data-exercise');
    startExercise(exerciseId);
  });
});

// Funções auxiliares
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  clearChat();
}

function clearChat() {
  const chatBox = document.getElementById('chat-box');
  if (chatBox) {
    chatBox.innerHTML = '<div class="message bot-message" id="bot-welcome-message">Olá! Vamos começar.</div>';
  }
}

function displayMessage(message) {
  const chatBox = document.getElementById('chat-box');
  if (chatBox) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'bot-message');
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}


    document.addEventListener('DOMContentLoaded', function () {
      const navLinks = document.querySelectorAll('.nav-link');
      const sectionLinks = document.querySelectorAll('[data-section]');
      const lessonLinks = document.querySelectorAll('[data-lesson]');
      const exerciseLinks = document.querySelectorAll('[data-exercise]');
      const sendButton = document.getElementById('send-btn');
      const userInput = document.getElementById('user-input');
      const loginForm = document.getElementById('loginForm');

      if (navLinks) {
        navLinks.forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
            const targetSection = document.getElementById(this.getAttribute('data-section'));
            if (targetSection) {
              targetSection.classList.add('active');
            }
            // Redefinir variáveis de chat e limpar chat
            currentFunction = '';
            currentPrompt = '';
            currentTopic = '';
            clearChat();
          });
        });
      }

      if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
          const dashboard = document.getElementById('dashboard');
          if (dashboard) {
            dashboard.classList.add('active');
          }
        });
      }

      if (sectionLinks) {
        sectionLinks.forEach(item => {
          item.addEventListener('click', function (e) {
            document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
            const targetSection = document.getElementById(this.getAttribute('data-section'));
            if (targetSection) {
              targetSection.classList.add('active');
            }
            // Redefinir variáveis de chat e limpar chat
            currentFunction = '';
            currentPrompt = '';
            currentTopic = '';
            clearChat();
          });
        });
      }

      if (lessonLinks) {
        lessonLinks.forEach(item => {
          item.addEventListener('click', function () {
            const lessonId = this.getAttribute('data-lesson');
            document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
            const targetLesson = document.getElementById(lessonId);
            if (targetLesson) {
              targetLesson.classList.add('active');
            }
            // Redefinir variáveis de chat e limpar chat
            currentFunction = '';
            currentPrompt = '';
            currentTopic = '';
            clearChat();
          });
        });
      }

      if (exerciseLinks) {
        exerciseLinks.forEach(item => {
          item.addEventListener('click', function () {
            const exerciseId = this.getAttribute('data-exercise');
            document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
            const targetExercise = document.getElementById(exerciseId);
            if (targetExercise) {
              targetExercise.classList.add('active');
            }
            // Redefinir variáveis de chat e limpar chat
            currentFunction = '';
            currentPrompt = '';
            currentTopic = '';
            clearChat();
          });
        });
      }

      if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', function (e) {
          if (e.key === 'Enter') {
            sendMessage();
          }
        });
      }

      // Inicialização do Chart.js
      window.onload = function () {
        const ctxLessons = document.getElementById('lessonsChart')?.getContext('2d');
        if (ctxLessons) {
          const lessonsChart = new Chart(ctxLessons, {
            type: 'bar',
            data: {
              labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
              datasets: [{
                label: 'Aulas Concluídas',
                data: [5, 10, 15, 20, 25, 30, 35],
                backgroundColor: '#009739' // Verde da bandeira do Brasil
              }]
            }
          });
        }

        const ctxQuizzes = document.getElementById('exercisesChart')?.getContext('2d');
        if (ctxQuizzes) {
          const exercisesChart = new Chart(ctxQuizzes, {
            type: 'line',
            data: {
              labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
              datasets: [{
                label: 'Exercícios Realizados',
                data: [1, 3, 2, 5, 4, 6, 5],
                borderColor: '#009739', // Verde da bandeira do Brasil
                fill: false
              }]
            }
          });
        }

        const ctxScore = document.getElementById('scoreChart')?.getContext('2d');
        if (ctxScore) {
          const scoreChart = new Chart(ctxScore, {
            type: 'pie',
            data: {
              labels: ['Pontuação', 'Restante'],
              datasets: [{
                data: [85, 15],
                backgroundColor: ['#009739', '#e9ecef'] // Verde e cinza claro
              }]
            }
          });
        }

        const ctxProgress = document.getElementById('progressChart')?.getContext('2d');
        if (ctxProgress) {
          const progressChart = new Chart(ctxProgress, {
            type: 'doughnut',
            data: {
              labels: ['Concluído', 'Restante'],
              datasets: [{
                data: [50, 50],
                backgroundColor: ['#009739', '#e9ecef'] // Verde e cinza claro
              }]
            }
          });
        }
      }
    });
