instalar como dev dependencie
- `npm i -D typescript` 
- `npm i -D typescript/node14`

setar tsconfig.json
- `tsc --init`

exemplo básico de tsconfig.json feito a mão [ `touch tsconfig.json` ]
```json
{
  "extends": "@tsconfig/node14/tsconfig.json", // estendemos a configuração base para o Node 14
  "compilerOptions": {
    "outDir": "./dist", // pasta onde nossos arquivos compilados serão salvos
  },
}
```

boa prática instalar no projeto pacote npm com definições de tipos para node

- `npm install -D @types/node`

compilar em .js
- `npx tsc`