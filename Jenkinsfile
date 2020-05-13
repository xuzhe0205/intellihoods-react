pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bash '''#!/bin/bash
                    echo 'Building..'
                    echo $(pwd)
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}