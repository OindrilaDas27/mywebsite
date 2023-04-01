import React from "react";
import { Link } from "react-router-dom";

import Typewriter from 'typewriter-effect';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { RxTwitterLogo } from 'react-icons/rx';
import { SiGmail, SiMedium } from 'react-icons/si';

import aboutContainer from '../../assets/aboutContainer.svg';
import displayPicture from '../../assets/displayPicture.svg';
import rotatingCircle from '../../assets/rotatingCircle.svg';
import './LandingPage.css';

const LandingPage = () => {
    return (
        // <div>
        <div className="about">
        <div className="textarea">
            <div className='typewriter'> 
                <Typewriter
                    onInit={(typewriter) => {
                    typewriter
                        .typeString('Hi there..!')
                        .callFunction(() => {
                            console.log('String typed out!');
                            })
                        .changeDelay(60)
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString('My name is Oindrila Das')
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString('I am a Web Developer')
                        .pauseFor(1500)
                        .deleteAll()
                        .deleteAll()
                        .typeString('... an App Dev enthusiast too ;)')
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString('I love reading and writing blogs!')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString("<span style='font-size: 1.8em; font-weight: 600'>Hello I'm Oindrila Das</span><br>")
                        .typeString("A web and app developer <br>")
                        .start();
                    }}
                />
            </div>
                <div className="socials">
                    <Link className="social-icon"><RxTwitterLogo /></Link>
                    <Link className="social-icon"><BsGithub /></Link>
                    <Link className="social-icon"><SiGmail /></Link>
                    <Link className="social-icon"><BsInstagram /></Link>
                    <Link className="social-icon"><SiMedium /></Link>
                </div>
                <img src={aboutContainer} className='typing-container' style={{height: "15em"}}/>
            </div>
            <img src={displayPicture} className='display-picture' />
            <img src={rotatingCircle} className='display-bg' />
        </div>
        // </div>
    )
}

export default LandingPage