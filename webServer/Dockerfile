FROM nginx:latest

WORKDIR /etc/nginx
COPY ./nginx/nginx.conf ./nginx.conf

WORKDIR /var/log/nginx
COPY ./nginx/logs/error.log .
COPY ./nginx/logs/access.log .

EXPOSE 80