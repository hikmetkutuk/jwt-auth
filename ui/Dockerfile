FROM node:16.14-alpine
WORKDIR /app
COPY package.json ./
RUN npm i
EXPOSE 3000
CMD ["npm", "run", "start"]