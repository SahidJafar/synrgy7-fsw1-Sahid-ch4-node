const luasKubus = (sisi) =>{
    return 6 * Math.pow(sisi, 2)
}

const volumeKubus = (sisi)=>{
    return Math.pow(sisi,3)
}

module.exports={
    luasKubus,
    volumeKubus
}