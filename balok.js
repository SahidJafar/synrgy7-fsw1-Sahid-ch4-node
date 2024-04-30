const luasBalok = (panjang, lebar, tinggi) => {
    return 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))
}

const volumeBalok = (panjang, lebar, tinggi) => {
    return panjang * lebar * tinggi
}

module.exports={
    luasBalok,
    volumeBalok
}


