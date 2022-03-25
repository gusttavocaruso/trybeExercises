
`npm init -y`

`npm install express`

`npm install -D typescript ts-node-dev @types/node @types/express`

touch `tsconfig.json`:
```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "rootDir": "./",
        "outDir": "./dist",
        "esModuleInterop": true,
        "strict": true
    }
}
```
