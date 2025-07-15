import { ReactElement } from 'react'

interface Props {
  title: string
  company: string
  logoFile: string
  website: string
  period: string
  location: string
  description: string
  className:string
}

const ExperienceSection = ({
  title,
  company,
  logoFile,
  website,
  period,
  location,
  description,
  className
}: Props): ReactElement => {
  const logo = new URL(`../../assets/company-logos/${logoFile}`, import.meta.url).href

  return (
    <div className='flex flex-col items-center md:flex-row md:items-start gap-8 px-8'>
      <a href={website} target='_blank'>
        <img src={logo} alt={company} className={`${className}`} />
      </a>
      <div className='text-center md:text-left'>
        <h2 className='font-semibold text-2xl'>{title}</h2>
        <p className='font-semibold text-orange-500 text-lg'>{company}</p>
        <p>{period}</p>
        <p>{location}</p>

        <p className='mt-6 text-left'>{description}</p>
      </div>
    </div>
  )
}

export default ExperienceSection
