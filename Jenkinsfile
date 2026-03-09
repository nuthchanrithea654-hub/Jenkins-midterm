pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/nuthchanrithea654-hub/Jenkins-midterm.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Syntax Check') {
            steps {
                sh 'node -c index.js'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t foodexpress-api .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop foodexpress-container || true'
                sh 'docker rm foodexpress-container || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name foodexpress-container -p 3000:3000 foodexpress-api'
            }
        }
    }
}