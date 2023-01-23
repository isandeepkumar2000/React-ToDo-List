import React from "react";
import {
  CompanyLogo,
  CompanyName,
  CompanyNameDiv,
  EligibleDiv,
  EligibleSpan,
  FlexBox,
  FlexDisplayFlex,
  ImagetextNameMargin,
  JobPortalContainer,
  JobRoleHeading,
  LocationSpan,
  MainEligibleDetals,
  MainHeadingPoints,
  MainJobPortal,
  PlaceNameMargin,
  ViewDetails,
  ViewDetailsArrow,
  ViewDetailsMargin,
} from "./stylecomponents";

const JobPortalOpenApply = () => {
  return (
    <JobPortalContainer className="jobPortal-Container">
      <div className="jobPortal-items">
        <FlexBox className="jobPortal-logo-Company">
          <CompanyNameDiv>
            <CompanyName>TCS Tata Consultancy Services</CompanyName>
          </CompanyNameDiv>
          <CompanyLogo>
            <img src="tcs.png" alt="CompanyLogo" />
          </CompanyLogo>
        </FlexBox>

        <div className="jobPortal-JobRole">
          <JobRoleHeading>Backend Developer</JobRoleHeading>
        </div>

        <MainJobPortal className="jobPortal-Location-ctc-position">
          <div className="Location-Box">
            <FlexDisplayFlex>
              <div className="Image">
                <img src="location.png" alt="LocationImage" />
              </div>
              <ImagetextNameMargin className="Actions">
                <LocationSpan>LOCATION</LocationSpan>
              </ImagetextNameMargin>
            </FlexDisplayFlex>
            <PlaceNameMargin>
              <MainHeadingPoints>Hyderabad</MainHeadingPoints>
            </PlaceNameMargin>
          </div>
          <div className="CTC-Box">
            <FlexDisplayFlex>
              <div className="Image">
                <img src="Icon.png" alt="LocationImage" />
              </div>
              <ImagetextNameMargin className="Actions">
                <LocationSpan>CTC</LocationSpan>
              </ImagetextNameMargin>
            </FlexDisplayFlex>
            <PlaceNameMargin>
              <MainHeadingPoints>$4.5L - $6.5L</MainHeadingPoints>
            </PlaceNameMargin>
          </div>
          <div className="Positions-Box">
            <FlexDisplayFlex>
              <div className="Image">
                <img src="Line.png" alt="LocationImage" />
              </div>
              <ImagetextNameMargin className="Actions">
                <LocationSpan>POSITIONS</LocationSpan>
              </ImagetextNameMargin>
            </FlexDisplayFlex>
            <PlaceNameMargin>
              <MainHeadingPoints>3</MainHeadingPoints>
            </PlaceNameMargin>
          </div>
          <div className="ApplyBy-Box">
            <FlexDisplayFlex>
              <div className="Image">
                <img src="lightLine.png" alt="LocationImage" />
              </div>
              <ImagetextNameMargin className="Actions">
                <LocationSpan>APPLY BY</LocationSpan>
              </ImagetextNameMargin>
            </FlexDisplayFlex>
            <PlaceNameMargin>
              <MainHeadingPoints>16 May 22, 6:30 PM</MainHeadingPoints>
            </PlaceNameMargin>
          </div>
        </MainJobPortal>
        <MainEligibleDetals className="jobPortal-Eligible-View">
          <EligibleDiv className="You-Are-Eligible">
            <div>
              <img src="Ellipse 239.png" alt="RoundImg" />
            </div>
            <div>
              <EligibleSpan>You are Eligible</EligibleSpan>
            </div>
          </EligibleDiv>
          <div>
            <FlexDisplayFlex className="View-Details">
              <ViewDetailsMargin>
                <ViewDetails>View Details</ViewDetails>
              </ViewDetailsMargin>
              <ViewDetailsArrow>
                <img src="Round.png" alt="RoundImg" />
              </ViewDetailsArrow>
            </FlexDisplayFlex>
          </div>
        </MainEligibleDetals>
      </div>
    </JobPortalContainer>
  );
};

export default JobPortalOpenApply;
