pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh '''#!/bin/bash
                    echo 'Building..'
                    ./jenkins/build/bundle.sh
                    ./jenkins/build/build.sh
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Push'){
            steps {
                echo 'Deploying....'
                sh '''#!/bin/bash
                '''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh '''#!/bin/bash
                '''
            }
        }
    }
}