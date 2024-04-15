import React, { useState, useEffect } from 'react';
import './style.css';

const countdownTarget = new Date("2024-06-31T23:59:59");

const calculateTimeLeft = () => {
    const totalTimeLeft = countdownTarget - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return [{ label: 'days', value: days }, { label: 'hours', value: hours }, { label: 'minutes', value: minutes }, { label: 'seconds', value: seconds }];
}

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000)

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown">
            <h2>Countdown</h2>
            <div className="content">
            {timeLeft.map(item => (
                <div className="box" key={item.label}>
                    <div className="value">
                        <span>{item.value}</span>
                    </div>
                    <span className="label">{item.label}</span>
                </div>
            ))}
            </div>
        </div>
    )
}

export default CountdownTimer;