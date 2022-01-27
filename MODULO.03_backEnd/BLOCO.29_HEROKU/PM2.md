### starta processo com pm2: `pm2 start index.js --watch --name colorful-process`

### logs pm2: `pm2 logs`

### lista processos: `pm2 list`

### arquivo yaml: `ecosystem.config.yaml`
```
apps:
  - name: colorful-process
    watch: true
    exec_mode: cluster
    instances: max`
```
### executar arq.yaml: `pm2 start ecosystem.config.yaml`
