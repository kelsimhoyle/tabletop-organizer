import React, { useState } from "react";
import { useTransition, animated, config } from "react-spring";

interface Props {
  children: JSX.Element[];
  toggle: boolean;
}

const SlideAnimation: React.FC<Props> = ({ children, toggle }) => {
  const items = React.Children.toArray(children);

  const transitions = useTransition(toggle, {
    from: {
      transform: `translate3d(${toggle ? "150%" : "-150"}, 0,0)`,
      opacity: 0,
    },
    enter: { transform: "translate3d(0%, 0,0)", opacity: 1 },
    leave: {
      transform: `translate3d(${toggle ? "-150%" : "150"},0, 0)`,
      opacity: 0,
    },
    delay: 100,
    config: { ...config.slow },
  });

  return transitions(({ opacity, transform }, item) =>
    item ? (
      <animated.div
        style={{
          position: "absolute",
          opacity,
          transform,
        }}
      >
        {items[0]}
      </animated.div>
    ) : (
      <animated.div
        style={{
          position: "absolute",
          opacity,
          transform,
        }}
      >
        {items[1]}
      </animated.div>
    )
  );
};

export default SlideAnimation;
