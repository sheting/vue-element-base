# Vue Element UI Template demo

#### start

```powershell
>cd $PROJECT
# update when remote update
>git submodule update --init --force --recursive --remote
# development run
>docker-compose run --rm --service-ports --entrypoint sh dev
# get into docker
>sh ./cmd/local-start.sh
# open browser via 'localhost:8888' or '127.0.0.1:8888'
# 查看 dev.log 看编译进度
```

#### build CI/CD
