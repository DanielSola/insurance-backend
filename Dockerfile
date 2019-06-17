FROM mhart/alpine-node:10

ARG BUILD_ENV

ENV NODE_ENV ${BUILD_ENV}
ENV HOME /app

COPY package.json tmp/
WORKDIR /tmp
RUN npm install --no-production
RUN if [ "$NODE_ENV" != "production" ]; then npm install -g nodemon; fi
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

COPY package.json .babelrc ${HOME}/
COPY src/ ${HOME}/src

WORKDIR ${HOME}
RUN if [ "$NODE_ENV" == "production" ]; then npm run build; fi

COPY entrypoint.sh /
RUN chmod 755 /entrypoint.sh

RUN npm run build