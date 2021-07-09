const submeterformulario = () => {
    const rangeinicial = document.getElementById("rangeinicial").value;
    const rangefinal = document.getElementById("rangefinal").value;
    const minhaaposta = document.getElementById("minhaaposta").value;

    realizarSorteio(+rangeinicial, +rangefinal, +minhaaposta);
}

const realizarSorteio = (rangeinicial, rangefinal, minhaaposta) => {

    if (!rangeinicial){
        alert('informe o range inicial!');
        return;
    }

    if (!rangefinal){
        alert('informe o range final!');
        return;
    }

    if (!minhaaposta){
        alert('informe a sua aposta!');
        return;
    }

    const numeroSorteado = novoSorteio(rangeinicial, rangefinal);

    if (numeroSorteado === minhaaposta){
        alert('Parabéns! Você acertou');
        return;
    }

    alert(`Errou! O número sorteado foi ${numeroSorteado}`);


}

const novoSorteio = (rangeinicial, rangefinal) => {
    return (Math.floor(Math.random() * (rangefinal - rangeinicial + 1)) + rangeinicial);
}