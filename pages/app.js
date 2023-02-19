const tl = gsap.timeline({defaults: {ease: "power1.inOut" } });

tl.to('.text', {y:"0%", duration: 1, stagger: 0.25, });
tl.to('.text1', {y:"0%", duration: 1, delay: 5 });
tl.to('.slider', {y: "-100%", duration: 3, delay: 5 });
tl.to('.intro', {y: "-100%", duration: 1, delay: -1.5 });