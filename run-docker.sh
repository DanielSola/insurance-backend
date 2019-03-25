#!/usr/bin/env bash

set -a
source services.envar

developmentNet=$(docker network ls -f name=development -q)

if [[ -z $developmentNet ]]; then
  echo "Creating development network"
  docker network create development
fi

echo  "Running postgres"
bash ./postgres/run-docker.sh

echo "Launching Insurance API Rest container..."
docker-compose up -d --build

