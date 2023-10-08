import React from 'react';

export function ValidateKeyPressNumber(event: React.KeyboardEvent) {
  const isNumber = /[0-9]/.test(event.key);
  const backspace = event.key === 'Backspace';
  const arrowLeft = event.key === 'ArrowLeft';
  const arrowRight = event.key === 'ArrowRight';
  const deleteKey = event.key === 'Delete';
  const tabKey = event.key === 'Tab';

  if (!isNumber && !backspace && !arrowLeft && !arrowRight && !deleteKey && !tabKey)
    event.preventDefault();
}
