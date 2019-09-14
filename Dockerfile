FROM node:10-alpine
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

EXPOSE 3000

RUN yarn

COPY . .

CMD ["npm", "start"]
