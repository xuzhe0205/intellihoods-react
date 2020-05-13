pipeline {
    agent any
    environment {
        PASS = credentials('registry-pw') 
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo $PWD
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