pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh '''#!/bin/bash
                    echo 'Building..'
                    echo $(ls)
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