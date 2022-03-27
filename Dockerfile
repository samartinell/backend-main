ARG NODE_VERSION=16
FROM node:${NODE_VERSION}-alpine as build

RUN apk add build-base python3 bash lcms2-dev libpng-dev gcc g++ make autoconf automake

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm ci

COPY src /app/src
COPY tsconfig.json /app/tsconfig.json

RUN \
  npx tsc && \
  npm prune --production

FROM node:${NODE_VERSION}-alpine

# COPY public /static
COPY --from=build /app/dist /app
COPY --from=build /app/node_modules /app/node_modules

EXPOSE 4000

CMD [ "/app/index.js" ]
