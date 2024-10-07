export const perguntas = [
    {
        enunciado: "Você vê uma pessoa no centro fazendo perguntas sobre racismo e:",
        alternativas: [
            {
                texto: "Evita a pessoa completamente.",
                afirmacao: [
                    "Você se depara com uma pessoa fazendo um tipo de questionário no centro. Não se sentindo com vontade, Você evita a interação, fingindo ir para uma loja próxima.",
                    "Você encontra uma pessoa conduzindo uma entrevista com uma série de perguntas sobre racismo no centro. Você dá meia volta, evitando a interação completamente."
                ],
            },
            {
                texto: "Continua seu trajeto.",
                afirmacao: [
                    "Você vê uma pessoa fazendo um questionário no centro, mas continua por onde planejava ir, sem se importar com o que tinha chamado sua atenção, até que",
                    "Você se depara com um caso de intrevista sobre, com o que pode se deduzir, racismo. Você não pensa muito sobre e continua sua trajetoria, até que"
                ],
                proxima: 1,
            }           
            
        ]
    },
    {
        enunciado: "\"Ei você!\" Você ouve a voz da pesquisadora chamando sua atenção. \"Diga, você poderia participar de um questionário sobre racismo?\"",
        alternativas: [
            {
                texto: "Aceitar a proposta",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                ],
                proxima: 3,
            },
            {
                texto: "Recusar a proposta educadamente",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                ],
                proxima: 2,
            },     
            {
                texto: "Recusar a proposta.",
                afirmacao: [
                    "Você ouve a voz da pesquisadora chamando sua atenção, ela pede para que Você participe da pesquisa, mas é recebida com um não. o tom de voz quando ela fala \"entendo, tenha um bom dia.\" diz que ela ja deve ter ouvido esse tipo de resposta varias vezes hoje.",
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
