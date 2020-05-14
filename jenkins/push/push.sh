#!/bin/bash

echo "********************"
echo "** Pushing image ***"
echo "********************"

IMAGE="posthem-react-nginx"

echo "** Logging in ***"
docker login -u xuzhe0205 -p $PASS
echo "*** Tagging image ***"
docker tag $IMAGE:$BUILD_TAG xuzhe0205/$IMAGE:$BUILD_TAG
echo "*** Pushing image ***"
docker push xuzhe0205/$IMAGE:$BUILD_TAG