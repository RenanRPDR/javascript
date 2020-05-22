function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
};

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadedEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    };
};

seForVerdadedEuFalo()
seForVerdadedEuFalo(null)
seForVerdadedEuFalo(undefined)
seForVerdadedEuFalo(NaN)
seForVerdadedEuFalo(0)
seForVerdadedEuFalo(-1)
seForVerdadedEuFalo(' ')
seForVerdadedEuFalo('?')
seForVerdadedEuFalo([])
seForVerdadedEuFalo([1, 2])
seForVerdadedEuFalo({}) 