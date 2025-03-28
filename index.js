const fs = require("fs");
const path = "notlar.json";

function dosyaOlustur(){
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "[]");
    }
}

function veriOku(){
    dosyaOlustur();
    const data = fs.readFileSync(path,"utf8");
    return JSON.parse(data);
}

function veriYaz(data){
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

function notEkle(id,mesaj){
    try {
        const notlar = veriOku();
        notlar.push({id, mesaj});
        veriYaz(notlar);
        console.log("Not eklendi!");
    } catch (errror) {
        console.error("Not eklenemedi: ", err.message);
    }
}

function notlariListele() {
    try {
        const notlar = veriOku();
        notlar.forEach(not => {
            console.log(`${not.id} - ${not.mesaj}`);
          });
    } catch (err) {
        console.error("Notlar listelenemedi:", err.message);
    }
}

function notSil(id) {
    try {
      let notlar = veriOku();
      const oncekiUzunluk = notlar.length;
      notlar = notlar.filter(not => not.id !== id);
      if (notlar.length === oncekiUzunluk) {
        console.log(`ID'si ${id} olan bir not bulunamadı.`);
      } else {
        veriYaz(notlar);
        console.log(`ID'si ${id} olan not silindi.`);
      }
    } catch (err) {
      console.error("Not silinemedi:", err.message);
    }
  }

  const komut = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv.slice(4).join(" ");

switch (komut) {
  case "ekle":
    notEkle(arg1, arg2);
    break;
  case "listele":
    notlariListele();
    break;
  case "sil":
    notSil(arg1);
    break;
  default:
    console.log("🚨 Geçersiz komut! Komutlar: ekle, listele, sil");
}