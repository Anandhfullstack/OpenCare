import React from 'react';

import GetThreads from '../../functions/GetThreads';

import ThreadsList from './containers/ThreadsList';

import addIcon from '../../assets/icons/plus.png';
import './QnA.css';

const QnA = () => {
    const threads = GetThreads();
    return (
        <div>
            <h1 className="qna__title">Threads</h1>
            <button className="qna__create-thread-button">
                <img src={addIcon} alt="Add" />
                <p>Create Thread</p>
            </button>

            <hr />
            <ThreadsList items={threads} />
        </div>
    );
};

export default QnA;
