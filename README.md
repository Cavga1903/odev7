# Node.js Notlar Uygulaması
Bu proje, `Node.js`'in `fs` (dosya sistemi) modülünü kullanarak terminal üzerinden not ekleme, listeleme ve silme işlemleri yapmayı sağlar. Notlar `notlar.json` dosyasında saklanır ve her notun bir `ID`'si vardır.

---

## Amaç

Terminalden kullanıcı girdisi alarak:
- Yeni bir notu ID ile birlikte `notlar.json` içine ekler.
- Tüm notları terminalde listeler.
- Girilen ID'ye sahip bir notu siler.

---


## Çalıştırma Komutları:

📌 Yeni Not Ekleme:
node index.js ekle "Yeni bir not eklendi!"

📌 Tüm Notları Listeleme:
node index.js listele

📌 Belirli Bir Notu Silme (ID ile):
node index.js sil 2

📌 Beklenen Çıktı (Listeleme):
1 - Bu benim ilk Node.js dosyam!
2 - Merhaba, bu bir test mesajıdır!

📌 Not: "sil 2" komutu çalıştırıldığında ID'si 2 olan veri silinir ve dosyaya yeni hali kaydedilir.

---

##  Kurulum

Node.js yüklü değilse [https://nodejs.org](https://nodejs.org) adresinden yükleyin.

Terminalde projenin bulunduğu klasöre girip aşağıdaki adımları izleyin:

```bash
# Proje klasörüne girin
cd proje-klasoru-adi

# index.js dosyasını oluşturun
touch index.js

# (Opsiyonel) package.json oluşturmak için
npm init -y
