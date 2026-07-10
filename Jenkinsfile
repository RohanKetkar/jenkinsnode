pipeline {

    // Run pipeline on any available Jenkins agent
    agent any

    stages {

        stage("Branch Information") {

            steps {

                // Print the current Git branch being built
                echo "Branch Name : ${env.BRANCH_NAME}"

                // Print the Jenkins build number
                echo "Build Number : ${BUILD_NUMBER}"

                // Print the Jenkins job name
                echo "Job Name : ${JOB_NAME}"

            }

        }

        stage("Build") {

            steps {

                // Build the Maven project
                sh "mvn clean package"

            }

        }

    }

    post {

        success {

            // Executes if pipeline succeeds
            echo "Pipeline Successful"

        }

        failure {

            // Executes if pipeline fails
            echo "Pipeline Failed"

        }

    }

}