import { ReactElement } from 'react'
import contacts from '../data/contacts.json'

interface Props {
  className?: string
}

const   ConnectButton = ({ className }: Props): ReactElement => {
  return (
    <a
      href={contacts['linkedin']}
      target='_blank'
      className={'bg-orange-500 py-3 px-8 rounded-full font-bold text-white ' + className}
    >
      Connect
    </a>
  )
}

export default ConnectButton
