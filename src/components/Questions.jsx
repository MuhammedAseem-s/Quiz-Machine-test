import React, { useState } from 'react'

const Questions = () => {

  const quiz = [
    {
      question1: "which planet in our solar system is known as the red planet?",
      answers1: ["Alexander Fleming", "Alexander Graham", "Thomas Aluva Edison", "Mars"]
    },
    {
      question2: "asdfxdcgvbj2",
      answers2: ["msb", "mnsv", "svbxvs", "dsgb"]
    },
    {
      question3: "asdfxdcgvbj3",
      answers3: ["msb", "mnsv", "svbxvs", "dsgb"]
    }
  ];
  // const [display,setdisplay]=useState({A1:false,A2:false,A3:false,A4:false})
  const [question, setQuestion] = useState(quiz[0].question1)
  const [answers, setAnswers] = useState(quiz[0].answers1)

  const chooseAnswer = (e) => {
    if (e === "Mars") {
      // Get the element by its ID
      const quess1Element = document.getElementById('quess1');
      
      // Change the style to hide the element
      quess1Element.style.visibility = 'hidden';

      const quess2Element = document.getElementById('quess2');
      
      // Change the style to hide the element
      quess2Element.style.visibility = 'hidden';

      const quess3Element = document.getElementById('quess3');
      
      // Change the style to hide the element
      quess3Element.style.visibility = 'hidden';

      const quess4Element = document.getElementById('myElement');
      quess4Element .style.backgroundColor = 'green';

      const colorchange = document.getElementById('correct');
      colorchange.style.backgroundColor ="green"


      const text = document.getElementById('textchange');
      text.textContent = " correct";

      
      

    }
  };
  


      console.log("Correct")

    //   setQuestion(quiz[1].question2)
    // }else{
    //   console.log("Wrong")
   
  

  return (
    <div>
    <div className='bg-purple-900 h-[30rem]'>
      <div>
        <p className='text-white font-black  ml-[17rem] pt-[7rem] text-base sm:text-lg md:text-xl lg:text-2xl '>{question}</p>
      </div>
      <div className='flex  gap-2 mt-[2rem] pl-[5rem]'>

        <div id='quess1' onClick={() => chooseAnswer(answers[0])} className='bg-blue-800 h-[300px] w-[300px]'>
          <p className='flex justify-center mt-[7rem] text-white'>{answers[0]}</p>
        </div>
        <div id='quess2'onClick={() => chooseAnswer(answers[1])} className='bg-green-800 h-[300px] w-[300px]'>
          <p className='flex justify-center mt-[7rem] text-white'> {answers[1]}</p>
        </div>
        <div id='quess3'onClick={() => chooseAnswer(answers[2])}  className='bg-yellow-800 h-[300px] w-[300px]'>
          <p className='flex justify-center mt-[7rem] text-white'>{answers[2]}</p>
        </div>
        <div id='myElement'onClick={() => chooseAnswer(answers[3])}  className='bg-red-800 h-[300px] w-[300px] sticky top-0'>
          <p className='flex justify-center mt-[7rem] text-white'>{answers[3]}</p>
        </div>
        </div>
      </div>
      <div id='correct' className='bg-black w-[84.4rem] h-[7rem]' >
        <p id='textchange' className='text-white pl-[35rem] w-[1rem] h-[1rem] pt-[2rem]' ></p>
      </div>
    </div>

  )
}

export default Questions;