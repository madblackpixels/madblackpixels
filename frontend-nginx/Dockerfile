FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf
RUN  mkdir /frontend_logs

CMD ["nginx", "-g", "daemon off;"]
