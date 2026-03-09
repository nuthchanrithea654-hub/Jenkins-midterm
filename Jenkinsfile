pipeline {
    agent any

    stages {
        stage('Clone Check') {
            steps {
                echo 'Repository cloned successfully'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Basic Check') {
            steps {
                sh 'node -c index.js'
            }
        }
    }
}
