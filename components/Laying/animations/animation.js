import gsap from "gsap";
export const completeCall = (target, parent) => {
  gsap.set(target, { clearProps: "position, width" });
  parent && gsap.set(parent, { clearProps: "overflow" });
};
export const onEnterHandler = (node) => {
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

export const onExitHandler = (node) => {
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
