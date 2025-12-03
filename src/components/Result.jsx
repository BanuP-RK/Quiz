import { Trophy,Clock, Target, Award, RefreshCcw } from 'lucide-react'
import React from 'react'
import Questions from './Questions';
import { resetQuiz } from '../store/quizSlice';

import { useDispatch, useSelector } from 'react-redux';

const Result = () => {

    const dispatch = useDispatch();
    const {score,questions,answers,timeLeft} = useSelector((state)=> state.quiz)
    const totalQuestions = questions.length;
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    const timeUsed = 300 -timeLeft;
    const minUsed = Math.floor(timeUsed /60)
    const secondUsed = timeUsed % 60

    const handleReset = ()=>{
        dispatch(resetQuiz())
    }

  return (
    <div className='max-w-2xl mx-auto'>
        <div className='bg-white rounded-2xl shadow-xl p-8 text-center' >
         {/*Header*/}
         <div className='mb-8'>
               <div className={`bg-[#D2BF55] inline-flex items-center justify-center w-16 h-16 rounded-full mb-2`} >
                <Trophy className='w-8 h-8'/>
                </div>

                <h1 className='font-bold text-2xl mb-4'> Quiz Completed</h1>
                <p className='text-sm mb-4 max-w-2xl mx-auto'>performance message</p>
         </div>
   
             <div className='grid md:grid-cols-3 gap-4 mb-4 bg-amber-200 shadow-lg shadow-black'>
                <div className='p-4 rounded-xl'>
                    <div className='flex items-center justify-center mb-4'>
                    <Target className='w-8 h-8 text-[#320E3B]'/>
                    </div>
                    <div className='text-2xl font-bold text-[#320E3B] mb-2'>{score}/  {totalQuestions}</div>
                    <div className='text-xl font-medium text-[#320E3B] mb-2'>Question correct</div>
                </div>

                <div className='p-6 rounded-xl'>
                    <div className='flex items-center justify-center mb-4'>
                    <Award className='w-8 h-8 text-[#320E3B]'/>
                    </div>
                    <div className='text-2xl font-bold text-[#320E3B]'>{percentage}%</div>
                    <div className='text-xl font-medium text-[#320E3B] mb-2'>Score Percentage</div>
                </div>

                <div className='p-6 rounded-xl'>
                    <div className='flex items-center justify-center mb-4'>
                    <Clock className='w-8 h-8 [#320E3B]'/>
                    </div>
                    <div className='text-2xl font-bold text-[#320E3B] mb-2'>{minUsed}:{secondUsed.toString().padStart(2,"0")}</div>
                    <div className='text-xl font-medium text-[#320E3B] mb-2'>Time used</div>
                </div>
            </div>
                {/*result*/}
            <div className='mb-8'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>Question Review</h3>
                {/*Displaying random question*/}
                <div className='grid gap-4 max-h-64 overflow-y-auto'>
                    {questions.map((question,index)=>{
                        const userAnswer = answers.find((a)=>a.questionId === question.id)
                        const isCorrect = userAnswer?.isCorrect ?? false;

                        return(
                        <div key={index} className={`flex items-center justify-between p-4 rounded-lg border-2 
                        ${isCorrect 
                        ? "border-green-200 bg-green-50"
                        :"border-red-200 bg-red-50"}`}>
                            <span className='text-sm font-medium text-gray-700'>Question {index+1}</span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${isCorrect  ? "border-green-200 bg-green-50"
                        :"border-red-200 bg-red-50"}`}></span>
                        </div>)
                    })}
                </div>
                <button className='inline-flex items-center space-x-3 px-8 py-4 bg-black
                 text-white rounded-xl transition-all duration-200 cursor-pointer' onClick={handleReset}>
                    <RefreshCcw size={24} className='pr-2'/>
                    Take a quiz again
                </button>
            </div>

        </div>
    </div>
  )
}

export default Result