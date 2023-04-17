//lista
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velCarros = [2, 3, 4, 2.5, 4, 6];
let comprimentoCarro = 50;
let alturaCarro = 40;

//carro
let xCarro = 600;

//carro2
let xCarro2 = 600;

//carro3
let xCarro3 = 600;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro
    );
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velCarros[i];
  }
}

function voltaPosicaoInicialCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -50;
}
