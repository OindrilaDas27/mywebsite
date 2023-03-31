import React from "react";
import Typewriter from 'typewriter-effect';

import aboutContainer from '../../assets/aboutContainer.svg';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
        <div className="about">
            <img src={aboutContainer} className='typing-container'/>
            <div className="textarea">
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
                        .typeString('I love wreading and writing blogs!')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString("<span style='font-size: 1.8em; font-weight: 600'>Hello I'm Oindrila Das</span><br>")
                        .typeString("A web and app developer <br>")
                        .typeString("Click on the contact button to connect with me <3")
                        .start();
                    }}
                />
            </div>
        </div>
        </div>
    )
}

export default LandingPage