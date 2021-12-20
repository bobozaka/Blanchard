(() => {
  // Это класс отвечающий за создание гармошки (в нем можно не разбираться и ничего не менять). В самом низу будет инициализация, туда необходимо передать настройки
  class Harmonic {
    constructor(params) {
      this.mobileWidth = params.mobileWidth;
      this.harmonic = document.querySelector(params.harmonic);
      this.checkWraps = this.harmonic.querySelectorAll(params.checkWrapName);
      this.checkboxClassName = params.checkboxClassName;
      this.heading = this.harmonic.querySelector(params.headingBtn);
      this.heading._isOpen = false;

      this.setHeight(this.checkWraps);
      this.setState(this.checkWraps);
      this.heading.addEventListener("click", this.checkoutState.bind(this));
      this.setChecksListeners();

      window.addEventListener("resize", this.onWindowResize.bind(this));
    }

    onWindowResize() {
      this.setState(this.checkWraps);
    }

    setHeight(checks) {
      if (this.getWindowWidth() <= this.mobileWidth) {
        checks.forEach((element) => {
          element._height = element.offsetHeight;
          element.style.height = element._height + "px";
        });
      } else {
        checks.forEach((element) => {
          element.style.height = "";
        });
      }
    }

    hideCheck(check) {
      if (
        !check.querySelector(this.checkboxClassName).checked &&
        this.getWindowWidth() <= this.mobileWidth
      ) {
        check.style.opacity = 0;
        check.style.cssText =
          "height: 0px; padding-top: 0; padding-bottom: 0; border-width: 0; opacity: 0";
      }
    }

    showCheck(check) {
      if (
        !check.querySelector(this.checkboxClassName).checked &&
        this.getWindowWidth() <= this.mobileWidth
      ) {
        check.style.cssText = `height: ${check._height}px;`;
        check.style.opacity = "";
      }
    }

    setState(checks) {
      if (this.getWindowWidth() <= this.mobileWidth) {
        if (!this.heading._isOpen) {
          checks.forEach((el) => {
            this.hideCheck(el);
          });
        } else {
          checks.forEach((el) => {
            this.showCheck(el);
          });
        }
      } else {
        checks.forEach((el) => {
          this.showCheck(el);
          el.style = "";
        });

        this.heading._isOpen = false;
      }
    }

    getWindowWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    checkoutState() {
      if (this.getWindowWidth() <= this.mobileWidth) {
        this.checkWraps.forEach((el) => {
          this.heading._isOpen ? this.hideCheck(el) : this.showCheck(el);
        });
        this.heading._isOpen = !this.heading._isOpen;

        if (this.heading._isOpen) {
          this.heading.classList.add("is-active");
        } else {
          this.heading.classList.remove("is-active");
        }
      }
    }

    hideNotChecked(e) {
      const parent = e.target.parentElement;
      if (this.getWindowWidth() <= this.mobileWidth && !this.heading._isOpen) {
        this.hideCheck(parent);
      }
    }

    setChecksListeners() {
      const checks = this.harmonic.querySelectorAll(this.checkboxClassName);

      checks.forEach((el) => {
        el.addEventListener("change", this.hideNotChecked.bind(this));
      });
    }
  }

  //   Это инициализация гармошки, необходимо в нее передать названия js- классов, соответствующих классам в разметке, а также установить мобильную ширину. Используется, как плагин
  const harmonic = new Harmonic({
    mobileWidth: 580,
    harmonic: ".section-checbox",
    checkWrapName: ".js-checkbox-wrap",
    headingBtn: ".section-checbox__headline",
    checkboxClassName: ".js-checkbox"
  });
})();
