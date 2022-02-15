---
theme: 'night'
transition: 'slide'
title:  '26.5 - Express Middlewares'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

### 26.5 - Express Middlewares

![midd](https://media.giphy.com/media/eudhDmpFsR24LZcRkV/giphy.gif)

---

### Tudo é Middleware

```js
const middleware = (req, res, next) => {
  // seu código aqui
}

const errorMiddleware = (err, req, res, next) => {
  // seu código aqui
}
```

---

---

### Entrando no detalhe

```js
const middleware = (req, res, next) => {
  // req -> tudo sobre nossa request (o que está chegando)
  // res -> usaremos para enviar uma resposta (status, send, json, end)
  // 
}

const errorMiddleware = (err, req, res, next) => {
  // seu código aqui
}
```

---

### Quais informações conseguimos acessar?

```js
const middleware = (req, res, next) => {
  req.method
  req.url
  req.headers
  req.body
  req.params
  req.query
}
```

--


