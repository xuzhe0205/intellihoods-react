FROM nginx
RUN apt-get update \
    && apt-get install -y \
    nmap \
    vim
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY dist/* /usr/share/nginx/html/