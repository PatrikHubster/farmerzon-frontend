FROM node:alpine
ARG GRAPH_SERVER=http://localhost:5003/
ARG AUTH_SERVER=http://localhost:5000/
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]
