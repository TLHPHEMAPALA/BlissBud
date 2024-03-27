import React from 'react'
import './Questionarie.css';
import Question from '../Questions/Question';
import Navbar from '../NavBar/nav'; 


export default function Questionarie() {
  const questionarisArr=[
    {
      question:'How would you rate your current workload or academic demands?',
      answer:[
        {
          ans:'Low workload',
          score:1
        },
        {
          ans:'Moderate workload',
          score:2
        },
        {
          ans:'High workload',
          score:3
        },
        
      ],
      isAnswered:false
    },
    {
      question:'On a scale of 1 to 5, how well do you manage your time?',
      answer:[
        {
          ans:'Very well',
          score:1
        },
        {
          ans:'Moderately well',
          score:2
        },
        {
          ans:'Neutral',
          score:3
        },
        {
          ans:'Poorly',
          score:4
        },
        {
          ans:'Very poorly',
          score:5
        }
      ],
      isAnswered:true
    },
    {
      question:'How often do you experience physical symptoms of stress (e.g., headaches, muscle tension)?',
      answer:[
        {
          ans:'Rarely ',
          score:1
        },
        {
          ans:'Occasionally',
          score:2
        },
        {
          ans:'Frequently',
          score:3
        },
      ],
      isAnswered:false
    },
    {
      question:'Do you feel supported by friends and family?',
      answer:[
        {
          ans:'Strongly supported',
          score:1
        },
        {
          ans:'Moderately supported',
          score:2
        },
        {
          ans:'Neutral',
          score:3
        },
        {
          ans:'Not very supported',
          score:4
        },
        {
          ans:'Not supported at all',
          score:5
        }
      ],
      isAnswered:false
    },
    {
      question:'How often do you engage in relaxation or self-care activities?',
      answer:[
        {
          ans:'Daily',
          score:1
        },
        {
          ans:'Several times a week',
          score:2
        },
        {
          ans:'Occasionally',
          score:3
        },
        {
          ans:'Rarely',
          score:4
        },
        {
          ans:'Never',
          score:5
        }
      ],
      isAnswered:false
    },

  ]
  return (
    <div >
       <Navbar/>

      <h2 className='flex justify-center pb-1 mt-5  mb-12 text-3xl font-semibold'>Ready to Change the way you feel ?</h2>
      <p className='flex justify-center text-center text-2xl'>We all face daily challenges.But no matter what your are going through , there are skills you can learn that can profoundly imporove mental state.</p>
      <Question  questionarie={questionarisArr}></Question>
    </div>
  )
}
