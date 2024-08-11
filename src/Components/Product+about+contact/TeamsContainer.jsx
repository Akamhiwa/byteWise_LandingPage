import TeamsPositiveSlider from "./TeamsPositiveSlider"
import TeamsNegativeSlider from "./TeamsNegativeSlider"
import team1 from '../../assets/images/ProfileImage.jpg'
const TeamsContainer = () => {
    const Team1=[
        {
            name:"Username",
            workSpace:"workspace name",
            image:team1
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:team1
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:team1
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:team1
        },
    ]
    const Team2=[
        {
            name:"Username",
            workSpace:"workspace name",
            image:team1
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:team1
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:team1
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:team1
        }, 
    ]
    const Team3=[
        {
            name:"Username",
            workSpace:"workspace name",
            image:team1
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:team1
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:team1
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:team1
        },
    ]
  return (
    <div>
         <div className="flex flex-col lg:gap-[32px] gap-[22px]">
              <TeamsPositiveSlider TeamData={Team1} />
              <TeamsNegativeSlider TeamData={Team2} />
              <TeamsPositiveSlider TeamData={Team3}/>
        </div>
    </div>
  )
}

export default TeamsContainer