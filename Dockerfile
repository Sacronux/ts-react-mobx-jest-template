FROM node:14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --no-optional && npm cache clean --force

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
