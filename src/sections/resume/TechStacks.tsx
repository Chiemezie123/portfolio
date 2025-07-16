import { ReactElement } from 'react'
import Section from '../Section.js'
import techStacks from '../../data/tech-stacks.json'

const TechStacks = (): ReactElement => {
  return (
    <Section title='Tech Stacks' subtitle="I've mostly worked with" >
      <div className='flex flex-wrap items-center justify-center gap-10'>
        {techStacks.map((item) => {
          const image = new URL(`../../assets/tech-stacks/${item.imageFile}`, import.meta.url).href

          return (
            <div key={item.name} className='flex flex-col gap-2 items-center justify-center'>
              <img src={image} className='w-20 h-20' alt={item.name} />
              <p className='font-semibold text-lg'>{item.name}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default TechStacks
