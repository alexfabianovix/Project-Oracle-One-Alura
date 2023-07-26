var imagens = [
    "tagore-01.jpg",
    "tagore-02.jpg",
    "tagore-03.jpg",
    "tagore-04.jpg",
    "tagore-05.jpg",
    "tagore-06.jpg",
    "tagore-07.jpg",
    "motivacional-01.jpg"
  ];

  var quadro = document.getElementById("quadro");

  var randomIndex = Math.floor(Math.random() * imagens.length);
  
  quadro.src = imagens[randomIndex];
  
  console.log(quadro.src);

