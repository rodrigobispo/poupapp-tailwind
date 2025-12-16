import { IconSavings } from '../icons'
import { ProgressBar } from '../ProgressBar'

export const SavingStatus = ({ percent }) => {

  return (
    <div className="flex flex-col gap-8">
      <p className='text-secondary-income flex items-center gap-2 justify-center text-xl leading-[125%]'>
        <IconSavings /> Economizar
      </p>
      <ProgressBar percent={percent} />
    </div>
  )
}