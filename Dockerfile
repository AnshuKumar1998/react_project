
FROM node:18


WORKDIR /react/weather-app


COPY package*.json ./


RUN npm install


COPY public /react/weather-app/public/
COPY src /react/weather-app/src/

EXPOSE 8081

CMD ["npm", "start"]
