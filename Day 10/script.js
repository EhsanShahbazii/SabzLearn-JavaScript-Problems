const $ = document;
let process = $.getElementsByClassName("process")[0];

window.onscroll = () => {
  let scrolled = window.pageYOffset;
  let allHeight = $.body.clientHeight - 800;
  process.style.width = `${(scrolled / allHeight) * 100}%`;
  console.log(scrolled, allHeight);
};
