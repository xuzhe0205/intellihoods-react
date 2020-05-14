FROM nginx
RUN apt-get update \
    && apt-get install -y \
    nmap \
    vim
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
RUN cat dist/index.html
COPY dist/index.html /usr/share/nginx/html/