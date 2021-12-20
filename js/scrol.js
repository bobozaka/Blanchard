const smoothLinks = document.querySelectorAll(".header__container-top");
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const address = this.href.split("#");
    const top = document.querySelector(`#${address[address.length - 1]}`)
      .offsetTop;
    console.log(top);

    window.scrollTo({
      behavior: "smooth",
      top: top
    });
  });
}