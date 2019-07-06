const { TCID } = require("../../dist"), tcid = new TCID();

tcid.verif({
    TCKimlikNo: 11223344556,
    Ad: "afulsamet",
    Soyad: "doe",
    DogumYili: 1992
}, (err, result) => {
    console.log("Verify? %s", result.verify)
    console.log("Full result %s", JSON.stringify(result))
})