import { BookOpen, Clock, Trophy, Play } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { startQuiz } from '../store/quizSlice'

const QuizStart = () => {
    const dispatch = useDispatch()

    const handleStartQuiz =() =>{
        dispatch(startQuiz())
    }
  return (
    <div className='max-w-2xl mx-auto '>
        <div className='bg-[#8DAA91] rounded-2xl shadow-xl p-6 text-center'>
            <div className='mb-2 py-1 bg-[#320E3B] text-zinc-200 outline-none shadow-lg shadow-black'>
                <div className=' bg-[#D2BF55] inline-flex items-center justify-center w-16 h-16 rounded-full mb-2'>
                <BookOpen className='w-8 h-8'/>
                </div>
                <h1 className='font-bold text-4xl mb-4'>React Quiz</h1>
                <p className='text-sm mb-4 max-w-2xl mx-auto'>
                    Test your knowledge of Logical Reasoning . Answer multiple choice of questions and see how well you know the logics!!
                </p>
            </div>
            {/*cards*/}
            <div className='grid md:grid-cols-3 gap-4 mb-4 bg-amber-200 shadow-lg shadow-black'>
                <div className='p-6 rounded-xl'>
                    <div className='flex items-center justify-center mb-4'>
                    <BookOpen className='w-8 h-8 text-[#320E3B]'/>
                    </div>
                    <div className='text-2xl font-bold text-[#320E3B] mb-2'>8</div>
                    <div className='text-2xl font-medium text-[#320E3B] mb-2'>Questions</div>
                </div>

                <div className='p-6 rounded-xl'>
                    <div className='flex items-center justify-center mb-4'>
                    <Clock className='w-8 h-8 text-[#320E3B]'/>
                    </div>
                    <div className='text-2xl font-bold text-[#320E3B]'>5:00</div>
                    <div className='text-2xl font-medium text-[#320E3B] mb-2'>Minutes</div>
                </div>

                <div className='p-6 rounded-xl'>
                    <div className='flex items-center justify-center mb-4'>
                    <Trophy className='w-8 h-8 [#320E3B]'/>
                    </div>
                    <div className='text-2xl font-bold text-[#320E3B] mb-2'>100%</div>
                    <div className='text-2xl font-medium text-[#320E3B] mb-2'>Max Score</div>
                </div>
            </div>
            {/*Rules*/}
            <div className='mb-4'>
             <h3 className='text-xl font-semibold mb-0.5'>Quiz rules</h3>
             <div className='max-w-2xl mx-auto text-left rounded p-6'>

              <ul className='space-y-2 text-gray-700'>
                
                <li className='flex items-start'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-[#320E3B]  rounded-full flex items-center justify-center
                text-sm font-semibold mr-3 mt-0.5'>1.</span>
                <span className='text-[#320E3B] font-semibold'>Each Question has multiple choice of answer</span>
                </li>

                <li className='flex items-start'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-[#320E3B] rounded-full flex items-center justify-center
                text-sm font-semibold mr-3 mt-0.5'>2.</span>
                <span className='text-[#320E3B] font-semibold'>You have 5 Minutes to complete all question</span>
                </li>

                <li className='flex items-start'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-[#320E3B] rounded-full flex items-center justify-center
                text-sm font-semibold mr-3 mt-0.5'>3.</span>
                <span className='text-[#320E3B] font-semibold'>Once you select the answer, you will see the explanation</span>
                </li>

                <li className='flex items-start'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-[#320E3B]  rounded-full flex items-center justify-center
                text-sm font-semibold mr-3 mt-0.5'>4.</span>
                <span className='text-[#320E3B] font-semibold'>You can Navigate to previous question</span>
                </li>

              </ul>
            </div>
            </div>
            <button className='inline-flex items-center space-x-2 py-2 px-8 text-white rounded-xl transform hover:scale-105
            transition-all duration-200 shadow-lg font-semibold text-lg cursor-pointer bg-[#320E3B] hover:bg-amber-200 
            hover:text-[#320E3B]' onClick={handleStartQuiz}>
                <Play size={24}/>
                <span>Start Quiz</span>
            </button>
        </div>
    </div>
  )
}

export default QuizStart