import React from 'react';

const BackgroundQuiz = ({ children }) => {
    return (
        <div style={{ position: 'relative' }}>
            <img src="/Abacus (1).png" alt="" style={{ position: 'absolute', top: '-10%', left: '-25%', width: '15%', height: 'auto' , transform: 'rotate(-30deg)' }} />
            <img src="/Calculator.png" alt="" style={{ position: 'absolute', top: '0%', right: '5%', width: '20%', height: 'auto' }} />
            <img src="/Book.png" alt="" style={{ position: 'absolute', bottom: '14%', left: '15%', width: '30%', height: 'auto', transform: 'rotate(-30deg)' }} />
            <img src='/Chalkboard.png' alt="" style={{ position: 'absolute', bottom: '20%', right: '10%', width: '30%', height: 'auto', transform: 'rotate(-10deg)' }} />
            <img src='/Apple.png' alt="" style={{ position: 'absolute', top: '55%', left: '-20%', width: '15%', height: 'auto' }} />
            <img src='/Backpack.png' alt="" style={{ position: 'absolute', top: '-5%', left: '20%', width: '20%', height: 'auto' }} />
            <img src='/Lamp.png' alt="" style={{ position: 'absolute', top: '-15%', right: '-20%', width: '15%', height: 'auto', transform: 'rotate(5deg)' }} />
            <img src='/Palette.png' alt="" style={{ position: 'absolute', bottom: '60%', right: '-28%', width: '20%', height: 'auto' , transform: 'rotate(30deg)' }} />
            <img src='/Basket Ball.png' alt="" style={{ position: 'absolute', bottom: '30%', right: '-20%', width: '15%', height: 'auto', transform: 'rotate(-5deg)' }} />
            <img src='/Scholarcap scroll.png' alt="" style={{ position: 'absolute', bottom: '50%', left: '-20%', width: '30%', height: 'auto', transform: 'rotate(-5deg)' }} />
            {children}
        </div>
    );
};

export default BackgroundQuiz;