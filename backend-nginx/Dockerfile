FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf
RUN  mkdir /backend_logs

CMD ["nginx", "-g", "daemon off;"]
WORKDIR /backend_logs
