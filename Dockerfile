FROM node:20

WORKDIR /my-grocery-client

COPY . .

RUN npm install

CMD [ "npm" , "start" ]