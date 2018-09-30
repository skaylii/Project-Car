import header from "./header";
import ownSlick from "./slick";
import map from "./map";
import form from "./form";
import { Slider } from "./slider";

$(function() {

    header();
    ownSlick();
    map();

    form();

    const s1 = new Slider("#parallaxDiv1", {
            delayTime : 2000,
            buttons : false
    });

});