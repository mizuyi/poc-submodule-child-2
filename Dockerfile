FROM node:25.2

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY index.js .

CMD ["npm", "start"]
