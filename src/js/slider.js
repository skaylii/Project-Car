class Slider {
    constructor(selector, opt={}) {
        this.$slider = $(selector);
        this.$slider.addClass("slider");

        this.$slides = this.$slider.children();
        this.$slides.addClass("slider-slide");
        this.$slides.wrapAll('<div class="slider-slides-cnt"></div>');

        this.counter = 0;
        this.$slides.eq(this.counter).addClass("slider-slide-active");

        const defaultOpt = {
            delayTime : 4000,
            buttons  : true,
            prevText : "&lt;",
            nextText : "&gt;"
        }

        if (typeof opt !== "object") {
            opt = {};
        }
        this.options = Object.assign( {}, defaultOpt , opt);

        if (this.options.buttons) {
            this.createButtons();
        }

        this.time = setTimeout(() => {
            this.nextSlide();
        }, this.options.delayTime)
    }
    setSlide(nr) {
        this.counter = nr;
        this.$slides.removeClass("slider-slide-active");
        this.$slides.eq(this.counter).addClass("slider-slide-active");

        clearTimeout(this.time);
        this.time = setTimeout(() => {
            this.nextSlide();
        }, this.options.delayTime)
    }
    nextSlide() {
        this.counter++;
        if (this.counter > this.$slides.length - 1) {
            this.counter = 0;
        }
        this.setSlide(this.counter);
    }
    prevSlide() {
        this.counter--;
        if (this.counter < 0) {
            this.counter = this.$slides.length - 1;
        }
        this.setSlide(this.counter);
    }
    createButtons() {
        this.$btnPrev = $(`<button class="slider-prev">${this.options.prevText}</button>`);
        this.$btnPrev.on("click", () => this.prevSlide());

        this.$btnNext = $(`<button class="slider-next">${this.options.nextText}</button>`);
        this.$btnNext.on("click", () => this.nextSlide());

        this.$slider.prepend(this.$btnPrev);
        this.$slider.prepend(this.$btnNext);
    }
}

export { Slider }
