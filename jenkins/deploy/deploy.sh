#!/bin/bash

echo posthem-react-nginx > /tmp/.auth
echo $BUILD_TAG >> /tmp/.auth
echo Qiantu2013 >> /tmp/.auth


scp -v /opt/prod /tmp/.auth prod-user@ec2-54-234-200-183.compute-1.amazonaws.com:/tmp/.auth
scp -v /opt/prod ./jenkins/deploy/publish.sh prod-user@ec2-54-234-200-183.compute-1.amazonaws.com:/tmp/publish.sh
ssh -v /opt/prod prod-user@ec2-54-234-200-183.compute-1.amazonaws.com "/tmp/publish.sh"
