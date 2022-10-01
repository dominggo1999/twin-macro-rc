import React from 'react';
import tw, { styled } from 'twin.macro';

export const Box = styled.div`
  ${tw`
    w-full 
    h-screen 
    bg-black 
    flex 
    justify-center
    items-center
    text-red-400
    text-2xl
  `}
`;

const App = () => {
  return (
    <Box>
      Placeholder
    </Box>
  );
};

export default App;
