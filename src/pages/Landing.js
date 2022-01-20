import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Job <span>Tracking</span> app</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis tempore inventore numquam vel blanditiis? Officia rerum, ullam iusto, molestias delectus vel quidem vitae omnis obcaecati repellendus commodi dolorum! Beatae, molestiae.</p>
                    <Link to='/register' className='btn btn-hero'>
                        Login/Register
                    </Link>
                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    )
}



export default Landing

