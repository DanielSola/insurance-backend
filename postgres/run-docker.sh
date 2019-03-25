#!/usr/bin/env bash

set -a
source ./postgres/services.envar

developmentNet=$(docker network ls -f name=development -q)

if [[ -z $developmentNet ]]; then
  printf "\nCreating development network"
  docker network create development
fi

printf "\nLaunching Postgres container..."
docker-compose -f ./postgres/docker-compose.yml up -d --build

printf "\nCreating database.. insurance-backend.."
docker container exec -u postgres -i postgres psql < ./postgres/create_db.sql

printf "\nCreating table.. request_history.sql.."
docker container exec -u postgres -i postgres psql insurance_backend < ./postgres/postgres_tables/request_history.sql

printf  "\nSuccess Postgres Script\n"
