#!/bin/bash

echo posthem-react-nginx > /tmp/.auth
echo $BUILD_TAG >> /tmp/.auth
echo Qiantu2013 >> /tmp/.auth

scp -i /opt/prod /tmp/.auth prod-user@ec2-54-82-166-255.compute-1.amazonaws.com:/tmp/.auth
scp -i /opt/prod ./jenkins/deploy/publish.sh prod-user@ec2-54-82-166-255.compute-1.amazonaws.com:/tmp/publish.sh
ssh -i /opt/prod prod_user@ec2-54-82-166-255.compute-1.amazonaws.com "/tmp/publish.sh"
