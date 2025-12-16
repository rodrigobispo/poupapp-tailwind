export const ProgressBar = ({ percent }) => {
  return (
    <div className="w-full bg-neutral-darker border-primary-highlight rounded-lg h-10 border border-solid overflow-hidden">
      <div
        className="
          bg-primary-highlight
          h-full
          flex
          items-center
          justify-center
          text-neutral-darker
          font-bold
          transition-all
          duration-300
          ease-in-out
        "
        style={{ width: `${percent}%` }}
      >
        {percent}%
      </div>
    </div>
  )
}