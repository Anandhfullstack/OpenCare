import React, { useState, useContext } from 'react';

import Button from '../../components/Elements/Button';
import Input from '../../components/Elements/Input';
import Card from '../../components/Elements/Card';

import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from '../../functions/Validators';

import { useForm } from '../../components/Hooks/form-hook';
import { AuthContext } from '../../components/context/auth-context';

import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false,
            },
            password: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const switchModeHandler = () => {
        if (!isLogin) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                },
                formState.inputs.email.isValid &&
                    formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false,
                    },
                },
                false
            );
        }
        setIsLogin((prevMode) => !prevMode);
    };

    const authSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);

        auth.login();
    };

    return (
        <div className="center auth-container">
            <Card className="auth-container__card">
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <hr />

                <form onSubmit={authSubmitHandler}>
                    {!isLogin && (
                        <Input
                            element="input"
                            id="name"
                            type="text"
                            label="Name"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a valid name"
                            onInput={inputHandler}
                        />
                    )}
                    <Input
                        element="input"
                        id="email"
                        type="email"
                        label="E-mail"
                        validators={[VALIDATOR_EMAIL]}
                        errorText="Please enter a valid email address"
                        onInput={inputHandler}
                    />
                    <Input
                        element="input"
                        id="password"
                        type="password"
                        label="Password"
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        errorText="Please enter a valid password that is more than 5 characters."
                        onInput={inputHandler}
                    />
                    <Button
                        className="auth-container__login-button"
                        type="submit"
                        disabled={!formState.isValid}
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </Button>
                </form>
                <Button
                    inverse
                    onClick={switchModeHandler}
                    className="auth-container__switch-button"
                >
                    {isLogin ? 'Sign Up' : 'Login'} Instead
                </Button>
            </Card>
        </div>
    );
};

export default Auth;
