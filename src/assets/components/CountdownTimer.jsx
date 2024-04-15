import React, { useState, useEffect } from 'react';
import './style.css';

const countdownTarget = new Date("2024-06-31T23:59:59");

const calculateTimeLeft = () => {
    const totalTimeLeft = countdownTarget - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
}

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

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
                {Object.entries(timeLeft).map(([label, value]) => (
                    <div className="box" key={label}>
                        <div className="value">
                            <span>{value}</span>
                        </div>
                        <span className="label">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CountdownTimer;