import React from 'react'
import homeImg from "../assets/homeicon/icon0.jpg"


export const Home = () => {
  return (
    <div className='home'>

        <div className="homeText animate__animated animate__fadeInLeft">

            <h2>Welcome to my portfolio!</h2>

            <h1 className='highlight'>I'm Matias Sagardia</h1> 
            <br />
            <h1>Full-Stack Developer</h1> 

            <h3>My goal is to build creative, functional, and innovative products. <br />
            I challenge myselft seeking to generate the best user experience.</h3>
            

            <div className="buttons">


                <button className='resume'>
                    <p>Download resume</p>
                </button>

                <button className='contact'>
                    <p>Contact me</p>
                </button>

            </div>

        </div>

        <div className="homeImg animate__animated animate__fadeInRight">
            <img src={homeImg} alt="" />
        </div>

    </div>
  )
}
