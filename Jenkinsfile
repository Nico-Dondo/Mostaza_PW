pipeline {
    agent any
    stages {
        stage('Ejecutar Tests') {
            steps {
                // Solo ejecuta los tests. 
                // Asume que las dependencias ya están en la carpeta.
                bat 'npx playwright test'
            }
        }
    }
}
