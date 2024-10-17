export const perguntas = [
    {
        enunciado: "Você se depara com uma pesquisada no centro e:",
        alternativas: [
            {
                texto: "Evita chamar atenção.",
                afirmacao: [
                    "Você aumenta levemente sua distância da pesquisada, evitando ter que responder a pesquisa",
                    "Você evita chamar atenção com maestria, evitando ter que participar do questionário."
                ],
            },
            {
                texto: "Continua seu trajeto.",
                afirmacao: [
                    "Você continua por onde planejava ir.",
                    "Você não vê motivo para evitar a interação."
                ],
                proxima: 1,
            }           
            
        ]
    },
    {
        enunciado: "A pesquisada chama sua atenção e pergunta se Você deseja participar do questionário",
        alternativas: [
            {
                texto: "Aceitar a proposta",
                afirmacao: [
                    "Você aceita participar da pesquisa quando chamada a atenção.",
                    "Você tem sua atenção chamada pela pesquisadora e aceita a proposta de responder o questionário."
                ],
                proxima: 2,
            },
            {
                texto: "Recusar a proposta.",
                afirmacao: [
                    "Você recusa a proposta do questionário quando oferecida. A pesquisada entende e Você continua o seu caminho",
                    "Você ouve a voz da pesquisadora chamando sua atenção e simplesmente recusa, continuando sua caminhada pelo centro."
                ],
            }
            
        ]
    },
    {
        enunciado: "\"Ok então, vamos começar com uma pergunta simples...\"",
        alternativas: [
            {
                texto: "Continuar",
                afirmacao: [
                    "Vejamos algumas das respostas que Você deu:",
                    "Você deu algumas respostas interessantes, que tal nós vemos algumas delas?"
                ],
                proxima: 3,
            },          
            
        ]
    },
    {
        enunciado:"\"\'Racismo é crime\'. você concorda com essa afirmação?",
        alternativas: [
            {
                texto: "Sim, racismo é crime.",
                afirmacao: [
                    "Você concorda com a afirmação de racismo ser crime,",
                    "Você demonstra ser a favor da ciminalização do racismo,"
                ],
                proxima: 4,
            },
            {
                texto: "Não, não concordo.",
                afirmacao: [
                    "Você aparenta não ser favorável à punição do racismo como crime, ",
                    "Você se posiciona contra a criminalização do racismo,"
                ],
                proxima: 5,
            }
        ]
    },
    {
        enunciado:"\"Ok, \'qual a principal consequência causada pelo racismo?\'\"",
        alternativas: [
            {
                texto: "fortalece a autoestima das vitimas",
                afirmacao: [
                    "Você, na pergunta de principal consequência do racismo, responde que ele fortalece a autoestima das vítimas,",
                    "Você, por algum motivo, responde que o racismo fortalece a autoestima das vítimas,"
                ],
                proxima: 6,
            },
            {
                texto: "contribui para a exclusão social e marginalização de grupos minoritarios",
                afirmacao: [
                    "Você entende que o racismo tem como consequência o reforço da desigualdade e esteriótipos,",
                    "Você demonstra entender as consequências do racismo,"
                ],
                proxima: 6,
            }
        ]
    },
    {
        enunciado:"\"Uh... ok, próxima pergunta: \'o que você acha sobre pessoas que cometem racismo?\'\"",
        alternativas: [
            {
                texto: "Essas pessoas são mal caráter",
                afirmacao: [
                    "Mas Você demonstra ser contra as pessoas que cometem o crime,",
                    "Mesmo assim, Você não é favorável a quem perpetua o crime,"
                ],
                proxima: 4,
            },
            {
                texto: "Sou indiferente acerca disso",
                afirmacao: [
                    "Você também se posicionou como \"indiferente\" acerca de pessoas que cometem o crime,",
                    "Você demonstra não se imporatar muito se as pessoas perpetuam racismo,"
                ],
                proxima: 7,
            }
        ]
    },
    {
        enunciado:"\"Certo, agora, por último, \'O que caracteriza o racismo estrutural na sociedade?\'",
        alternativas: [
            {
                texto: "Desigualdades raciais",
                afirmacao: [
                    "e Você demonstra entender do que se trata o termo racismo estrutural.",
                    "e Você termina o questionário demonstrando ter um entendimento rasoável sobre o termo racismo estrutural."
                ],
                proxima: 8,
            },
            {
                texto: "Discriminação individual",
                afirmacao: [
                    "no final, Você erra, por pouco, a ultima pergunta do questionário.",
                    "no fim do questionário, Você erra a última resposta para o questionário."
                ],
                proxima: 8,
            }
        ]
    },
    {
        enunciado:"Umm... \'você apoia o movimento racista?\'...",
        alternativas: [
            {
                texto: "Não. Sou contra o racismo",
                afirmacao: [
                    "mesmo sendo indiferente acerca dos racistas, Você se posiciona contra o movimento racista,",
                    "Você, mesmo sendo indiferente quando se trata das pessoas que perpetuam, é contra o movimento racista,"
                ],
                proxima: 4,
            },
            {
                texto: "Sim. Sou favor do movimento racista",
                afirmacao: [
                    "e por último, Você se posicionou a favor do movimento racista.",
                    "e por último, Você se demonstrou ser Hitler."
                ],
                proxima: 9,
            }
        ]
    },
    {
        enunciado:"Certo! Esse foi o questionário. Agradecemos pela sua cooperação e tenha um bom dia!",
        alternativas: [
            {
                texto: "Continuar para os resultados",
                afirmacao: [
                    ""
                ],
            }
        ]
    },
    {
        enunciado:"\"Certo... Bem, esse foi o questionário. Agradecemos pela sua cooperação e... Tenha um bom dia.\"",
        alternativas: [
            {
                texto: "Continuar para os resultados",
                afirmacao: [
                    ""
                ],
            }
        ]
    }
];
