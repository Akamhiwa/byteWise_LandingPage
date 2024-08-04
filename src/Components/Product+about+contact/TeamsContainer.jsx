import TeamsPositiveSlider from "./TeamsPositiveSlider"
import TeamsNegativeSlider from "./TeamsNegativeSlider"

const TeamsContainer = () => {
    const Team1=[
        {
            name:"Username",
            workSpace:"workspace name",
            image:"../../public/images/ProfileImage.jpg"
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:"../../public/images/ProfileImage.jpg"
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:"../../public/images/ProfileImage.jpg"
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:"../../public/images/ProfileImage.jpg"
        },
    ]
    const Team2=[
        {
            name:"Username",
            workSpace:"workspace name",
            image:"../../public/images/ProfileImage.jpg"
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:"../../public/images/ProfileImage.jpg"
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:"../../public/images/ProfileImage.jpg"
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:"../../public/images/ProfileImage.jpg"
        }, 
    ]
    const Team3=[
        {
            name:"Username",
            workSpace:"workspace name",
            image:"../../public/images/ProfileImage.jpg"
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:"../../public/images/ProfileImage.jpg"
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:"../../public/images/ProfileImage.jpg"
        },
        {
            name:"Username",
            workSpace:"workspace name",
            image:"../../public/images/ProfileImage.jpg"
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