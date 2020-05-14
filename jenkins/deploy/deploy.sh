# #!/bin/bash

# echo maven-jenkins > /tmp/.auth
# echo $BUILD_TAG >> /tmp/.auth
# echo $PASS >> /tmp/.auth

# scp -i /opt/prod /tmp/.auth prod_user@ec2-52-87-162-189.compute-1.amazonaws.com:/tmp/.auth
# scp -i /opt/prod ./jenkins/deploy/publish prod_user@ec2-52-87-162-189.compute-1.amazonaws.com:/tmp/publish
# ssh -i /opt/prod prod_user@ec2-52-87-162-189.compute-1.amazonaws.com "/tmp/publish"
