// import Swiper from 'swiper/bundle';

function tabs() {
const tabs = document.querySelector(".catalog__wrapper");
const tabButton = document.querySelectorAll(".tabs");
const contents = document.querySelectorAll(".cards");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}
}


export default tabs;