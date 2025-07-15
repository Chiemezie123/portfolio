import { ReactElement } from 'react'
import Section from '../Section.js'
import experiences from '../../data/experience.json'
import ExperienceSection from './ExperienceSection.js'

const Experience = (): ReactElement => {
  return (
    <Section title='Experiences' subtitle="I've achieved so far" border>
      <div className='flex flex-col gap-20'>
        {experiences.map((exp, i) => (
          <ExperienceSection
            key={exp.company}
            title={exp.title}
            company={exp.company}
            logoFile={exp.logoFile}
            website={exp.website}
            period={exp.period}
            location={exp.location}
            description={exp.description}
            className={i=== 0 ? "w-60": "w-20"}
          />
        ))}
      </div>
    </Section>
  )
}

export default Experience
