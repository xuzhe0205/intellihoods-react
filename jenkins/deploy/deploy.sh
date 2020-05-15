#!/bin/bash

echo posthem-react-nginx > /tmp/.auth
echo $BUILD_TAG >> /tmp/.auth
echo Qiantu2013 >> /tmp/.auth


scp -i /opt/zhekey.pem /tmp/.auth ubuntu@ec2-3-85-25-56.compute-1.amazonaws.com:/tmp/.auth
scp -i /opt/zhekey.pem ./jenkins/deploy/publish.sh ubuntu@ec2-3-85-25-56.compute-1.amazonaws.com:/tmp/publish.sh
ssh -i /opt/zhekey.pem ubuntu@ec2-3-85-25-56.compute-1.amazonaws.com "/tmp/publish.sh"
