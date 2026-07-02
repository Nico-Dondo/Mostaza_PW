pipeline {
    agent any

    stages {

        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Ejecutar Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

    }
}
