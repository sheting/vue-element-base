ARG DOCKER_REPO

# development
FROM ${DOCKER_REPO} as dev
COPY ./Docker/nginx/development.conf /etc/nginx/conf.d/default.conf

RUN echo '^^^dev env Finished.'

# build
FROM ${DOCKER_REPO} as build
RUN \
  echo '^^^build env Finished.'

# service as static
FROM ${DOCKER_REPO} as service
COPY ./Docker/nginx/prodk8s.conf /etc/nginx/conf.d/default.conf
COPY ./dist/ /srv/web-app
