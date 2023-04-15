# Matrix Döndürme

### Problem
Verilen `n x m` boyutundaki bir matrisi, `rotate` değerine göre döndürün.

**Not:** `rotate` değişkeni [0, 90, 180, 270] değerlerini alabilir.

### Örnek 1
```
input:
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
], 
rotate = 90

output:
[
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]
```

### Örnek 2

```
matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
], 
rotate = 180

output:
[
    [6, 5],
    [4, 3],
    [2, 1]
]
```

### Örnek 3
```
input: 
matrix = [
    [1]
], 
rotate = 270

output: 
[
    [1]
]
```