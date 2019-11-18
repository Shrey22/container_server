FROM node

WORKDIR /app

COPY . . 


EXPOSE 4000

CMD node main.js
