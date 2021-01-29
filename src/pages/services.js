import React from "react"

import styled from "styled-components"
import Avatar from "../components/avatar"
import SkillsBar from "../components/SkillsBar"
import Aboutme from "../components/Aboutme"
import "../components/skillbar.css"
import KeySkill from "../components/keySkill"
import KeySkillsData from "../data/KeySkills.json"
import {
  TopSkillsContainer,
  InfoAndSkillsSection,
} from "../components/generalStyling/ProfileSectionStyling"

const Services = () => (
  <div className="personalInfoBody">
    <div style={{ marginTop: "40px" }}>
      <Avatar />
    </div>
    <h1
      style={{
        backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
        WebkitTextFillColor: "transparent",
        textAlign: "center",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        fontWeight: "900",
        fontSize: "45px",
        marginTop: "50px",
      }}
    >
      Skills
    </h1>

    <TopSkillsContainer>
      {KeySkillsData.map(keySkill => {
        return (
          <KeySkill
            key={keySkill.id}
            label={keySkill.label}
            symbol={keySkill.symbol}
            skillDescription={keySkill.skillDescription}
            fadeInDelay={keySkill.id}
          />
        )
      })}
    </TopSkillsContainer>
    <InfoAndSkillsSection>
      <Aboutme />
      <SkillsBar />
    </InfoAndSkillsSection>
  </div>
)

export default Services
