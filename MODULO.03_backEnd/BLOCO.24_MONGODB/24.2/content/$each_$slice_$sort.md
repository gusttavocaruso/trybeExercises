$each 
Similar a um forEach, vai percorrer todos os itens de um array que foi passado, realizando a operação anterior, que pode ser $set, $push, $pull ou $pop
```javascript
  { $each: [1, 2, 3] }
```

$slice
Igual ao .slice() do JS, vai 'fatiar' o array de acordo com o numero passado pra ele

```javascript
  { $slice: 3 }
```

$sort
Similar ao .sort() do JS, vai ordenar a lista.
se o parametro for -1, decrescente
se o parametro for 1, crescente
```javascript
  { $sort: -1 } || { $sort: 1 }
```
