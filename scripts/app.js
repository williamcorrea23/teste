async function callReplicateAPI(prompt) {
  const apiKey = 'YOUR_REPLICATE_API_KEY';
  const url = 'https://api.replicate.com/v1/predictions';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Token ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      version: 'your-model-version',
      input: { prompt: prompt }
    })
  });

  const result = await response.json();
  return result;
}

async function generateQuestions(topic) {
  const prompt = `Gere 15 questões de exercícios com 5 opções cada sobre o tópico: ${topic}.`;
  try {
    const result = await callReplicateAPI(prompt);
    displayQuestions(result);
  } catch (error) {
    console.error('Erro ao chamar a API do Replicate:', error);
  }
}

function displayQuestions(questions) {
  const container = document.getElementById('questions-container');
  container.innerHTML = '';

  questions.forEach(question => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `
      <p>${question.text}</p>
      <ul>
        ${question.options.map(option => `<li>${option}</li>`).join('')}
      </ul>
    `;
    container.appendChild(questionElement);
  });
}
