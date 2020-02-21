FROM node:latest

COPY . /express

WORKDIR /express

RUN npm install --production

EXPOSE 3000

CMD npm run prod

# docker run -i -p 3000:3000 microservices-example_web