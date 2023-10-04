## Açıklama

Koordinat düzleminde yer alan bir kareyi temsil eden 4 nokta vardır. Size bu 4 noktanın 3 tanesi verilmiştir. Sizden istenilen, bu verilen 3 noktanın diğer 2 nokta ile komşu olan noktayı bulmanızdır.

### Hikaye

QR kodunu hepimiz biliriz. Diyelim ki, QR okutan bir sisteminiz var. QR noktalarını sıralamanız gerekti  veya sol üst köşeyi bulmanız gerekti. Bunu nasıl yaparsınız? İşte bu sorunun cevabını bulmak için bu soruyu hazırladık. 

<img src="/assets/problems/find-square-corner/qr-code.png" alt="qr-code" width="200" />

### Örnek 1 (0 Derecelik Açı)

```plain
input: points = [[0, 0], [0, 1], [1, 1]]
output: [0, 1]
```

### Örnek 2 (45 Derecelik Açı)

```plain
input: points = [[140, 50], [115, 75], [165, 75]]
output: [140, 50]
```

### Örnek 3 (150 Derecelik Açı)

```plain
input: points = [[155, 70], [140, 44], [129, 85]]
output: [155,70]
```


**NOT:** Köşe noktaları `tamsayı` olmak zorundadır. Bu sebeple iki nokta arasındaki yani karenin her bir kenarı aynı uzunlukta olmayabilir (Küsüratları çıkardığımız için).