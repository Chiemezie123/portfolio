import { ReactElement } from 'react'
import photo from '../assets/photo.jpg'
import profile from '../data/profile.json'

const About = (): ReactElement => {
  return (
    <div
      id='about'
      className='flex flex-col md:flex-row items-center gap-10 text-center md:text-left'
    >
      <img src={photo} alt='Photo' className='w-60 h-60 rounded' />
      <div className='flex flex-col items-center md:items-start'>
        <p className='text-4xl font-bold'>{profile.name}</p>
        <p className='font-medium text-orange-500'>{profile.title}</p>
        <p className='py-5 mb-5 text-left'>{profile.about}</p>
      </div>
    </div>
  )
}

export default About
