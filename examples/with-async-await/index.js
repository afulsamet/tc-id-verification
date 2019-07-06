const { TCID } = require("../../dist"), tcid = new TCID();

(async () => {
    const verif = await tcid.verif({ 
        TCKimlikNo: 11223344556, 
        Ad: "afulsamet", 
        Soyad: "doe", 
        DogumYili: 1992 
    })
    console.log(verif)
})()