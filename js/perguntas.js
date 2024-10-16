export const perguntas = [
    {
        enunciado: "Você se depara com uma pesquisada no centro e:",
        alternativas: [
            {
                texto: "Evita chamar atenção.",
                afirmacao: [
                    "Você aumenta levemente sua distância da pesquisada, evitando responder a pesquisa",
                    "Você evita chamar atenção com maestria, evitando o questionário."
                ],
            },
            {
                texto: "Continua seu trajeto.",
                afirmacao: [
                    "Você continua por onde planejava ir.",
                    "Você salva suas energias e não evita a interação."
                ],
                proxima: 1,
            }           
            
        ]
    },
    {
        enunciado: "A pesquisada chama sua atenção e pergunta se você deseja participar do questionário",
        alternativas: [
            {
                texto: "Aceitar a proposta",
                afirmacao: [
                    "Você aceita participar da pesquisa quanto chamada a atenção.",
                    "Você aceita a proposta de responder o questionário, no final das contas."
                ],
                proxima: 3,
            },
            {
                texto: "Recusar a proposta.",
                afirmacao: [
                    "Você recusa a proposta do questionário quando oferecida. A pesquisada entende e Você",
                    "Você ouve a voz da pesquisadora chamando sua atenção. Você simplesmente finge não ter ouvido e continua no seu caminho."
                ],
            }
            
        ]
    },
    {
        enunciado: "\"Eu prometo, vai ser bem rápido, não se preocupe\" - a pesquisadora afirma. Você:",
        alternativas: [
            {
                texto: "Aceita a proposta, no final das contas",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                ],
                proxima: 3,
            },
            {
                texto: "Recusa a proposta educadamente, mais uma vez",
                afirmacao: [
                    "A pesquisadora insiste em Você responder o questionário e, mais uma vez, Você recusa a proposta com educação. \"Ah, entendo. Tenha um bom dia\" - a pesquisadora diz para Você, antes de procurar outra pessoa para responder o questionário no seu lugar.",
                    "Mais uma vez, a pesquisadora pede para que Você responda o questionário. Você explica com educação que não tem tempo agora. \"Entendo. Então, tenha um bom dia\" - ela diz antes de partir para a próxima pessoa."
                ],
            }           
            
        ]
    },
    {
        enunciado: "Enunciado 1",
        alternativas: [
            {
                texto: "texto 1",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                ],
                proxima: 1,
            },
            {
                texto: "texto 2",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                ],
                proxima: 2,
            }           
            
        ]
    },
];
