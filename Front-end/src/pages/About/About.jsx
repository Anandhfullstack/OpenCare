import React from 'react';

import './About.css';

const About = () => {
    return (
        <div>
            <h1 className="center about__title">About Us</h1>
            <hr />

            <div className='about__sections'>
              <section className='what-container'>
                <h2>What is OpenCare?</h2>
                <p>OpenCare is an online Q&A forum designed to help people get reliable answers quick. <br/> At OpenCare, we want to solve the problem of healthcare inaccessibility.<br/><br/>
                The consequences of healthcare inaccessibility can be severe, including delayed treatment, worsened health outcomes, and increased healthcare costs in the long run.<br/>
                To address this issue, policymakers and healthcare providers need to work together to find solutions that ensure everyone has access to the healthcare services they need.<br/><br/>
                This app allows for accessible healthcare based on an online Q&A for medical advice and is a valuable tool for people who have limited access to healthcare services.<br/>
                This app could provide users with a platform to ask medical questions and receive answers from qualified healthcare professionals.<br/><br/>
                The app has a user-friendly interface that makes it easy for users to navigate and find the information they need.<br/>
                To use the app, users input their medical questions, and the app would match them with qualified healthcare professionals who are best equipped to provide an accurate answers.<br/>
                The healthcare professionals could include doctors, nurses, and other medical professionals.<br/><br/>
                The Q&A feature could also include a search function that allows users to look up previously asked questions and answers.<br/>
                This could be particularly helpful for people who have common medical conditions and want to learn more about managing their symptoms.<br/><br/>
                In addition to the Q&A feature, this app also has an upvote and downvote feature.<br/>
                This allows experts to critique others' opinions enabling a more targeted response to ensure the best type of care possible is provided to the patient.<br/>
                This app could help bridge the gap between patients and medical professionals and provide users with the information they need to manage their health.
                </p>
              </section>
            </div>
        </div>
    );
};

export default About;
