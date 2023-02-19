import React, { useCallback, useReducer } from 'react';

import Input from '../../../components/Elements/Input';
import Button from '../../../components/Elements/Button';

import { VALIDATOR_REQUIRE } from '../../../functions/Validators';

import './AddAnswer.css';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }

            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid,
                    },
                },
                isValid: formIsValid,
            };
        default:
            return state;
    }
};

const AddAnswer = (props) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            answer: {
                value: '',
                isValid: false,
            },
        },
        isValid: false,
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id,
        });
    }, []);

    const answerSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend
    };

    return (
        <React.Fragment>
            <Input
                id="answer"
                type="text"
                label="Answer"
                rows={7}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid answer!"
                onInput={inputHandler}
            />

            <Button
                type="submit"
                disabled={!formState.isValid}
                onClick={answerSubmitHandler}
            >
                Add
            </Button>
            <Button onClick={props.closeModal}>Close</Button>
        </React.Fragment>
    );
};

export default AddAnswer;
