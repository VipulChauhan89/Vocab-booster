import React from 'react';

const Loading: React.FC = () => {
  const text = "Loading";

  return (
    <>
        <div className="flex">
            {text.split('').map((letter, index) => (
                <span
                    key={index}
                    className="animate-sin-wave"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    {letter}
                </span>
            ))}
        </div>
      </>
  );
}

export default Loading;
