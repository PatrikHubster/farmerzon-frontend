FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV REACT_APP_GRAPH_SERVER="http://localhost:5000"
ENV REACT_APP_AUTH_SERVER="http://localhost:5001"
RUN npm run build
CMD ["npm", "run", "start"]