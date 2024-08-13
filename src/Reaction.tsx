// src/components/Reaction.tsx
import React from 'react';

interface ReactionProps {
    emoji: string;
    comment?: string;
    top: number;
    left: number;
}



const Reaction: React.FC<ReactionProps> = ({ emoji, comment, top, left }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: `${top}px`,
                left: `${left}px`,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none', // So that it doesn't block further clicks
            }}
        >
            <span style={{ fontSize: '24px' }}>{emoji}</span>
            {comment && <div style={{ fontSize: '12px', color: '#333' }}>{comment}</div>}
        </div>
    );
};

export default Reaction;
