document.addEventListener('DOMContentLoaded', function() {
  const temasSelect = document.getElementById('temas');
  const temas = getTemasRecentes();

  let currentDecade = null;
  let optgroup = null;

  temas.forEach(tema => {
    const decade = Math.floor(tema.ano / 10) * 10;
    if (decade !== currentDecade) {
      currentDecade = decade;
      optgroup = document.createElement('optgroup');
      optgroup.label = `Década de ${decade}`;
      temasSelect.appendChild(optgroup);
    }

    const option = document.createElement('option');
    option.value = tema.id;
    option.textContent = `${tema.ano}: ${tema.nome}`;
    optgroup.appendChild(option);
  });

  const savedContent = localStorage.getItem('redacaoConteudo');
  if (savedContent) {
    document.getElementById('conteudo').value = savedContent;
  }

  // Load the redacao.css when the section is active
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      if (this.getAttribute('data-section') === 'redacao') {
        loadRedacaoStyles();
      } else {
        removeRedacaoStyles();
      }
    });
  });
});

document.getElementById('temas').addEventListener('change', function() {
  const selectedOption = this.options[this.selectedIndex];
  if (selectedOption.value !== "") {
    document.getElementById('titulo').value = selectedOption.text.split(": ")[1];
  } else {
    document.getElementById('titulo').value = "";
  }
});

document.getElementById('redacaoForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const conteudo = document.getElementById('conteudo').value;
  try {
    const resultado = await analisarRedacaoComGPT(titulo, conteudo);
    alert('Resultado da análise:\n\n' + resultado);
  } catch (error) {
    console.error('Erro:', error);
    alert('Ocorreu um erro ao analisar a redação.');
  }
});

document.getElementById('conteudo').addEventListener('input', function() {
  localStorage.setItem('redacaoConteudo', this.value);
});

document.getElementById('toggleDarkMode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.container').classList.toggle('dark-mode');
  document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
});

function startTimer() {
  const countdownInput = document.getElementById('countdown').value;
  let time = countdownInput * 60;
  const timerElement = document.getElementById('time');

  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(interval);
      alert('Tempo esgotado!');
    }
  }, 1000);
}

async function analisarRedacaoComGPT(titulo, conteudo) {
  const apiKey = 'sk-proj-zCaeLyVQhAAhDb4FHtyrT3BlbkFJPbUcfosO0q37TxfwIUG7';
  const url = 'https://api.openai.com/v1/chat/completions';

  const prompt = `Analise a seguinte redação do ENEM:
  Título: ${titulo}
  Conteúdo: ${conteudo}
  
  Forneça uma análise detalhada considerando os seguintes aspectos:
  1. Aderência ao tema
  2. Estrutura argumentativa
  3. Coesão e coerência
  4. Proposta de intervenção
  5. Respeito aos direitos humanos
  
  Dê uma nota de 0 a 1000 e justifique.`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: prompt}],
      max_tokens: 1000
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}

function loadRedacaoStyles() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'styles/redacao.css';
  link.id = 'redacao-css';
  document.head.appendChild(link);
}

function removeRedacaoStyles() {
  const link = document.getElementById('redacao-css');
  if (link) {
    document.head.removeChild(link);
  }
}

function getTemasRecentes() {
  return [
    { id: 1, ano: 2023, nome: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil" },
    { id: 2, ano: 2022, nome: "Desafios para a valorização de comunidades e povos tradicionais no Brasil" },
    { id: 3, ano: 2021, nome: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil" },
    { id: 4, ano: 2020, nome: "O estigma associado às doenças mentais na sociedade brasileira" },
    { id: 5, ano: 2019, nome: "Democratização do acesso ao cinema no Brasil" },
    { id: 6, ano: 2018, nome: "Manipulação do comportamento do usuário pelo controle de dados na internet" },
    { id: 7, ano: 2017, nome: "Desafios para a formação educacional de surdos no Brasil" },
    { id: 8, ano: 2016, nome: "Caminhos para combater a intolerância religiosa no Brasil" },
    { id: 9, ano: 2015, nome: "A persistência da violência contra a mulher na sociedade brasileira" },
    { id: 10, ano: 2014, nome: "Publicidade infantil em questão no Brasil" },
    { id: 11, ano: 2013, nome: "Efeitos da implantação da Lei Seca no Brasil" },
    { id: 12, ano: 2012, nome: "O movimento imigratório para o Brasil no século XXI" },
    { id: 13, ano: 2011, nome: "Viver em rede no século XXI: os limites entre o público e o privado" },
    { id: 14, ano: 2010, nome: "O trabalho na construção da dignidade humana" },
    { id: 15, ano: 2009, nome: "O indivíduo frente à ética nacional" }
  ];
}