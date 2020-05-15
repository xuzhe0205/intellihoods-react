#!/bin/bash
#sss
export IMAGE=$(sed -n '1p' /tmp/.auth)
export TAG=$(sed -n '2p' /tmp/.auth)
export PASS=$(sed -n '3p' /tmp/.auth)

docker login -u xuzhe0205 -p $PASS
cd ~/my-app && docker-compose up -d


