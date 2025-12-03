import React from 'react'

const Progressbar = ({current,total,className=``}) => {

  const percentage = Math.round((current/ total)*100)
  return (
    <div className={`w-full ${className}`}>
        <div className='flex items-center justify-between mb-2'>
            <span className='text-sm font-medium text-[#320E3B]'>Question {current} of {total}</span>
            <span className='text-sm font-medium text-[#320E3B]'>{percentage}%</span>
        </div>
        <div className='h-3 w-full rounded-2xl bg-white overflow-hidden'>
            {/* Progressbar */}
            <div className='bg-amber-300 h-full rounded-full shadow-sm transition-all duration-500 ease-out '
            style={{width: `${percentage}%`}}>

            </div>
        </div>
    </div>
  )
}

export default Progressbar