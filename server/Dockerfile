FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production
RUN npm install pm2 -g

COPY . .

EXPOSE 3001

CMD [ "pm2-runtime", "server.js" ]