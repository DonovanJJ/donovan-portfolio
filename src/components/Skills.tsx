import kafkaLogo from '/images/kafka.svg'
import springLogo from '/images/spring.svg'
import javaLogo from '/images/java.svg'
import reactLogo from '/images/react.svg'

type gridProps = {
    imagePath: string,
    altValue: string,
    imageName: string
}

const GridItem = ({ imagePath, altValue, imageName }: gridProps) => {
    return (
        <div className="flex flex-col items-center justify-center my-1 transform transition-transform duration-300 hover:scale-110">
            <img src={imagePath} alt={altValue} className="sm:w-12 sm:h-12 md:w-14 md:h-14" />
            <div className="text-xs">{imageName}</div>
        </div>
    )
}

// find more skill icons here https://techicons.dev/icons/spring
const Skills = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-5/6 lg:w-3/4">
                <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4 w-11/12 mx-auto">
                    <GridItem imagePath={kafkaLogo} altValue="kafka" imageName="Kafka" />
                    <GridItem imagePath={springLogo} altValue="spring" imageName="Spring" />
                    <GridItem imagePath={javaLogo} altValue="java" imageName="Java" />
                    <GridItem imagePath={reactLogo} altValue="react" imageName="ReactJS" />
                    <GridItem imagePath={reactLogo} altValue="react" imageName="ReactJS" />
                    <GridItem imagePath={reactLogo} altValue="react" imageName="ReactJS" />
                    <GridItem imagePath={javaLogo} altValue="java" imageName="Java" />
                    <GridItem imagePath={reactLogo} altValue="react" imageName="ReactJS" />
                    <GridItem imagePath={reactLogo} altValue="react" imageName="ReactJS" />
                    <GridItem imagePath={reactLogo} altValue="react" imageName="ReactJS" />
                    <GridItem imagePath={javaLogo} altValue="java" imageName="Java" />
                    <GridItem imagePath={reactLogo} altValue="react" imageName="ReactJS" />
                    <GridItem imagePath={reactLogo} altValue="react" imageName="ReactJS" />
                    <GridItem imagePath={reactLogo} altValue="react" imageName="ReactJS" />
                </div>
            </div>
        </div>
    )
}



export default Skills;