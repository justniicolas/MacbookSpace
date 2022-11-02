import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, useBounds } from '@react-three/drei'





export default function Experience()
{
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    

    
    
    return <>


       

        <color args={ [ '#695b5b' ] } attach="background" />

        <Environment preset="city" />
        
        <PresentationControls
            global
            
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
            
        >
            <Float rotationIntensity={ 0.4 } >  
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#1A37A0' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <primitive
                    object={ computer.scene }
                    position-y={ - 1.2 }
                    position-x={ - 1.2 }
                    // rotation-x={ 0.13 }
                    onClick={(computer) => 
                        console.log('click')
  
                    }
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }
                    >
                        <iframe src="https://www.world-lolo.com/images/uploads/image.num1342194983.of.world-lolo.com.jpg" />
                    </Html>
                </primitive>

                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ 1 }
                    position={ [ 2, 0.50, 0.75 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={ 2 }
                >
                    Space in the Screen
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    

    </>
}