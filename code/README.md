# Salix SAAS Platform

### Development run

```powershell
cd $PROJECT
# development run
docker-compose run --rm --service-ports --entrypoint sh dev
# get into docker
sh ./cmd/local-start.sh
```



### Buil by mannual

```powershell
# build image
PUSH_IMAGE=true ./ci/build.sh

# check latest image updated status on registry link

# ssh login into preview server, 
# login && pull new image
# shut down old container, and start new one.
```

