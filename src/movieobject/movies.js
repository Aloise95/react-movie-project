const movies = [
    {
      id: 1,
      title: 'Oceans 8',
      year: '2018',
      category: 'Comedy',
      likes: 4,
      dislikes: 1,
      image: "https://tse3.mm.bing.net/th?id=OIP.FHyiyTJYbKttdEOeY6_pDgHaK-&pid=Api&P=0&w=300&h=300", 
      link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=242318.html"   
    }, {
      id: 2,
      title: 'Midnight Sun',
      year: '2016',
      category: 'Comedy',
      likes: 2,
      dislikes: 0,
      image: "https://tse3.mm.bing.net/th?id=OIP.ivXZgfaJzk5OHdKcgfeAtwHaKj&pid=Api&P=0&w=300&h=300",
      link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=218501.html"   
    }, {
      id: 3,
      title: 'Les indestructibles 2',
      year: '2004',
      category: 'Animation',
      likes: 3,
      dislikes: 1,
      image: "https://tse3.mm.bing.net/th?id=OIP.wMG5lU1H5DxzdVAONkPQFAHaKl&pid=Api&P=0&w=300&h=300",
      link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=53096.html"   
    }, {
      id: 4,
      title: 'Sans un bruit',
      year: '2018',
      category: 'Thriller',
      likes: 6,
      dislikes: 6,
      image: "https://tse1.mm.bing.net/th?id=OIP.s2uvNkvcajBkazygOEiLqwHaKD&pid=Api&P=0&w=300&h=300",
      link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=254612.html"   
    }, {
      id: 5,
      title: 'Creed II',
      year: '2019',
      category: 'Drame',
      likes: 16,
      dislikes: 2,
      image: "https://tse4.mm.bing.net/th?id=OIP.C7XT3Dh-k3ZROdsBMswKGgHaIk&pid=Api&P=0&w=300&h=300",
      link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=244084.html"   
    }, {
      id: 6,
      title: 'Pulp Fiction',
      year: '1996',
      category: 'Thriller',
      likes: 11,
      dislikes: 3,
      image: "https://tse2.explicit.bing.net/th?id=OIP.oVSXJArra_OG8yixpwMZ6wHaLH&pid=Api&P=0&w=300&h=300",
      link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=10126.html"   
    }, {
      id: 7,
      title: 'Pulp Fiction',
      year: '1996',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32,
      image: "https://tse3.mm.bing.net/th?id=OIP.rzD69e4naObvPrZRWyLGJAHaKj&pid=Api&P=0&w=300&h=300",
      link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=242318.html"   
    }, {
      id: 8,
      title: 'Seven',
      year: '2018',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      image: "https://tse2.mm.bing.net/th?id=OIP.E__mbHUy6Ay5zDcYH5SvHwHaLH&pid=Api&P=0&w=300&h=300",
      link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=13892.html"   
    }, {
      id: 9,
      title: 'Inception',
      year: '2020',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      image:
      "https://images-na.ssl-images-amazon.com/images/I/51NbVEuw1HL._SX355_.jpg",
      link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=143692.html"   
    }, {
      id: 10,
      title: 'Gone Girl',
      year: '2014',
      category: 'Thriller',
      likes: 22,
      dislikes: 12,
      image: "https://static.blog4ever.com/2014/07/777966/artfichier_777966_5606302_20160408345388.jpg",
      link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=217882.html"   
    },
  ]
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
