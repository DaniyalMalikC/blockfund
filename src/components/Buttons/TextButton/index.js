import {TouchableOpacity} from 'react-native';
import React from 'react';

// Component
import Highlight from '../../Text/Highlighted';

const TextButton = ({text, onPress, isUpperCase = true}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Highlight text={text} isUpperCase={isUpperCase} />
    </TouchableOpacity>
  );
};

export default TextButton;
