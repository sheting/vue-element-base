ARG DOCKER_REPO

FROM ${DOCKER_REPO}vue-cli-3-dev as dev
COPY ./Docker/nginx/dev.conf /etc/nginx/conf.d/default.conf

RUN \
  yarn global add element-theme && \
  echo '^^^dev env Finished.'

# build
FROM ${DOCKER_REPO}vue-cli-3-dev as build

RUN \
  echo '^^^build env Finished.'

# service as static
FROM ${DOCKER_REPO}static-service as service

COPY ./Docker/nginx/prod.conf /etc/nginx/conf.d/default.conf
COPY ./dist/ /srv/web-app
