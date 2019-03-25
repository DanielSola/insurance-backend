# POSTGRESSQL DATABASE WITH PGADMIN
## How to run

1. run -> bash run-docker.sh
2. Configure pgAdmin
3. Create tables:
    - docker container exec -u postgres -i postgres psql insurance_backend < postgres_tables/request_history.sql

## How to dump from staging or production databases

From postgreSQL container, run:
`pg_dump --no-owner --no-acl -U user -W -h host --table table database > file.sql`
To import into a database:
`psql -U user-W -h host database < file.sql`

If you want to copy it from docker container to host:
`docker cp postgres:/file_in_container /path_in_host`
