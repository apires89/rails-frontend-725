import Typed from "typed.js";

const loadTextFromTyped = () => {
  new Typed('#banner-typed-text', {
    strings: ["Welcome to Lewagon", "Madrid"],
    typedSpeed: 100,
    loop: true
  });
}

export { loadTextFromTyped }
