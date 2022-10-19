const element = document.getElementById("menu-header");
function myFunc() {
  if (element.classList.contains("show-menu")) {
    element.classList.remove("show-menu");
    element.style.display = "none";
  } else {
    element.style.display = "flex";
    element.classList.add("show-menu");
  }
}

const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
function closeMenu() {
  if (width <= 768) {
    element.style.display = "none";
  }
}

const slider = document.querySelectorAll(".column-post");
const imageClick = document.querySelectorAll(".image-posts");
const buttonQuery = document.querySelectorAll(".button-slider button");

function activeSlider() {
  if(width >= 1024) {
  console.log(slider);
  slider[0].scroll(156, 0);
  imageClick.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttonQuery.forEach(button => {
        button.classList.remove('activeButton')
      })
      if (btn.classList.contains("itemFirst")) {
        slider[0].scroll({ top: 0, left: 0, behavior: "smooth" });
        buttonQuery[0].classList.add("activeButton");
      } else if (btn.classList.contains("itemSecond")) {
        buttonQuery[1].classList.add("activeButton");
        slider[0].scroll({ top: 0, left: 156, behavior: "smooth" });
      } else if (btn.classList.contains("itemThird")) {
        buttonQuery[2].classList.add("activeButton");
        slider[0].scroll({ top: 0, left: 725, behavior: "smooth" });
      } else if (btn.classList.contains("itemFourth")) {
        buttonQuery[3].classList.add("activeButton");
        slider[0].scroll({ top: 0, left: 1300, behavior: "smooth" });
      } else {
        buttonQuery[4].classList.add("activeButton");
        slider[0].scroll({ top: 0, left: 2780, behavior: "smooth" });
      }
      imageClick.forEach((item) => item.classList.remove("active-item"));
      if (!btn.classList.contains("active-item")) {
        btn.classList.add("active-item");
      }
    });
  });
} else{
  imageClick.forEach(itemFor => 
    itemFor .classList.add("active-item")
  )
  
}

}

activeSlider();
