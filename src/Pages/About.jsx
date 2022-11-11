import Bimage from '../Images/about_image.jpg'

const About=() => {
  return (
    
    <div>
    <div className='my_image1'>
     <img className="my_image" src={ Bimage }/>
     </div>
      <div className="name">Hello,<br/>
       I am Bushra Sayed </div>
      <p className="about_para">I am Bushra Sayed from Lucknow. I am a goal-oriented, creative and hardworking person.</p>
      <p className="about_para">I have done Web Development course from Udemy and a self learner and I am very passionate about my work because I love what I do.</p>
      <p className="about_para">
     I have a bachelor's  and Master's degree in Arts/History from Mumbai University. </p>
     <p className="about_para">I would Like to build my carrier in this Field and I am truly Interested
     and I am always energetic and eager to learn new skills.
     Seeking a challenging position in a reputable organization to expand and utilize my learning, skills and knowledge.   </p>
      
      <div className='thanks'>Thankyou</div>
    </div>
  )
}

export default About


