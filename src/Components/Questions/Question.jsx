import React, { useEffect, useState } from 'react'

export default function Question({questionarie}) {
    const [score, setScore]=useState(0)

    function giveAnswer(s, index){
        const question=questionarie[index];
        if(question.isAnswered==true) return;
        console.log(score+s)
        setScore(score+s)
    }
    
    
  return (
    <div className='mt-5 mb-5 '>
{questionarie.map((question, qIndex) => (
    <div key={qIndex} className="p-4 my-4 rounded-lg shadow-md bg-gradient-to-br from-yellow-200 to-yellow-300">
        <p className="pb-1 text-xl font-semibold text-blue-700">{question.question}</p>
        <ul>
            {question.answer.map((ans, index) => (
                <li
                    key={index}
                    onClick={() => {giveAnswer(ans.score, index);question.isAnswered=true}}
                    className="flex items-center py-1 pl-5 my-1 text-sm  transform rounded-md cursor-pointer "
                >
                    <span className="flex items-center justify-center w-4 h-4 mr-2 border border-gray-400 rounded-full">{index + 1}</span>
                    <span>{ans.ans}</span>
                </li>
            ))}
            {
                question.isAnswered?(
                    <p>Answered</p>
                ):(
                    <p>'Not Answer'</p>
                )
            }
        </ul>
    </div>
))}



    </div>
  )
}
