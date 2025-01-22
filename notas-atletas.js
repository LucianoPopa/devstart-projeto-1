class calculoNotasAtletas {
    constructor(notasAtletas) {
      this.notasAtletas = notasAtletas;
    }
    organizaERemoveNotas() {
      this.notasAtletas.forEach(function(organizaNotas) {
        organizaNotas.notas = organizaNotas.notas.sort(function(a, b) {
          return a - b;
        });
        console.log(`Atleta: ${organizaNotas.nome}`);
        console.log(`Notas Obtidas: ${organizaNotas.notas}`);
        
        organizaNotas.notas = organizaNotas.notas.slice(1, -1);

        organizaNotas.somaNotas = organizaNotas.notas.reduce(function(somaNota, nota) {
          return somaNota + nota;
        }, 0);
        organizaNotas.media = organizaNotas.somaNotas / organizaNotas.notas.length;
        console.log(`Média válida: ${organizaNotas.media}`);
        console.log("----------------------------");
      });
    }
  };

let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
];

let calculoMedia = new calculoNotasAtletas(atletas);

calculoMedia.organizaERemoveNotas();
