#!/usr/bin/env groovy

node {
    
    stage('checkout') {
        checkout scm
    }

    stage('install tools') {
        if (isUnix()) {
            sh "./mvnw com.github.eirslett:frontend-maven-plugin:install-node-and-npm -DnodeVersion=v6.10.0 -DnpmVersion=4.3.0"
        } else {
            bat(/"${MAVEN_HOME}\bin\mvn" com.github.eirslett:frontend-maven-plugin:install-node-and-npm -DnodeVersion=v6.10.0 -DnpmVersion=4.3.0/)
        }
    }


}
