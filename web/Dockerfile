FROM node:latest

COPY . /express

WORKDIR /express

RUN npm install --production

EXPOSE 3000

CMD npm run micro-prod