ARG ARCHITECTURE=amd64/
FROM ${ARCHITECTURE}node:alpine as node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM ${ARCHITECTURE}alpine:3.12.3 as alpine
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/entrypoint.sh /docker-entrypoint.sh
COPY ./docker/fpm.conf /etc/php7/php-fpm.d/www.conf
COPY --from=node /app/build/ /usr/share/nginx/html/

RUN adduser -D -u 1000 -g 1000 -s /bin/sh www-data && \
    mkdir -p /www && \
    chown -R www-data:www-data /www

RUN apk update && apk upgrade
RUN apk add curl nginx git 
RUN apk add php7 php7-fpm php7-opcache

RUN mkdir -p /run/nginx/
RUN echo "" > /run/nginx/nginx.pid
RUN mkdir -p /var/www/html/
WORKDIR /var/www/html/

COPY ./docker/entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]