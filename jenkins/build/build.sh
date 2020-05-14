#!/bin/bash

# Copy the dist/ to the build location
cp -R dist jenkins/build/docker-image/dist

echo "****************************"
echo "** Building Docker Image in Jenkins Image***"
echo "****************************"

cd jenkins/build/ && docker-compose -f docker-compose-build.yml build --no-cache
