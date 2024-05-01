const {luasKubus, volumeKubus} = require('./bangunRuang/kubus')
const {luasBalok, volumeBalok} = require('./bangunRuang/balok')
const {luasPrismaSegitiga, volumePrismaSegitiga} = require('./bangunRuang/prismaSegitiga')
const {writeDataToFile, readDataToFile, getDatabyId, getDatabyName, addData} = require('./people')

const fs = require('fs')

console.log("Luas Kubus :", luasKubus(5))
console.log("Volume Kubus :", volumeKubus(5));

console.log("Luas Balok :", luasBalok(2, 4, 6))
console.log("Volume Balok :", volumeBalok(2, 4, 6))

// Menulis hasil luas balok ke dalam file result.txt
// Syncronus
fs.writeFileSync("result.txt", `Luas Balok: ${luasBalok(2,4,6)}`, 'utf-8');
// Asyncronus
// fs.writeFile("result.txt", `Luas Balok: ${luasBalok(2,4,6)}`, 'utf-8', (err) => {
//     if(err) console.log('Error Saving Data!')
// });

// Membaca file system result.txt
// Sync
console.log("fs readFileSync", fs.readFileSync("result.txt", "utf-8"))
// Asyncronus
// fs.readFile("result.txt", "utf-8", (err, data) => {
//     console.log(data)
// })

console.log("Luas Prisma Segitiga :", luasPrismaSegitiga(2, 4, 10, 6))
console.log("Volume Prisma Segitiga :", volumePrismaSegitiga(2, 4, 6))

// Object to String
const person = {
    name: 'Sahid',
    age: 24
}
// Write
fs.writeFile("dummy.txt", JSON.stringify(person), 'utf-8', (err) => {
    if(err) console.log('Error Saving Data!')
});
// Read
fs.readFile("dummy.txt", "utf-8", (err, data) => {
    // console.log(JSON.parse(data))
    const parsed = JSON.parse(data)
    console.log(parsed.name)
})


// People.js
writeDataToFile()
readDataToFile()
getDatabyId(5)
getDatabyName()
addData({
    id: 11,
    name: 'Sahid Jafar',
    username: 'Sahid',
    email: 'sahid11.sj@gmail.com'
})


