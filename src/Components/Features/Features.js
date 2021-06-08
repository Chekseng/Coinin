import React from 'react'
import { FeatureContainer, FeatureHeading, FeatureSubHeading, FeatureBox, FeatureBoxLeft, FeatureBoxRight, FeatureItem, FeatureTitle, FeatureParagraph } from './FeaturesStyles'
import FeaturesData from './FeaturesData'

const Features = () => {
  return (
    <FeatureContainer id="Features">
      <FeatureHeading>Our Features</FeatureHeading>
      <FeatureSubHeading>A List Of The Features.</FeatureSubHeading>

      <FeatureBox>
        {
          FeaturesData.map((feature) => (
            <FeatureItem key={feature.id}>
              <FeatureBoxLeft>
                {feature.icons}
              </FeatureBoxLeft>

              <FeatureBoxRight>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureParagraph>{feature.desc}</FeatureParagraph>
              </FeatureBoxRight>
            </FeatureItem>
          ))
        }
      </FeatureBox>
    </FeatureContainer>
  )
}

export default Features
