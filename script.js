let results = {
    amor: {
        name: "Amor",
        description: "Sentimento de carinho e afeto"
    },
    expectativa: {
        name: "Expectativa",
        description: "Preocupação com o futuro."
    },
    admiracao: {
        name: "Admiração",
        description: "Sentimento de respeito e assombro"
    },
    otimismo: {
        name: "Otimismo",
        description: "Expectativa positiva sobre o futuro."
    },
    frustracao: {
        name: "Frustração",
        description: "Combinação de alegria e irritação"
    },
    melancolia: {
        name: "Melancolia",
        description: "Tristeza com uma pitada de alegria"
    },
    desdem: {
        name: "Desdém",
        description: "Rejeição acompanhada por um resquício de alegria"
    },
    submissao: {
        name: "Submissão",
        description: "Aceitação do controle externo"
    },
    curiosidade: {
        name: "Curiosidade",
        description: "Desejo de aprender e explorar"
    },
    esperanca: {
        name: "Esperança",
        description: "Expectativa de algo bom no futuro"
    },
    ciumes: {
        name: "Ciúmes",
        description: "Sentimento de possessividade e raiva"
    },
    solidao: {
        name: "Solidão",
        description: "Sentimento de confiança misturado com a tristeza"
    },
    indiferenca: {
        name: "Indiferença",
        description: "Desinteresse acompanhado de confiança"
    },
    assombro: {
        name: "Assombro",
        description: "Medo inesperado e sensação de espanto"
    },
    incerteza: {
        name: "Incerteza",
        description: "Ansiedade sobre o que está por vir"
    },
    agressao: {
        name: "Agressão",
        description: "Combinação de medo com a reação agressiva"
    },
    desespero: {
        name: "Desespero",
        description: "Sentimento de perda e falta de esperança"
    },
    repulsa: {
        name: "Repulsa",
        description: "Rejeição forte e medo"
    },
    raivaSurpresa: {
        name: "Raiva Surpresa",
        description: "Reação inesperada de raiva"
    },
    decepcao: {
        name: "Decepção",
        description: "Surpresa negativa com sentimento de perda"
    },
    desprezo: {
        name: "Desprezo",
        description: "Surpresa que leva a rejeição"
    },
    irritacao: {
        name: "Irritação",
        description: "Sentimento de impaciência misturado com raiva"
    },
    desanimo: {
        name: "Desânimo",
        description: "Expectativa negativa que resulta em desânimo"
    },
    odio: {
        name: "Ódio",
        description: "Rejeição combinada com raiva intensa"
    },
    desgosto: {
        name: "Desgosto",
        description: "Sensação de rejeição combinada com tristeza"
    }
};


function reset() {
    let inputs = document.querySelectorAll('input');

    Array.from(inputs).forEach(input => {
        input.value = ""
    })
}

function emotionsEvents() {
    let optionsLeft = document.querySelectorAll('#emocoesEsquerda button');
    let optionsRight = document.querySelectorAll('#emocoesDireita button');

    Array.from(optionsLeft).forEach(opt => {
        opt.addEventListener('click', () => {
            let value = opt.getAttribute('value');

            Array.from(optionsRight).forEach(opt => {
                opt.removeAttribute('disabled')
            })

            Array.from(optionsRight).forEach(opt => {
                if (opt.getAttribute('value') == value) {
                    opt.setAttribute('disabled', true)
                }
            })

            Array.from(optionsLeft).forEach(opt => {
                opt.classList.remove('selecionado');
            });

            opt.classList.add('selecionado');

            fillEmotionName(value, undefined)
        })
    })

    Array.from(optionsRight).forEach(opt => {
        opt.addEventListener('click', () => {
            let value = opt.getAttribute('value');

            Array.from(optionsLeft).forEach(opt => {
                opt.removeAttribute('disabled')
            })

            Array.from(optionsLeft).forEach(opt => {
                if (opt.getAttribute('value') == value) {
                    opt.setAttribute('disabled', true)
                }
            })

            Array.from(optionsRight).forEach(opt => {
                opt.classList.remove('selecionado');
            });

            opt.classList.add('selecionado');

            fillEmotionName(undefined, value)
        })
    })
}

