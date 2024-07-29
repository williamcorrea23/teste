document.getElementById('voice-btn').addEventListener('click', () => {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'pt-BR';
      recognition.start();
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('user-input').value = transcript;
      };
    });

const lessons = {
  'Matemática': {
    id: 'matematica',
    title: "Matemática",
    details: "Selecione uma aula para saber mais:\n1. Geometria Plana\n2. Geometria Espacial\n3. Álgebra\n4. Funções\n5. Estatística\n6. Probabilidade\n7. Matemática Financeira\n8. Trigonometria\n9. Análise Combinatória\n10. Números Complexos\n11. Polinômios\n12. Progressões\n13. Matrizes e Determinantes\n14. Sistemas Lineares\n15. Geometria Analítica",
    subtopics: {
      '1': "Geometria Plana: Áreas e perímetros de figuras planas, teorema de Tales, semelhança de triângulos, relações métricas no triângulo retângulo.",
      '2': "Geometria Espacial: Volumes e áreas de superfície de sólidos geométricos, poliedros, cilindros, cones e esferas.",
      '3': "Álgebra: Equações e inequações de 1º e 2º graus, sistemas de equações, fatoração.",
      '4': "Funções: Funções afim, quadrática, exponencial, logarítmica e modular. Gráficos e propriedades.",
      '5': "Estatística: Medidas de tendência central, medidas de dispersão, interpretação de gráficos e tabelas.",
      '6': "Probabilidade: Espaço amostral, eventos, probabilidade condicional, distribuição binomial.",
      '7': "Matemática Financeira: Porcentagem, juros simples e compostos, descontos, taxas.",
      '8': "Trigonometria: Relações trigonométricas no triângulo retângulo, funções trigonométricas, equações trigonométricas.",
      '9': "Análise Combinatória: Princípio fundamental da contagem, permutações, combinações, arranjos.",
      '10': "Números Complexos: Operações com números complexos, forma algébrica e trigonométrica.",
      '11': "Polinômios: Operações com polinômios, teorema do resto, teorema fundamental da álgebra.",
      '12': "Progressões: Progressões aritméticas e geométricas, termo geral, soma dos termos.",
      '13': "Matrizes e Determinantes: Operações com matrizes, propriedades dos determinantes.",
      '14': "Sistemas Lineares: Resolução de sistemas lineares, regra de Cramer, escalonamento.",
      '15': "Geometria Analítica: Ponto, reta, circunferência, cônicas no plano cartesiano."
    }
  },
  'Linguagens': {
    id: 'linguagens',
    title: "Linguagens",
    details: "Selecione uma aula para saber mais:\n1. Interpretação de Texto\n2. Gêneros Textuais\n3. Figuras de Linguagem\n4. Funções da Linguagem\n5. Variação Linguística\n6. Morfologia\n7. Sintaxe\n8. Semântica\n9. Literatura Brasileira\n10. Literatura Portuguesa\n11. Movimentos Literários\n12. Intertextualidade\n13. Coesão e Coerência\n14. Argumentação\n15. Língua Estrangeira (Inglês/Espanhol)",
    subtopics: {
      '1': "Interpretação de Texto: Análise de textos diversos, identificação de ideias principais e secundárias, inferências.",
      '2': "Gêneros Textuais: Características e estruturas de diversos gêneros como artigo de opinião, editorial, crônica, conto.",
      '3': "Figuras de Linguagem: Metáfora, metonímia, hipérbole, prosopopeia, antítese, entre outras.",
      '4': "Funções da Linguagem: Referencial, emotiva, conativa, fática, metalinguística e poética.",
      '5': "Variação Linguística: Variações regionais, sociais, históricas e estilísticas da língua portuguesa.",
      '6': "Morfologia: Classes gramaticais, estrutura e formação de palavras.",
      '7': "Sintaxe: Análise sintática, concordância verbal e nominal, regência, crase.",
      '8': "Semântica: Significado das palavras, ambiguidade, polissemia, homonímia, paronímia.",
      '9': "Literatura Brasileira: Principais autores e obras da literatura brasileira.",
      '10': "Literatura Portuguesa: Principais autores e obras da literatura portuguesa.",
      '11': "Movimentos Literários: Características e contexto histórico dos principais movimentos literários.",
      '12': "Intertextualidade: Relações entre textos, paráfrase, paródia, citação.",
      '13': "Coesão e Coerência: Mecanismos de coesão textual, construção de textos coerentes.",
      '14': "Argumentação: Técnicas argumentativas, tipos de argumentos, construção de argumentos sólidos.",
      '15': "Língua Estrangeira: Interpretação de textos em inglês ou espanhol, vocabulário e estruturas básicas."
    }
  },
  'Ciências Humanas': {
    id: 'humanas',
    title: "Ciências Humanas",
    details: "Selecione uma aula para saber mais:\n1. História do Brasil Colônia\n2. História do Brasil Império\n3. História do Brasil República\n4. História Antiga\n5. História Medieval\n6. História Moderna\n7. História Contemporânea\n8. Geografia Física do Brasil\n9. Geografia Humana do Brasil\n10. Geopolítica Mundial\n11. Filosofia Antiga e Medieval\n12. Filosofia Moderna e Contemporânea\n13. Sociologia Clássica\n14. Sociologia Contemporânea\n15. Atualidades",
    subtopics: {
      '1': "História do Brasil Colônia: Descobrimento, ciclos econômicos, sociedade colonial.",
      '2': "História do Brasil Império: Independência, Primeiro e Segundo Reinados, escravidão.",
      '3': "História do Brasil República: Proclamação da República, Era Vargas, Ditadura Militar, redemocratização.",
      '4': "História Antiga: Civilizações mesopotâmicas, Egito, Grécia e Roma antigas.",
      '5': "História Medieval: Feudalismo, Império Bizantino, Islã, Cruzadas.",
      '6': "História Moderna: Renascimento, Grandes Navegações, Reforma Protestante, Absolutismo.",
      '7': "História Contemporânea: Revolução Francesa, Revolução Industrial, Guerras Mundiais, Guerra Fria.",
      '8': "Geografia Física do Brasil: Relevo, clima, hidrografia, vegetação.",
      '9': "Geografia Humana do Brasil: População, urbanização, industrialização, agricultura.",
      '10': "Geopolítica Mundial: Globalização, blocos econômicos, conflitos internacionais.",
      '11': "Filosofia Antiga e Medieval: Filósofos gregos, patrística, escolástica.",
      '12': "Filosofia Moderna e Contemporânea: Racionalismo, empirismo, idealismo, existencialismo.",
      '13': "Sociologia Clássica: Marx, Durkheim, Weber.",
      '14': "Sociologia Contemporânea: Movimentos sociais, desigualdade, cultura e identidade.",
      '15': "Atualidades: Principais acontecimentos políticos, econômicos e sociais recentes."
    }
  },
  'Ciências da Natureza': {
    id: 'natureza',
    title: "Ciências da Natureza",
    details: "Selecione uma aula para saber mais:\n1. Mecânica\n2. Termologia\n3. Óptica\n4. Ondulatória\n5. Eletromagnetismo\n6. Química Geral\n7. Físico-Química\n8. Química Orgânica\n9. Bioquímica\n10. Citologia\n11. Genética\n12. Evolução\n13. Ecologia\n14. Fisiologia Humana\n15. Biotecnologia",
    subtopics: {
      '1': "Mecânica: Cinemática, dinâmica, estática, gravitação universal.",
      '2': "Termologia: Temperatura, calor, termodinâmica, gases.",
      '3': "Óptica: Reflexão, refração, lentes, instrumentos ópticos.",
      '4': "Ondulatória: Ondas mecânicas e eletromagnéticas, som.",
      '5': "Eletromagnetismo: Eletrostática, eletrodinâmica, magnetismo.",
      '6': "Química Geral: Estrutura atômica, tabela periódica, ligações químicas.",
      '7': "Físico-Química: Soluções, termoquímica, cinética química, equilíbrio químico.",
      '8': "Química Orgânica: Funções orgânicas, isomeria, reações orgânicas.",
      '9': "Bioquímica: Proteínas, carboidratos, lipídios, ácidos nucleicos.",
      '10': "Citologia: Estrutura celular, organelas, metabolismo celular.",
      '11': "Genética: Leis de Mendel, genética molecular, biotecnologia.",
      '12': "Evolução: Teorias evolutivas, evidências da evolução, especiação.",
      '13': "Ecologia: Ecossistemas, ciclos biogeoquímicos, relações ecológicas, biomas.",
      '14': "Fisiologia Humana: Sistemas do corpo humano, homeostase.",
      '15': "Biotecnologia: Engenharia genética, clonagem, organismos transgênicos."
    }
  },
  'Redação': {
    id: 'redacao',
    title: "Redação",
    details: "Selecione uma aula para saber mais:\n1. Estrutura do Texto Dissertativo-Argumentativo\n2. Introdução\n3. Desenvolvimento\n4. Conclusão\n5. Tese e Argumentação\n6. Coesão Textual\n7. Coerência Textual\n8. Repertório Sociocultural\n9. Proposta de Intervenção\n10. Tipos de Argumento\n11. Análise de Temas Anteriores\n12. Uso da Norma Culta\n13. Evitando Erros Comuns\n14. Estratégias de Planejamento\n15. Técnicas de Revisão",
    subtopics: {
      '1': "Estrutura do Texto Dissertativo-Argumentativo: Organização em introdução, desenvolvimento e conclusão.",
      '2': "Introdução: Técnicas para apresentar o tema e a tese de forma eficaz.",
      '3': "Desenvolvimento: Estratégias para elaborar parágrafos argumentativos sólidos.",
      '4': "Conclusão: Métodos para retomar a tese e apresentar uma proposta de intervenção.",
      '5': "Tese e Argumentação: Como formular uma tese clara e desenvolver argumentos consistentes.",
      '6': "Coesão Textual: Uso de conectivos e elementos de ligação para dar fluidez ao texto.",
      '7': "Coerência Textual: Manutenção da unidade temática e progressão das ideias.",
      '8': "Repertório Sociocultural: Incorporação de conhecimentos de outras áreas para enriquecer a argumentação.",
      '9': "Proposta de Intervenção: Elaboração de soluções viáveis e detalhadas para o problema apresentado.",
      '10': "Tipos de Argumento: Exploração de diferentes tipos de argumentos (autoridade, exemplificação, causa e consequência).",
      '11': "Análise de Temas Anteriores: Estudo dos temas das edições passadas do ENEM e suas abordagens.",
      '12': "Uso da Norma Culta: Aplicação correta das regras gramaticais e ortográficas.",
      '13': "Evitando Erros Comuns: Identificação e prevenção de erros frequentes nas redações do ENEM.",
      '14': "Estratégias de Planejamento: Técnicas para organizar as ideias antes de começar a escrever.",
      '15': "Técnicas de Revisão: Métodos eficazes para revisar e aprimorar o texto final."
    }
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

     // if (currentFunction === '') {
    //    if (userInput.toLowerCase() === 'exercício') {
    //      currentFunction = 'exercise';
   //       initiateExercise();
     //   } else {
   //       displayMessage('Erro: Por favor, selecione uma função válida: Exercício.');
  //      }
    //    return;
  //    }

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
        displayMessage(` ${message}`);
      }
    }
// TRecho
    async function callGPTAssistant(userInput) {
      const apiKey = 'sk-redacao-JqmO1mKUUN0tTRA6L1jqT3BlbkFJCN7vu2sC1EoP7AxqMGyG'; // Substitua pela sua chave de API OpenAI
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


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/elearning', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  userId: String,
  lessonsCompleted: Number,
  exercisesTaken: Number,
  score: Number,
});

const User = mongoose.model('User', userSchema);

app.get('/user/:id', async (req, res) => {
  const user = await User.findOne({ userId: req.params.id });
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
