function embutida() {
    const medidaInterna = Number(document.querySelector('.inputMedidaInterna').value);
    const numeroDePortas = Number(document.querySelector('.inputQuantidadePortas').value);

    const medidaPortas = (medidaInterna - (0.3 * (numeroDePortas + 1))) / numeroDePortas;

    document.querySelector('.resultado').innerHTML = `O móvel terá ${numeroDePortas} portas com ${medidaPortas}cm.`;

    if (numeroDePortas == 2) {
        document.querySelector('.resultadoVaos').innerHTML = `O móvel terá 1 vão de ${medidaInterna}cm.`;
    }
    else if (numeroDePortas == 3) {
        const vao1 = medidaPortas - 0.6;
        const vao2 = medidaPortas * 2;
        document.querySelector('.resultadoVaos').innerHTML = `O móvel terá 2 vãos. Um deles de ${vao1}cm, outro com ${vao2}cm.`;
    }
    else if (numeroDePortas == 4) {
        const vao1 = (medidaInterna - 1.8) / 2;
        document.querySelector('.resultadoVaos').innerHTML = `O móvel terá 2 vãos iguais de ${vao1}cm.`;
    }
    else if (numeroDePortas == 5) {
        const vao1 = medidaPortas + 0.3;
        const vao2 = (medidaInterna - 3.6 - vao1) / 2;
        document.querySelector('.resultadoVaos').innerHTML = `O móvel terá 3 vãos. Um deles com ${vao1}cm, outros 2 com ${vao2}cm.`;
    }
    else if (numeroDePortas == 6) {
        const vao1 = (medidaPortas * 2) - 1.2;
        const vao2 = (medidaInterna - vao1) / 2;
        document.querySelector('.resultadoVaos').innerHTML = `O móvel terá 3 vãos. O do meio com ${vao1}cm, outros dois com ${vao2}cm.`;
    }
    else if (numeroDePortas == 7) {
        const vao1 = medidaPortas + 0.3;
        const vao2 = (medidaPortas * 2) + 1.2;
        document.querySelector('.resultadoVaos').innerHTML = `O móvel terá 4 vãos. Um lateral com ${vao1}cm, outros 3 iguais com ${vao2}cm.`;
    }
    else {
        document.querySelector('.resultado').innerHTML = " "
        document.querySelector('.resultadoVaos').innerHTML = "Valor inválido. Por Favor, indique um número válido."
    }
}

function nEmbutida() {
    const medidaInterna = Number(document.querySelector('.inputMedidaInterna').value);
    const numeroDePortas = Number(document.querySelector('.inputQuantidadePortas').value);

    const medidaPortas = ((medidaInterna + 1.2) - (0.3 * (numeroDePortas - 1))) / numeroDePortas;

    document.querySelector('.resultado').innerHTML = `O móvel terá ${numeroDePortas} portas com ${medidaPortas}cm.`;

    if (numeroDePortas == 2) {
        document.querySelector('.resultadoVaos').innerHTML = `O móvel terá 1 vão de ${medidaInterna}cm.`;
    }

    else if (numeroDePortas == 3) {
        const vao1 = medidaPortas - 1.5;
        const vao2 = (medidaPortas * 2) - 0.9;
        document.querySelector('.resultadoVaos').innerHTML = `O móvel terá 2 vãos. Um deles de ${vao1}cm, outro com ${vao2}cm.`;
    }

    else if (numeroDePortas == 4) {
        const vao1 = (medidaInterna - 1.8) / 2;
        document.querySelector('.resultadoVaos').innerHTML = `O móvel terá 2 vãos iguais de ${vao1}cm.`;
    }

    else if (numeroDePortas == 5) {
        const vao1 = medidaPortas - 1.5;
        const vao2 = (medidaInterna + 3.6 - vao1) / 2;
        document.querySelector('.resultadoVaos').innerHTML = `O móvel terá 3 vãos. Um deles com ${vao1}cm, outros 2 com ${vao2}cm.`;
    }

    else if (numeroDePortas == 6) {
        const vao1 = (medidaPortas * 2) - 1.2;
        const vao2 = (medidaInterna - vao1) / 2;
        document.querySelector('.resultadoVaos').innerHTML = `O móvel terá 3 vãos. O do meio com ${vao1}cm, outros dois com ${vao2}cm.`;
    }

    else if (numeroDePortas == 7) {
        const vao1 = medidaPortas + 0.3;
        const vao2 = (medidaPortas * 2) + 1.2;
        document.querySelector('.resultadoVaos').innerHTML = `O móvel terá 4 vãos. Um lateral com ${vao1}cm, outros 3 iguais com ${vao2}cm.`;
    }

    else {
        document.querySelector('.resultado').innerHTML = " "
        document.querySelector('.resultadoVaos').innerHTML = "Valor inválido. Por Favor, indique um número válido."
    }
}