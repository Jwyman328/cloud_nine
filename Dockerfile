# build environment
FROM node:12-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm install update
COPY . .
EXPOSE 3001

CMD ["npm", "start"]