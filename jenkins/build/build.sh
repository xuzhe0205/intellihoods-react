#!/bin/bash

echo $(ls jenkins/build/docker-image/dist)

# Copy the dist/ to the build location
cp -R dist jenkins/build/docker-image/dist

cat jenkins/build/docker-image/dist/index.html

echo "****************************"
echo "** Building Docker Image in Jenkins Image***"
echo "****************************"

cd jenkins/build/ && docker-compose -f docker-compose-build.yml build --no-cache
