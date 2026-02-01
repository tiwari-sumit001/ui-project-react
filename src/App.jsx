import React from 'react'
import Section1 from './components/Section 1/Section1'
import Section2 from './components/Section 2/Section2'

const App = () => {
  const users=[
  {img: 'https://plus.unsplash.com/premium_photo-1667520014581-a4062803d59d?w=600&auto=format&fit=crop&q=60', 
  intro:'',
  color:'red',
  tag:'Satisfied'},

  {img: 'https://media.istockphoto.com/id/2196870531/photo/making-decision-on-the-move.webp?a=1&b=1&s=612x612&w=0&k=20&c=rzFeaIUuiSoIUr2ihFB2qv26Fl3V3VkIMgygTSBbBo0=', 
  intro:'',
  color:'blue',
  tag:'Underserved'},

  {img: 'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
  intro:'',
  color:'lightseagreen',
  tag:'UnderBanked'},

    {img: 'https://images.unsplash.com/photo-1765648684613-b77086065bc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D', 
  intro:'',
  color:'pink',
  tag:'UnPaid'},
  
  {
    img:"https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro:'',
   color:'black',
    tag:'Average'
  }
   
  

  ]
  return (
    <div>
         <Section1 users={users}/>
         <Section2/>
    </div>
  )
}

export default App
