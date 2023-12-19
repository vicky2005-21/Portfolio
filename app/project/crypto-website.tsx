import React from 'react';

interface GreetingProps {
  name?: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  const greetingMessage = name ? `Hi, ${name}!` : 'Hi!';

  return (
    <div>
      <p>{greetingMessage}</p>
    </div>
  );
};

export default Greeting;
