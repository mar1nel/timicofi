import React from 'react';
import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';

const Confetti = () => {
    const handleConfetti = () => {
        const duration = 10 * 1000; // Duration of the confetti animation in milliseconds
        confetti({
            particleCount: 100, // Number of confetti particles
            spread: 200, // Spread of the confetti particles
            origin: { y: 0.4, x: 0.7 }, // Starting point of the confetti animation
        });
        setTimeout(confetti.reset, duration); // Reset confetti after the animation duration
    };

    return (
        <Button
            auto
            rounded
            ripple={false}
            size="xl"
            onClick={handleConfetti}
            style={{
                background: '#ffffff',
                fontWeight: '600',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'visible',
                color: '#0071f3',
                padding: '0 20px',

                '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: '#ffffff',
                    opacity: 1,
                    borderRadius: '50%',
                    transition: 'all 0.4s ease',
                },
                '&:hover': {
                    transform: 'translateY(-5px)',
                    '&:after': {
                        transform: 'scale(1.9)',
                        opacity: 0,
                    },
                },
                '&:active': {
                    transform: 'translateY(-2px)',
                },
            }}
        >
            vicoin
        </Button>
    );
};

export default Confetti;