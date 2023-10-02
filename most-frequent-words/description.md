# En Sık Tekrar Eden Kelimeler

## Açıklama

Verilen bir metin içinde, en sık tekrar eden kelimeleri bulun. Metin içindeki her kelime birbirinden **boşluk veya noktalama işaretleriyle** ayrılır. Eğer birden fazla kelime aynı sayıda tekrar ederse, bu kelimelerin hepsi döndürülür.

Örneğin, **"Merhaba, benim adım Ahmet. Benim hobim bisiklet sürmek."** verildiğinde, en sık tekrar eden kelime **"Benim"** dir.

**Not:** Metin içindeki tüm harfler küçük harf olarak kabul edilir.

### Örnek 1
```plain
input: text = "Merhaba, benim adım Ahmet. Benim hobim bisiklet sürmek. Ahmet çok iyi bisiklet sürer."

output: ["benim", "ahmet", "bisiklet"]
```


### Örnek 2
```plain
input: text = "Ali ve Ayşe okula gidiyorlar. Ali, Ayşe'yi çok seviyor."

output: ["ali", "ayşe"]
```