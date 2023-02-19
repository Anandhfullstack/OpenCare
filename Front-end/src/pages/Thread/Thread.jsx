import React from 'react';
import { useParams } from 'react-router-dom';

import GetThreads from '../../functions/GetThreads';

import User from '../../components/Elements/User';

import AnswersList from './containers/AnswersList';

import airplane from '../../assets/icons/airplane.png';
import addIcon from '../../assets/icons/plus.png';
import './Thread.css';

const Thread = (props) => {
    const threads = GetThreads();
    const { threadId } = useParams();

    let thread = null;
    for (let index = 0; index < threads.length; index++) {
        const element = threads[index];
        if (element.id === threadId) {
            thread = element;
        }
    }

    if (thread === null) {
        return (
            <div className="thread__not-found">
                <h1 className="center">404</h1>
                <h3 className="center">Not Found</h3>
                <hr />
                <h4 className="center">
                    What a weird thread that we searched up...
                </h4>
                <img
                    src={airplane}
                    alt="Airplane"
                    className="thread__not-found-img"
                />
            </div>
        );
    }

    return (
        <div>
            <div className="thread-container">
                <h2 className="thread-container__subject">{thread.subject}</h2>
                <h3 className="thread-container__description">
                    {thread.description}
                </h3>
                <User
                    id={thread.creator}
                    className="thread-container__creator"
                />
            </div>
            <hr />
            <button className="thread__add-answer-button">
                <img src={addIcon} alt="Add" />
                <p>Add Answer</p>
            </button>
            <AnswersList items={thread.answers} />
        </div>
    );
};

export default Thread;
