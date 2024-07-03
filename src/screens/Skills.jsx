import React from 'react'
import Data from '../data/Data'

const Skills = () => {
  const { skills } = Data;
  return (
    <div className='skills'>
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.id}>
            <img src={skill.Image} alt={skill.title} />
            {skill.title}
          </div>

        ))}
      </div>
    </div>
  )
}

export default Skills