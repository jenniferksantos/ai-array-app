// players.js
const arrPlayers = [
    {
      id: 1,
      firstname: "Lionel",
      lastname: "Messi",
      age: 34,
      club: "Paris Saint-Germain",
      trophies: 34,
      nationality: "Argentinian",
      bio:
        "Lionel Messi, often regarded as one of the greatest footballers of all time, was born on June 24, 1987, in Rosario, Argentina. Messi's incredible skills on the ball, precise finishing, and vision make him a prolific goal-scorer and playmaker. After spending the majority of his career with FC Barcelona, Messi joined Paris Saint-Germain in 2021. Over the years, he has won numerous individual awards, including multiple Ballon d'Or titles. Messi's dedication to the sport and his impact on the pitch have solidified his legacy in football history.",
        img: "https://en.wikipedia.org/wiki/File:Lionel_Messi_20180626.jpg" // This is a placeholder link
    },
    
    {
      id: 2,
      firstname: "Cristiano",
      lastname: "Ronaldo",
      age: 36,
      club: "Manchester United",
      trophies: 32,
      nationality: "Portuguese",
      bio:
        "Cristiano Ronaldo, born on February 5, 1985, in Funchal, Madeira, Portugal, is a legendary footballer known for his athleticism, goal-scoring prowess, and work ethic. Ronaldo has had a storied career, playing for top clubs such as Manchester United, Real Madrid, and Juventus. His dedication to fitness and training has allowed him to maintain a high level of performance well into his 30s. Ronaldo has won numerous awards, including multiple Ballon d'Or titles, and he continues to be a global icon in the world of football.",
        img: "https://en.wikipedia.org/wiki/File:Cristiano_Ronaldo_2018.jpg" // This is a placeholder link
    },
  
    {
      id: 3,
      firstname: "Neymar",
      lastname: "Jr.",
      age: 29,
      club: "Paris Saint-Germain",
      trophies: 21,
      nationality: "Brazilian",
      bio:
        "Neymar Jr., born on February 5, 1992, in Mogi das Cruzes, Brazil, is a skillful and dynamic forward known for his flair and creativity on the field. Neymar began his career with Santos FC in Brazil before making a high-profile move to Barcelona. He later joined Paris Saint-Germain, where he has continued to showcase his exceptional talent. Neymar has won domestic and international titles, and his combination of speed, dribbling, and goal-scoring ability makes him a standout player in world football.",
        img: "https://en.wikipedia.org/wiki/File:Neymar_Jr._2017.jpg" // Placeholder link
    },
  
    {
      id: 4,
      firstname: "Kylian",
      lastname: "Mbappé",
      age: 23,
      club: "Paris Saint-Germain",
      trophies: 11,
      nationality: "French",
      bio:
        "Kylian Mbappé, born on December 20, 1998, in Bondy, France, is a young and talented forward known for his incredible speed and goal-scoring ability. Mbappé rose to prominence with AS Monaco before making a high-profile move to Paris Saint-Germain. He has been a key player for both club and country, helping France win the 2018 FIFA World Cup. Mbappé's skill, agility, and football intelligence make him one of the most exciting prospects in world football.",
        img: "https://en.wikipedia.org/wiki/File:Kylian_Mbappé_2018.jpg" // Placeholder link
    },
  
    {
      id: 5,
      firstname: "Robert",
      lastname: "Lewandowski",
      age: 33,
      club: "Bayern Munich",
      trophies: 17,
      nationality: "Polish",
      bio:
        "Robert Lewandowski, born on August 21, 1988, in Warsaw, Poland, is a prolific striker known for his clinical finishing and goal-scoring records. Lewandowski has enjoyed immense success with Bayern Munich, winning domestic and international titles. His ability to score from various positions on the field and his work rate make him one of the top strikers in the world. Lewandowski's consistent performances have earned him recognition as one of the best goal-scorers in modern football.",
        img: "https://en.wikipedia.org/wiki/File:Robert_Lewandowski_2021.jpg" // Placeholder link
    },
  
    {
        id: 6,
        firstname: "Kevin",
        lastname: "De Bruyne",
        age: 30,
        club: "Manchester City",
        trophies: 12,
        nationality: "Belgian",
        bio:
          "Kevin De Bruyne, born on June 28, 1991, in Drongen, Belgium, is a versatile midfielder known for his vision, passing, and goal-scoring ability. De Bruyne has been a key player for Manchester City, contributing to their domestic and international successes. His playmaking skills and leadership on the field make him one of the premier midfielders in world football. De Bruyne's ability to control the tempo of the game and create scoring opportunities sets him apart as a dynamic and influential player.",
          img: "https://en.wikipedia.org/wiki/File:Kevin_De_Bruyne_2018.jpg" // Placeholder link
      },
      {
        id: 7,
        firstname: "Mohamed",
        lastname: "Salah",
        age: 29,
        club: "Liverpool",
        trophies: 11,
        nationality: "Egyptian",
        bio:
          "Mohamed Salah, born on June 15, 1992, in Nagrig, Egypt, is a prolific forward known for his speed, agility, and goal-scoring prowess. Salah has been a key figure for Liverpool, contributing to their domestic and international triumphs. His ability to score from various positions and create goal-scoring opportunities for teammates makes him a standout player in the Premier League. Salah's impact on the pitch and his consistent goal-scoring form have earned him acclaim as one of the top forwards in world football.",
          img: "https://en.wikipedia.org/wiki/File:Virgil_van_Dijk_2019.jpg" // Placeholder link
        },
      {
        id: 8,
        firstname: "Erling",
        lastname: "Haaland",
        age: 21,
        club: "Borussia Dortmund",
        trophies: 0, // As of the last update
        nationality: "Norwegian",
        bio:
          "Erling Haaland, born on July 21, 2000, in Leeds, England, is a young and powerful striker known for his clinical finishing and physical presence. Haaland has attracted attention with his goal-scoring exploits at Borussia Dortmund, showcasing his ability to score from various positions on the field. His impressive performances have made him one of the most sought-after talents in European football. Haaland's combination of speed, strength, and goal-scoring instincts makes him a rising star in the world of football.",
          img: "https://en.wikipedia.org/wiki/File:Sadio_Mane_2019.jpg" // Placeholder link
        },
      {
        id: 9,
        firstname: "Bruno",
        lastname: "Fernandes",
        age: 27,
        club: "Manchester United",
        trophies: 1, // As of the last update
        nationality: "Portuguese",
        bio:
          "Bruno Fernandes, born on September 8, 1994, in Maia, Portugal, is a creative midfielder known for his vision, passing, and goal-scoring ability. Fernandes joined Manchester United in 2020 and quickly became a key player for the team. His ability to dictate play and contribute both goals and assists has been instrumental in Manchester United's midfield. Fernandes' impact on the pitch and his leadership qualities make him a vital part of the team's success.",
          img: "https://en.wikipedia.org/wiki/File:Mohamed_Salah_2018.jpg" // Placeholder link
        },
      {
        id: 10,
        firstname: "Harry",
        lastname: "Kane",
        age: 28,
        club: "Tottenham Hotspur",
        trophies: 0, // As of the last update
        nationality: "English",
        bio:
          "Harry Kane, born on July 28, 1993, in Walthamstow, England, is a prolific striker known for his goal-scoring prowess and leadership on the field. Kane has spent the majority of his career with Tottenham Hotspur, becoming the club's all-time leading goal-scorer. His ability to score from various positions and contribute to team play makes him one of the top strikers in English football. Kane's dedication to the game and consistent performances have earned him recognition as one of the premier forwards in the sport.",
          img: "https://en.wikipedia.org/wiki/File:Sergio_Ramos_2018.jpg" // Placeholder link
        },
  ];
  
  export default arrPlayers;
  