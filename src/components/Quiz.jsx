import React, { useEffect } from 'react'
import QuizStart from './QuizStart'
import Progressbar from './Progressbar';
import Timer from './Timer';
import Questions from './Questions';
import Result from './Result';
import { useDispatch, useSelector } from 'react-redux';
import{sampleQuestions} from "../data/questions";
import {setQuestions} from "../store/quizSlice";
const Quiz = () => {
 const dispatch = useDispatch()

 useEffect(()=>{
  dispatch(setQuestions(sampleQuestions))
 },[dispatch])

 const {questions,isQuizCompleted,currentQuestionIndex,isTimerActive,answers} = useSelector((state=>state.quiz))
//loading Quiz
if(questions.length === 0){
  return(<div className='min-h-screen flex items-center justify-center'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto'></div>
        <p className='mt-4 text-gray-600'>Loading..</p>
      </div>
  </div>
)}

if(isQuizCompleted){
  return(
    <div className='min-h-screen  px-4 py-8'>
      <Result/>
    </div>
  )
}

//Quiz start
 if(!isTimerActive && answers.length === 0){
  console.log(questions)
  return(
    <div className='min-h-screen flex items-center justify-center px-4 py-8'>
      <QuizStart/>
    </div>
  )
}
  return (
    <div>
       
        <div className='min-h-screen py-8 px-4'>
          <div className='max-w-4xl mx-auto mb-8'>
            <div className='bg-white rounded-xl shadow-lg p-6'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0'>
                <div className='flex-1'>
                  <Progressbar current={currentQuestionIndex +1} total={questions.length}/>
                </div>
                <div className='md:ml-6'>
                <Timer/>
                </div>
              </div>
            </div>
          </div>
           <Questions/>
        </div> 
       
    </div>
  )
}


export default Quiz