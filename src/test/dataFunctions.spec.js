import {
    filterByGenre,
    filterByStudio,
    filterByYear,
    sortData,
  } from "../src/dataFunctions.js";
  
  
  //filtro por Genero
  describe("filterByGenre", () => {
    it("returns an array of movies by genre", () => {
      const genreByAdventure = filterByGenre(fakeData, "genre", "Aventura");
      const resultGenre = [
        {
          id: "ninja-scroll",
          name: "Ninja Scroll",
          shortDescription:
            "Un ninja solitario debe enfrentarse a demonios y asesinos mortales en un emocionante viaje lleno de acción y misterio.",
          description:
            "Ninja Scroll es una película de anime que combina acción y aventuras, lanzada en 1993 y dirigida por Yoshiaki Kawajiri. La historia sigue a Jubei Kibagami, un ninja solitario, mientras se ve envuelto en una trama mortal que involucra a un grupo de guerreros sobrenaturales y un misterioso oro. Con combates emocionantes y una trama llena de giros, la película se ha convertido en un clásico del anime y es conocida por su estilo visual distintivo y su trama intensa.",
          imageUrl: "https://www.ecartelera.com/carteles/6000/6061/001_p.jpg",
          facts: {
            year: 1993,
            genre: "Acción · Aventura · Fantasía",
            studio: "Madhouse",
          },
        },
        {
          id: "princess-mononoke",
          name: "Princess Mononoke",
          shortDescription:
            "En un mundo de dioses y espíritus, una feroz princesa lucha por la supervivencia en una epopeya animada inolvidable.",
          description:
            "Dirigida por Hayao Miyazaki, es una obra maestra de la animación japonesa. La película narra la lucha épica entre la naturaleza y la civilización a través de la historia de Ashitaka, un joven príncipe maldito que se adentra en un mundo de dioses y espíritus para encontrar una cura. Se convierte en un intermediario en el conflicto entre los espíritus del bosque y los humanos que destruyen la naturaleza. La Princesa Mononoke es una exploración profunda de la coexistencia, la ecología y la relación entre humanidad y medio ambiente, todo ello con una animación visualmente impresionante y personajes complejos.",
          imageUrl:
            "https://wallpapers.com/images/high/princess-mononoke-studio-ghibli-4uc8he3kk9uur0dj.webp",
          facts: {
            year: 1997,
            genre: "Fantasía · Aventura",
            studio: "Studio Ghibli",
          },
        },
      ];
      expect(genreByAdventure).toEqual(resultGenre);
    });
    it("return zero array of movies by genre", () => {
      const studioNotAdventure = filterByStudio(fakeData, "genre", "Mecha");
      const resultNotGenre = [];
      expect(studioNotAdventure).toEqual(resultNotGenre);
    });
  });
  
  //filtro por Estudio
  describe("filterByStudio", () => {
    it("return an array of movies by studio", () => {
      const studioByGhibli = filterByStudio(fakeData, "studio", "Studio Ghibli");
      const resultStudio = [
        {
          id: "princess-mononoke",
          name: "Princess Mononoke",
          shortDescription:
            "En un mundo de dioses y espíritus, una feroz princesa lucha por la supervivencia en una epopeya animada inolvidable.",
          description:
            "Dirigida por Hayao Miyazaki, es una obra maestra de la animación japonesa. La película narra la lucha épica entre la naturaleza y la civilización a través de la historia de Ashitaka, un joven príncipe maldito que se adentra en un mundo de dioses y espíritus para encontrar una cura. Se convierte en un intermediario en el conflicto entre los espíritus del bosque y los humanos que destruyen la naturaleza. La Princesa Mononoke es una exploración profunda de la coexistencia, la ecología y la relación entre humanidad y medio ambiente, todo ello con una animación visualmente impresionante y personajes complejos.",
          imageUrl:
            "https://wallpapers.com/images/high/princess-mononoke-studio-ghibli-4uc8he3kk9uur0dj.webp",
          facts: {
            year: 1997,
            genre: "Fantasía · Aventura",
            studio: "Studio Ghibli",
          },
        },
      ];
      expect(studioByGhibli).toEqual(resultStudio);
    });
  
    it("return zero array of movies by studio", () => {
      const studioNotGhibli = filterByStudio(
        fakeData,
        "studio",
        "Toei Animation"
      );
      const resultNotStudio = [];
      expect(studioNotGhibli).toEqual(resultNotStudio);
    });
  });
  
  //filtro por Año----arreglar---
  describe("filterByYear", () => {
    it("return an array of movies by year", () => {
      const yearByNinetyseven = filterByYear(fakeData, "year", 1997);
      const resultYear = [
        {
          id: "princess-mononoke",
          name: "Princess Mononoke",
          shortDescription:
            "En un mundo de dioses y espíritus, una feroz princesa lucha por la supervivencia en una epopeya animada inolvidable.",
          description:
            "Dirigida por Hayao Miyazaki, es una obra maestra de la animación japonesa. La película narra la lucha épica entre la naturaleza y la civilización a través de la historia de Ashitaka, un joven príncipe maldito que se adentra en un mundo de dioses y espíritus para encontrar una cura. Se convierte en un intermediario en el conflicto entre los espíritus del bosque y los humanos que destruyen la naturaleza. La Princesa Mononoke es una exploración profunda de la coexistencia, la ecología y la relación entre humanidad y medio ambiente, todo ello con una animación visualmente impresionante y personajes complejos.",
          imageUrl:
            "https://wallpapers.com/images/high/princess-mononoke-studio-ghibli-4uc8he3kk9uur0dj.webp",
          facts: {
            year: 1997,
            genre: "Fantasía · Aventura",
            studio: "Studio Ghibli",
          },
        },
        {
          id: "perfect-blue",
          name: "Perfect Blue",
          shortDescription:
            "Una estrella del pop se enfrenta a la oscuridad en su mente cuando un acosador desencadena un aterrador descenso psicológico.",
          description:
            "Dirigida por Satoshi Kon, es un thriller psicológico de animación que sigue a Mima, una cantante pop que decide dejar su carrera para convertirse en actriz. A medida que se sumerge en su nuevo papel, la realidad y la ficción se entrelazan y Mima experimenta una serie de sucesos aterradores que desafían su percepción de la realidad. La película explora temas de identidad, fama y obsesión en un ambiente de suspense psicológico. Perfect Blue es aclamada por su narrativa intrigante y su estilo visual distintivo, consolidando a Satoshi Kon como un maestro del anime.",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BN2RkMjQ3ZjItNWNlMC00ZTZlLTg3OTQtMzJjYjMwOTQ1ODg4XkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
          facts: {
            year: 1997,
            genre: "Thriller · Psicológico",
            studio: "Madhouse",
          },
        },
      ];
      expect(yearByNinetyseven).toEqual(resultYear);
    });
  
    it("return zero array of movies by year", () => {
      const yearNotNinetyseven = filterByYear(fakeData, "year", 2010);
      const resultNotYear = [];
      expect(yearNotNinetyseven).toEqual(resultNotYear);
    });
  });
  
  //filtro por Ascendente y Descendente
  describe("sortData", () => {
    it("returns an array of movies by upward", () => {
      const orderUpward = sortData(fakeData, "name", "asc");
      const resultOrderUp = [
        {
          id: "akira",
          name: "Akira",
          shortDescription:
            "En un Neo-Tokio distópico, un joven con poderes psíquicos desencadena el caos mientras un grupo de amigos lucha por detenerlo",
          description:
            "Es una película de animación japonesa de 1988 dirigida por Katsuhiro Otomo, basada en su manga homónimo. La historia se desarrolla en Neo-Tokio, una ciudad pos apocalíptica, siguiendo a Kaneda y Tetsuo, dos jóvenes envueltos en un misterio relacionado con Akira, un niño con poderes psíquicos. La película combina una trama intrincada con una animación revolucionaria y efectos visuales sorprendentes. Akira es aclamada por su influencia en la cultura pop y su impacto en el género de la ciencia ficción, siendo una obra maestra del anime que continúa fascinando a audiencias en todo el mundo.",
          imageUrl: "https://www.ecartelera.com/carteles/4200/4244/001_m.jpg",
          facts: {
            year: 1988,
            genre: "Ciencia Ficción",
            studio: "TMS Entertainment",
          },
        },
        {
          id: "ninja-scroll",
          name: "Ninja Scroll",
          shortDescription:
            "Un ninja solitario debe enfrentarse a demonios y asesinos mortales en un emocionante viaje lleno de acción y misterio.",
          description:
            "Ninja Scroll es una película de anime que combina acción y aventuras, lanzada en 1993 y dirigida por Yoshiaki Kawajiri. La historia sigue a Jubei Kibagami, un ninja solitario, mientras se ve envuelto en una trama mortal que involucra a un grupo de guerreros sobrenaturales y un misterioso oro. Con combates emocionantes y una trama llena de giros, la película se ha convertido en un clásico del anime y es conocida por su estilo visual distintivo y su trama intensa.",
          imageUrl: "https://www.ecartelera.com/carteles/6000/6061/001_p.jpg",
          facts: {
            year: 1993,
            genre: "Acción · Aventura · Fantasía",
            studio: "Madhouse",
          },
        },
        {
          id: "perfect-blue",
          name: "Perfect Blue",
          shortDescription:
            "Una estrella del pop se enfrenta a la oscuridad en su mente cuando un acosador desencadena un aterrador descenso psicológico.",
          description:
            "Dirigida por Satoshi Kon, es un thriller psicológico de animación que sigue a Mima, una cantante pop que decide dejar su carrera para convertirse en actriz. A medida que se sumerge en su nuevo papel, la realidad y la ficción se entrelazan y Mima experimenta una serie de sucesos aterradores que desafían su percepción de la realidad. La película explora temas de identidad, fama y obsesión en un ambiente de suspense psicológico. Perfect Blue es aclamada por su narrativa intrigante y su estilo visual distintivo, consolidando a Satoshi Kon como un maestro del anime.",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BN2RkMjQ3ZjItNWNlMC00ZTZlLTg3OTQtMzJjYjMwOTQ1ODg4XkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
          facts: {
            year: 1997,
            genre: "Thriller · Psicológico",
            studio: "Madhouse",
          },
        },
        {
          id: "princess-mononoke",
          name: "Princess Mononoke",
          shortDescription:
            "En un mundo de dioses y espíritus, una feroz princesa lucha por la supervivencia en una epopeya animada inolvidable.",
          description:
            "Dirigida por Hayao Miyazaki, es una obra maestra de la animación japonesa. La película narra la lucha épica entre la naturaleza y la civilización a través de la historia de Ashitaka, un joven príncipe maldito que se adentra en un mundo de dioses y espíritus para encontrar una cura. Se convierte en un intermediario en el conflicto entre los espíritus del bosque y los humanos que destruyen la naturaleza. La Princesa Mononoke es una exploración profunda de la coexistencia, la ecología y la relación entre humanidad y medio ambiente, todo ello con una animación visualmente impresionante y personajes complejos.",
          imageUrl:
            "https://wallpapers.com/images/high/princess-mononoke-studio-ghibli-4uc8he3kk9uur0dj.webp",
          facts: {
            year: 1997,
            genre: "Fantasía · Aventura",
            studio: "Studio Ghibli",
          },
        },
      ];
      expect(orderUpward).toEqual(resultOrderUp);
    });
    it("returns an array of movies by falling", () => {
      const orderFalling = sortData(fakeData, "name", "desc");
      const resultOrderFal = [
        {
          id: "princess-mononoke",
          name: "Princess Mononoke",
          shortDescription:
            "En un mundo de dioses y espíritus, una feroz princesa lucha por la supervivencia en una epopeya animada inolvidable.",
          description:
            "Dirigida por Hayao Miyazaki, es una obra maestra de la animación japonesa. La película narra la lucha épica entre la naturaleza y la civilización a través de la historia de Ashitaka, un joven príncipe maldito que se adentra en un mundo de dioses y espíritus para encontrar una cura. Se convierte en un intermediario en el conflicto entre los espíritus del bosque y los humanos que destruyen la naturaleza. La Princesa Mononoke es una exploración profunda de la coexistencia, la ecología y la relación entre humanidad y medio ambiente, todo ello con una animación visualmente impresionante y personajes complejos.",
          imageUrl:
            "https://wallpapers.com/images/high/princess-mononoke-studio-ghibli-4uc8he3kk9uur0dj.webp",
          facts: {
            year: 1997,
            genre: "Fantasía · Aventura",
            studio: "Studio Ghibli",
          },
        },
        {
          id: "perfect-blue",
          name: "Perfect Blue",
          shortDescription:
            "Una estrella del pop se enfrenta a la oscuridad en su mente cuando un acosador desencadena un aterrador descenso psicológico.",
          description:
            "Dirigida por Satoshi Kon, es un thriller psicológico de animación que sigue a Mima, una cantante pop que decide dejar su carrera para convertirse en actriz. A medida que se sumerge en su nuevo papel, la realidad y la ficción se entrelazan y Mima experimenta una serie de sucesos aterradores que desafían su percepción de la realidad. La película explora temas de identidad, fama y obsesión en un ambiente de suspense psicológico. Perfect Blue es aclamada por su narrativa intrigante y su estilo visual distintivo, consolidando a Satoshi Kon como un maestro del anime.",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BN2RkMjQ3ZjItNWNlMC00ZTZlLTg3OTQtMzJjYjMwOTQ1ODg4XkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
          facts: {
            year: 1997,
            genre: "Thriller · Psicológico",
            studio: "Madhouse",
          },
        },
        {
          id: "ninja-scroll",
          name: "Ninja Scroll",
          shortDescription:
            "Un ninja solitario debe enfrentarse a demonios y asesinos mortales en un emocionante viaje lleno de acción y misterio.",
          description:
            "Ninja Scroll es una película de anime que combina acción y aventuras, lanzada en 1993 y dirigida por Yoshiaki Kawajiri. La historia sigue a Jubei Kibagami, un ninja solitario, mientras se ve envuelto en una trama mortal que involucra a un grupo de guerreros sobrenaturales y un misterioso oro. Con combates emocionantes y una trama llena de giros, la película se ha convertido en un clásico del anime y es conocida por su estilo visual distintivo y su trama intensa.",
          imageUrl: "https://www.ecartelera.com/carteles/6000/6061/001_p.jpg",
          facts: {
            year: 1993,
            genre: "Acción · Aventura · Fantasía",
            studio: "Madhouse",
          },
        },
        {
          id: "akira",
          name: "Akira",
          shortDescription:
            "En un Neo-Tokio distópico, un joven con poderes psíquicos desencadena el caos mientras un grupo de amigos lucha por detenerlo",
          description:
            "Es una película de animación japonesa de 1988 dirigida por Katsuhiro Otomo, basada en su manga homónimo. La historia se desarrolla en Neo-Tokio, una ciudad pos apocalíptica, siguiendo a Kaneda y Tetsuo, dos jóvenes envueltos en un misterio relacionado con Akira, un niño con poderes psíquicos. La película combina una trama intrincada con una animación revolucionaria y efectos visuales sorprendentes. Akira es aclamada por su influencia en la cultura pop y su impacto en el género de la ciencia ficción, siendo una obra maestra del anime que continúa fascinando a audiencias en todo el mundo.",
          imageUrl: "https://www.ecartelera.com/carteles/4200/4244/001_m.jpg",
          facts: {
            year: 1988,
            genre: "Ciencia Ficción",
            studio: "TMS Entertainment",
          },
        },
      ];
      expect(orderFalling).toEqual(resultOrderFal);
    });
  });