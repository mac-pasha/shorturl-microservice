FROM mysql:8.0.39

ENV MYSQL_ROOT_PASSWORD 123456
ENV MYSQL_DATABASE short-url

COPY ./db-dump /docker-entrypoint-initdb.d

EXPOSE 3306
