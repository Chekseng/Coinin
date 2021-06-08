import React from 'react'
import TeamData, { TeamDataIcons } from './TeamData'
import { TeamSection, TeamMainHeading, TeamMainSubHeading, TeamBox, TeamItem, TeamImage, TeamHeading, TeamRole, TeamParagraph, TeamIconBox } from './TeamStyles'
import './Team.css'

const Team = () => {
  return (
    <TeamSection id="Team">
        <TeamMainHeading>Meet Our Team</TeamMainHeading>
        <TeamMainSubHeading>Our experts in the field of crypto currency can always help you with any of your questions!</TeamMainSubHeading>
      <TeamBox>
        {
          TeamData.map((data) => {
            return(
              <TeamItem key={data.id}>
                <TeamImage className={data.cName}></TeamImage>
                <TeamHeading>{data.name}</TeamHeading>
                <TeamRole>{data.role}</TeamRole>
                <TeamParagraph>{data.desc}</TeamParagraph>
                <TeamIconBox>{
                TeamDataIcons.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))
                }</TeamIconBox>
              </TeamItem>
            )
          })
        }
      </TeamBox>
    </TeamSection>
  )
}

export default Team
