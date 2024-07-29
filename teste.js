
const apiKey = 'sk-redacao-JqmO1mKUUN0tTRA6L1jqT3BlbkFJCN7vu2sC1EoP7AxqMGyG';
let generatedQuestions = [];

async function generateQuestions() {
    const subject = document.getElementById('subject').value;
    const numQuestions = document.getElementById('numQuestions').value;
    const questionsContainer = document.getElementById('questionsContainer');
    const resultsContainer = document.getElementById('resultsContainer');
    const submitButton = document.getElementById('submitButton');
    questionsContainer.innerHTML = 'Gerando questões...';
    resultsContainer.innerHTML = '';  // Apaga a análise anterior
    submitButton.style.display = 'none';

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "user",
                    content: `Gere ${numQuestions} questões de exercícios com 5 opções cada sobre Conteúdo de ${subject} Abordado no ENEM.`
                }],
                max_tokens: 1500,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText} - ${errorDetails.error.message}`);
        }

        const data = await response.json();
        const questionsText = data.choices[0].message.content.trim();
        generatedQuestions = questionsText.split('\n\n');

        questionsContainer.innerHTML = '';
        generatedQuestions.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            
            const parts = question.split('\n');
            const questionText = parts[0];
            const options = parts.slice(1).map(option => option.replace(/^[a-eA-E]\)\s+/i, ''));

            questionElement.innerHTML = `<h3>Questão ${index + 1}</h3><p>${questionText}</p>`;

            const optionsList = document.createElement('ul');
            optionsList.classList.add('options');

            options.forEach((option, optionIndex) => {
                const optionItem = document.createElement('li');
                optionItem.innerHTML = `
                    <input type="radio" id="question${index}_option${optionIndex}" name="question${index}" value="${String.fromCharCode(65 + optionIndex)}">
                    <label class="option-label" for="question${index}_option${optionIndex}">${String.fromCharCode(65 + optionIndex)}. ${option}</label>
                `;
                optionsList.appendChild(optionItem);
            });

            questionElement.appendChild(optionsList);
            questionsContainer.appendChild(questionElement);
        });

        submitButton.style.display = 'block';
    } catch (error) {
        questionsContainer.innerHTML = 'Erro ao gerar questões: ' + error.message;
    }
}

async function submitAnswers() {
    const resultsContainer = document.getElementById('resultsContainer');
    const questionElements = document.querySelectorAll('.question');
    let answers = [];

    questionElements.forEach((questionElement, index) => {
        const selectedOption = questionElement.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            answers.push(`Questão ${index + 1}: ${selectedOption.value}`);
        } else {
            answers.push(`Questão ${index + 1}: Não respondida`);
        }
    });

    const questionsAndAnswers = generatedQuestions.map((question, index) => {
        return `${question}\nResposta: ${answers[index].split(': ')[1]}`;
    }).join('\n\n');

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "user",
                    content: `Aqui estão as questões e minhas respostas:\n\n${questionsAndAnswers}\n\nPor favor, analise minhas respostas e indique os erros.`
                }],
                max_tokens: 1500,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            throw new Error(`Erro na resposta da API: ${response.status} ${response.statusText} - ${errorDetails.error.message}`);
        }

        const data = await response.json();
        const analysis = data.choices[0].message.content.trim();

        resultsContainer.innerHTML = `<h3>Resultados da Análise:</h3><p>${analysis.replace(/\n/g, '<br>')}</p>`;
    } catch (error) {
        resultsContainer.innerHTML = 'Erro ao enviar respostas: ' + error.message;
    }
}
