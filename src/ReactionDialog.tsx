import React, { useState } from 'react';
import { TextInput, Button, Popover, Box, Flex } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

type DialogProps = {
  top: number;
  left: number;
  onSave: (emoji: string, comment: string) => void;
  onCloseDialog: () => void;
};

export const ReactionDialog: React.FC<DialogProps> = ({ top, left, onSave, onCloseDialog }) => {
  const [emoji, setEmoji] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [opened, setOpened] = useState<boolean>(false);

  const emojis = ['😊', '😂', '❤️', '👍', '😢', '🎉', '😡'];

  const handleSave = () => {
    onSave(emoji, comment);
    setEmoji('');
    setComment('');
    setOpened(false);
  };

  const handleCancel = () => {
    setEmoji('');
    setComment('');
    onCloseDialog()
    
  }

  return (
    <Box
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px',
        zIndex: 1000,
      }}
      onClick={(e) => e.stopPropagation()} // clickinf inside the dialog should not move it
    >
      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        position="bottom"
        withArrow
      >
        <Popover.Target>
          <TextInput
            label="How do you feel?"
            placeholder="Click to show us :)"
            value={emoji}
            onFocus={() => setOpened(true)}
            readOnly
          />
        </Popover.Target>
        <Popover.Dropdown
          style={{
            zIndex: 2000, // Ensure the dropdown appears on top
          }}
        >
            {emojis.map((emj) => (
              <Button
                key={emj}
                variant="subtle"
                onClick={() => {
                  setEmoji(emj);
                  setOpened(false);
                }}
              >
                {emj}
              </Button>
            ))}
        </Popover.Dropdown>
      </Popover>

      <TextInput
        label="What do you think?"
        placeholder="Do share!"
        value={comment}
        onChange={(event) => setComment(event.currentTarget.value)}
        mt="sm"
      />
    <Flex columnGap="lg">
      <Button onClick={handleSave} mt="sm" style={{borderRadius: '40%'}}>
        <IconCheck size={16} />
        </Button>

        <Button onClick={handleCancel} mt="sm" style={{ backgroundColor: 'red', borderRadius: '40%'}}>
        <IconX size={16} />
        </Button>
        </Flex>
    </Box>
  );
};
