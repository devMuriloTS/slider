
function getCor() {
    const possib = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
        cor += possib[Math.floor(Math.random() * 16)];
    }
    return cor;
}

let imagemExibida = 1;
const totalImagens = 3;

function atualizar() {
    const imagem = document.getElementById("carrossel");
    imagem.src = `imagem${imagemExibida}.jpg`;
    
    const novaCor = getCor();

    document.body.style.backgroundColor = novaCor;
    imagem.style.backgroundColor = novaCor;
}

document.getElementById("d").addEventListener("click", function () {
    imagemExibida = (imagemExibida % totalImagens) + 1;
    atualizar();
});

document.getElementById("e").addEventListener("click", function () {
    imagemExibida = (imagemExibida - 2 + totalImagens) % totalImagens + 1;
    atualizar();
});

atualizar();

