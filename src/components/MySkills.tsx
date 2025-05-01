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
        <div>
            <img src={imagePath} alt={altValue} className="w-30 h-30 mx-auto scale-50" />
            <div className="text-red-500">{imageName}</div>
        </div>
    )
}

// find more skill icons here https://techicons.dev/icons/spring
const MySkills = () => {
    return (
        <>
            <div className='grid grid-rows-3 grid-cols-5'>
                <GridItem imagePath={kafkaLogo} altValue="kafka" imageName="Kafka" />
                <GridItem imagePath={springLogo} altValue="spring" imageName="Spring" />
                <GridItem imagePath={javaLogo} altValue="java" imageName="Java" />
                <GridItem imagePath={reactLogo} altValue='react' imageName="ReactJS" />
            </div>
        </>
    )
}

export default MySkills;