pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo $(pwd)
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