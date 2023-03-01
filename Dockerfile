<<<<<<< HEAD
FROM node:18

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

CMD [ "node", "app.js" ]
=======
FROM node:18

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

CMD [ "node", "app.js" ]
>>>>>>> 4f6dac1fd309c9ae012924fb0b00b1c9d9d14e23
