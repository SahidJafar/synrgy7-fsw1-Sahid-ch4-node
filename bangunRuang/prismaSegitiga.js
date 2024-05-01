const luasPrismaSegitiga = (alas, tinggi, kelilingAlas, tinggiPrisma) =>{
    return (alas * tinggi) + (kelilingAlas * tinggiPrisma)
}

const volumePrismaSegitiga = (alas, tinggi, tinggiPrisma)=>{
    return alas * tinggi / 2 * tinggiPrisma
}

module.exports={
    luasPrismaSegitiga,
    volumePrismaSegitiga
} 