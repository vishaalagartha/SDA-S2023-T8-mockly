FROM node:16-alpine

EXPOSE 3000

COPY package.json ./package.json

WORKDIR /app

COPY src/ /app/src
COPY public/ /app/public

COPY .eslintrc.json /app
COPY .prettierrc /app
COPY package.json /app
COPY package-lock.json /app

RUN npm install
ENTRYPOINT ["npm", "start"]
