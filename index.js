const {luasKubus, volumeKubus} = require('./kubus')
const {luasBalok, volumeBalok} = require('./balok')
const {luasPrismaSegitiga, volumePrismaSegitiga} = require('./prismaSegitiga')

console.log("Luas Kubus :", luasKubus(5))
console.log("Volume Kubus :", volumeKubus(5));

console.log("Luas Balok :", luasBalok(2, 4, 6))
console.log("Volume Balok :", volumeBalok(2, 4, 6));

console.log("Luas Prisma Segitiga :", luasPrismaSegitiga(2, 4, 10, 6))
console.log("Volume Prisma Segitiga :", volumePrismaSegitiga(2, 4, 6));

