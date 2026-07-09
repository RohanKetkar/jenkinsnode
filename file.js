pipeline{
    
    agent any
    
    
    stages{
        
        stage("matrixbuild"){
                matrix{
                    axes{
                      axis{
                        name 'OS'
                        values 'window' , 'ubuntu'
                      }
                      axis {
                        name 'java'
                        values '18','28'
                      }
                }
                stages{
               stage("build"){
                     steps{
                       echo "building is ${OS}"
                       echo "building is ${java}"
                }
       
            }
            }
                }
            }
            stage("normalbuild"){
                steps{
                    echo "complete"
                }
            }
        
        }
    }
