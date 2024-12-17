import React from 'react'
import { useState } from 'react';

const TestiMonials = () => {
    const [data, setdata] = useState(0);
    const Collection = [{Quote: "Start your day with love and respect", author: "Anugraha Tamang"},
        {Quote: "Never Never Give Up", author: "Ramit Tamang"},
        {Quote: "Life is Beautiful when you live with positive mind", author: "Jeewan Tamang"},
        {Quote: "Experience is Better than Expectation", author: "BJ Lama"}
    ];
    const PreviousOne = () => {
        setdata((data + Collection.length - 1) % Collection.length);
    }
    const NextOne = () => {
        setdata((data + 1) % Collection.length);
    }
  return (
    <div>
        <p>Quote: {Collection[data].Quote}</p>
        <p>Name: {Collection[data].author}</p>
        <button onClick={PreviousOne}>PreviousOne</button>
        <button onClick={NextOne}>NextOne</button>
    </div>
  )
}

export default TestiMonials