pipeline {
    agent any

    stages {

        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Instalar navegadores Playwright') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Ejecutar Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
}