function fillEmotionName(emotion1, emotion2) {
    let inputLeft = document.getElementById('inputEsquerda');
    let inputRight = document.getElementById('inputDireita');

    if (emotion1 != undefined) {
        inputLeft.value = emotion1
        inputLeft.dispatchEvent(new Event("change"));
    } 

    if (emotion2 != undefined) {
        inputRight.value = emotion2
        inputRight.dispatchEvent(new Event("change"));
    }
}

function comparisons(emotion1, emotion2) {
    let combination = emotion1 + emotion2;
    let resultName = document.getElementById('resultadoNome');
    let resultDescription = document.getElementById('resultadoDesc');

    switch (combination) {
        case "AlegriaConfiança":
            resultName.innerHTML = results.amor.name;
            resultDescription.innerHTML = results.amor.description;
            break;

        case "AlegriaMedo":
            resultName.innerHTML = results.expectativa.name;
            resultDescription.innerHTML = results.expectativa.description;
            break;

        case "AlegriaSurpresa":
            resultName.innerHTML = results.admiracao.name;
            resultDescription.innerHTML = results.admiracao.description;
            break;

        case "AlegriaAntecipação":
            resultName.innerHTML = results.otimismo.name;
            resultDescription.innerHTML = results.otimismo.description;
            break;

        case "AlegriaRaiva":
            resultName.innerHTML = results.frustracao.name;
            resultDescription.innerHTML = results.frustracao.description;
            break;

        case "AlegriaTristeza":
            resultName.innerHTML = results.melancolia.name;
            resultDescription.innerHTML = results.melancolia.description;
            break;

        case "AlegriaNojo":
            resultName.innerHTML = results.desdem.name;
            resultDescription.innerHTML = results.desdem.description;
            break;

        case "ConfiançaMedo":
            resultName.innerHTML = results.submissao.name;
            resultDescription.innerHTML = results.submissao.description;
            break;

        case "MedoConfiança":
            resultName.innerHTML = results.submissao.name;
            resultDescription.innerHTML = results.submissao.description;
            break;

        case "ConfiançaSurpresa":
            resultName.innerHTML = results.curiosidade.name;
            resultDescription.innerHTML = results.curiosidade.description;
            break;

        case "SurpresaConfiança":
            resultName.innerHTML = results.curiosidade.name;
            resultDescription.innerHTML = results.curiosidade.description;
            break;

        case "ConfiançaAntecipação":
            resultName.innerHTML = results.esperanca.name;
            resultDescription.innerHTML = results.esperanca.description;
            break;
        
        case "AntecipaçãoConfiança":
            resultName.innerHTML = results.esperanca.name;
            resultDescription.innerHTML = results.esperanca.description;
            break;

        case "ConfiançaRaiva":
            resultName.innerHTML = results.ciumes.name;
            resultDescription.innerHTML = results.ciumes.description;
            break;

        case "RaivaConfiança":
            resultName.innerHTML = results.ciumes.name;
            resultDescription.innerHTML = results.ciumes.description;
            break;

        case "ConfiançaTristeza":
            resultName.innerHTML = results.solidao.name;
            resultDescription.innerHTML = results.solidao.description;
            break;

        case "TristezaConfiança":
            resultName.innerHTML = results.solidao.name;
            resultDescription.innerHTML = results.solidao.description;
            break;

        case "ConfiançaNojo":
            resultName.innerHTML = results.indiferenca.name;
            resultDescription.innerHTML = results.indiferenca.description;
            break;

        case "MedoSurpresa":
            resultName.innerHTML = results.assombro.name;
            resultDescription.innerHTML = results.assombro.description;
            break;

        case "SurpresaMedo":
            resultName.innerHTML = results.assombro.name;
            resultDescription.innerHTML = results.assombro.description;
            break;

        case "MedoAntecipação":
            resultName.innerHTML = results.incerteza.name;
            resultDescription.innerHTML = results.incerteza.description;
            break;

        case "AntecipaçãoMedo":
            resultName.innerHTML = results.incerteza.name;
            resultDescription.innerHTML = results.incerteza.description;
            break;

        case "MedoRaiva":
            resultName.innerHTML = results.agressao.name;
            resultDescription.innerHTML = results.agressao.description;
            break;

        case "RaivaMedo":
            resultName.innerHTML = results.agressao.name;
            resultDescription.innerHTML = results.agressao.description;
            break;

        case "MedoTristeza":
            resultName.innerHTML = results.desespero.name;
            resultDescription.innerHTML = results.desespero.description;
            break;

        case "TristezaMedo":
            resultName.innerHTML = results.desespero.name;
            resultDescription.innerHTML = results.desespero.description;
            break;

        case "MedoNojo":
            resultName.innerHTML = results.repulsa.name;
            resultDescription.innerHTML = results.repulsa.description;
            break;

        case "SurpresaAntecipação":
            resultName.innerHTML = results.expectativa.name;
            resultDescription.innerHTML = results.expectativa.description;
            break;
        
        case "AntecipaçãoSurpresa":
            resultName.innerHTML = results.expectativa.name;
            resultDescription.innerHTML = results.expectativa.description;
            break;

        case "SurpresaRaiva":
            resultName.innerHTML = results.raivaSurpresa.name;
            resultDescription.innerHTML = results.raivaSurpresa.description;
            break;

        case "RaivaSurpresa":
            resultName.innerHTML = results.raivaSurpresa.name;
            resultDescription.innerHTML = results.raivaSurpresa.description;
            break;

        case "SurpresaTristeza":
            resultName.innerHTML = results.decepcao.name;
            resultDescription.innerHTML = results.decepcao.description;
            break;

        case "TristezaSurpresa":
            resultName.innerHTML = results.decepcao.name;
            resultDescription.innerHTML = results.decepcao.description;
            break;

        case "SurpresaNojo":
            resultName.innerHTML = results.desprezo.name;
            resultDescription.innerHTML = results.desprezo.description;
            break;

        case "AntecipaçãoRaiva":
            resultName.innerHTML = results.irritacao.name;
            resultDescription.innerHTML = results.irritacao.description;
            break;

        case "RaivaAntecipação":
            resultName.innerHTML = results.irritacao.name;
            resultDescription.innerHTML = results.irritacao.description;
            break;

        case "AntecipaçãoTristeza":
            resultName.innerHTML = results.desanimo.name;
            resultDescription.innerHTML = results.desanimo.description;
            break;

        case "TristezaAntecipação":
            resultName.innerHTML = results.desanimo.name;
            resultDescription.innerHTML = results.desanimo.description;
            break;

        case "AntecipaçãoNojo":
            resultName.innerHTML = results.indiferenca.name;
            resultDescription.innerHTML = results.indiferenca.description;
            break;

        case "RaivaTristeza":
            resultName.innerHTML = results.frustracao.name;
            resultDescription.innerHTML = results.frustracao.description;
            break;

        case "TristezaRaiva":
            resultName.innerHTML = results.frustracao.name;
            resultDescription.innerHTML = results.frustracao.description;
            break;

        case "RaivaNojo":
            resultName.innerHTML = results.odio.name;
            resultDescription.innerHTML = results.odio.description;
            break;

        case "TristezaNojo":
            resultName.innerHTML = results.desgosto.name;
            resultDescription.innerHTML = results.desgosto.description;
            break;

        default:
            alert("Erro!");
            break;
    }
}

function inputsEvent() {
    let inputs = document.querySelectorAll('.inputEmocoes');

    Array.from(inputs).forEach(input => {
        input.addEventListener('change', () => {
            if (inputs[0].value != "" && inputs[1].value != "") {
                let emotion1 = inputs[0].value
                let emotion2 = inputs[1].value
        
                comparisons(emotion1, emotion2);
            }
        })
    })
}

document.addEventListener("DOMContentLoaded", () => {
    emotionsEvents();
    reset();
    inputsEvent();
})