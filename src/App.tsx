import React, { useState } from 'react';
import { ReactionDialog } from './ReactionDialog';
import { Box } from '@mantine/core';
import styles from './styles.module.css'

type ReactionData = {
  id: number;
  emoji: string;
  comment: string;
  top: number;
  left: number;
};

const App: React.FC = () => {

  const [reactions, setReactions] = useState<ReactionData[]>([]);
  const [dialogPosition, setDialogPosition] = useState<{ top: number; left: number } | null>(null);

  const handlePageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setDialogPosition({
      top: e.clientY,
      left: e.clientX,
    });
  };

  const onCloseDialog = () =>  {
    setDialogPosition(null)

  }

  const handleSaveReaction = (emoji: string, comment: string) => {
    if (dialogPosition) {
      const newReaction: ReactionData = {
        id: Date.now(),
        emoji,
        comment,
        top: dialogPosition.top,
        left: dialogPosition.left,
      };
      setReactions((prevReactions) => [...prevReactions, newReaction]);
      setDialogPosition(null); // Close the dialog after saving
    }
  };

  return (
    <div className={styles.dummy}>
    <Box
      style={{
        width: '100%',
        height: '100vh',
        // position: 'relative',
        // overflow: 'hidden',
        backgroundColor: '#f0f0f0',
      }}
      onClick={handlePageClick}
    >
      {reactions.map((reaction) => (
        <Box
          key={reaction.id}
          style={{
            position: 'absolute',
            top: `${reaction.top}px`,
            left: `${reaction.left}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <span style={{ fontSize: '24px' }}>{reaction.emoji}</span>
          <div style={{ fontSize: '12px', color: '#333', fontStyle:'italic' }}>{reaction.comment}</div>
        </Box>
      ))}

      {dialogPosition && (
        <ReactionDialog
          top={dialogPosition.top}
          left={dialogPosition.left}
          onSave={handleSaveReaction}
          onCloseDialog={onCloseDialog}
        />
      )}
    </Box>
    </div>
  );
};

export default App;

