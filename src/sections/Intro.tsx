import { ReactElement } from 'react'
import flag from '../assets/nigeria-flag-icon.svg'
import Contacts from '../components/Contacts.js'
import ConnectButton from '../components/ConnectButton.js'
import profile from '../data/profile.json'

const Intro = (): ReactElement => {
  return (
    <div
      id='home'
      className={
        'bg-contain bg-no-repeat bg-right border-b flex flex-col justify-center items-center ' +
        'md:items-start gap-5 text-gray-500 text-center md:text-left ' +
        `md:bg-background`
      }
      style={{ height: '92vh' }}
    >
      <p className='text-4xl font-semibold'>Hello, I'm</p>
      <p className='text-6xl font-extrabold text-gray-600 max-w-[500px]'>{profile.name}</p>
      <p className='text-4xl font-semibold'>{profile.title}</p>
      <p className='text-2xl flex gap-2 items-center'>
        <span>{profile.country}</span> <img src={flag} alt='Flag' className='h-5' />
      </p>

      <ConnectButton className='my-5' />

      <Contacts />
    </div>
  )
}

export default Intro
