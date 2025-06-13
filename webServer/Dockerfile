FROM nginx:latest

WORKDIR /etc/nginx
COPY ./nginx/nginx.conf ./nginx.conf
COPY ./nginx/conf.d .

WORKDIR /var/log/nginx
COPY ./nginx/logs/error.log .
COPY ./nginx/logs/access.log .

WORKDIR /usr/share/nginx/data
COPY ./nginx/data .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]