// Import FS
const fs = require('fs')

//Object 
const people = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo_Corkery",
          email: "Karley_Dach@jasper.info",
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
        },
        {
          id: 8,
          name: "Nicholas Runolfsdottir V",
          username: "Maxime_Nienow",
          email: "Sherwood@rosamond.me",
        },
        {
          id: 9,
          name: "Glenna Reichert",
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
        },
        {
          id: 10,
          name: "Clementina DuBuque",
          username: "Moriah.Stanton",
          email: "Rey.Padberg@karina.biz",
        },
      ];

// WriteFile
const writeDataToFile = () =>{
    fs.writeFile("people.txt", JSON.stringify(people), 'utf-8', (err)=>{
        if(err) console.log('Error Saving Data!')
        else console.log('Success Saving Data!')
    })
}
// ReadFile
const readDataToFile = () =>{
    fs.readFile("people.txt", 'utf-8', (err, data)=>{
    // if (err) {
    //     console.log('Error Reading Data:', err);
    // } else {
    //     console.log(JSON.parse(data));
    // }
    err ? console.log('Error Read Data!') :  console.log(JSON.parse(data))
    })
}

// Detail by Id to Object
const getDatabyId = (id) => {
  fs.readFile("people.txt", 'utf-8', (err, data) => {
    if (err) {
      console.log('Error Reading Data:', err);
  } else {
      const person = JSON.parse(data).find(row => row.id === id);
      if (person) {
          console.log(person);
      } else {
          console.log('Person not found');
      }
  }
  })
}

// Get Data by Name to Array
const getDatabyName = () =>{
  fs.readFile("people.txt", 'utf-8', (err, data)=>{
    if (err) {
        console.log('Error Reading Data:', err);
    } else {
        const parsed = JSON.parse(data);
        console.log(parsed.map(row => row.name))
    }
    })
}

// Add Data
const addData = (payload) => {
  fs.readFile("people.txt", 'utf-8', (err, data)=>{
    if (err) {
        console.log('Error Reading Data:', err);
    } else {
      const parsed = JSON.parse(data);
      parsed.push(payload)

      fs.writeFile("people.txt", JSON.stringify(parsed), 'utf-8', (err)=>{
        if(err) console.log('Error Saving Data!')
        else console.log(parsed)
    })
    }

    })
}

module.exports = {writeDataToFile, readDataToFile, getDatabyId, getDatabyName, addData}

