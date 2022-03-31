import React, { useRef } from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";
import gsap from "gsap";
// import { onEnterHandler, onExitHandler } from "../animations/animation";
const Transition = ({ children, location }) => {
  const completeCall = (target, parent) => {
    gsap.set(target, { clearProps: "position, width" });
    parent && gsap.set(parent, { clearProps: "overflow" });
  };
  const onEnterHandler = (node) => {
    gsap.killTweensOf(node);
    // Set initial position and styles
    gsap.set(node, {
      // position: "absolute",
      left: 0,
      y: 100,
      autoAlpha: 0,
    });
    gsap.set(parentNode.current, { overflow: "hidden" });
    // Create the animation for the incoming component
    gsap.to(node, {
      duration: 0.3,
      autoAlpha: 1,
      y: 0,
      onComplete: completeCall,
      onCompleteParams: [node, parentNode.current],
    });
  };
  const onExitHandler = (node) => {
    gsap.killTweensOf(node);
    // Set initial position and styles
    gsap.set(node, {
      // position: "absolute",
      // left: 0,
    });
    // Create the animation for the incoming component
    gsap.to(node, {
      duration: 0.4,
      autoAlpha: 0,
      y: -100,
    });
  };
  //   Unused animated functions
  //   function enter(node) {
  //     gsap.from(node, {
  //       duration: 0.5,
  //       autoAlpha: 0,
  //     });
  //   }

  //   function exit(node) {
  //     gsap.to(node, {
  //       duration: 0.5,
  //       autoAlpha: 0,
  //     });
  //   }
  const nodeRef = useRef(null);
  const parentNode = useRef(null);
  return (
    <div ref={parentNode}>
      <TransitionGroup style={{ position: "relative" }}>
        <ReactTransition
          key={location}
          timeout={500}
          onEnter={onEnterHandler}
          onExit={onExitHandler}
          in={true}
          mountOnEnter={true}
          unmountOnExit={true}
          nodeRef={nodeRef.current}
        >
          <div ref={nodeRef.current} style={{ height: "100%" }}>
            {children}
          </div>
        </ReactTransition>
      </TransitionGroup>
    </div>
  );
};

export default Transition;
