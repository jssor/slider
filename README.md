
Responsive Javascript Image/Text Slider/Slideshow/Gallery/Carousel/HTML5 Ad
--------------------------------------

1. [Live Demo](https://www.jssor.com)
2. [https://www.jssor.com/development](https://www.jssor.com/development)
2. [Slides HTML Code](https://www.jssor.com/development/define-slides-html-code.html)
2. [API: Options](https://www.jssor.com/development/api-options.html)
2. [API: Methods, Properties & Events](https://www.jssor.com/development/api-methods-properties-events.html)
2. [API: UI Definition](https://www.jssor.com/development/api-ui-definition.html)
2. [https://www.jssor.com/help](https://www.jssor.com/help)
2. [https://www.jssor.com/tutorial](https://www.jssor.com/tutorial)
3. Support: [Ask a question on StackOverflow](https://stackoverflow.com/search?tab=relevance&q=jssor)

--------------------------------------
#### Example
```html
<script src="jssor.slider.min.js"></script>
<div id="jssor_1" style="position:relative;top:0px;left:0px;width:980px;height:380px;overflow:hidden;">
    <div data-u="slides" style="position:absolute;top:0px;left:0px;width:980px;height:380px;overflow:hidden;">
        <div><img data-u="image" src="image1.jpg" /></div>
        <div><img data-u="image" src="image2.jpg" /></div>
    </div>
</div>
<script>
    var options = { $AutoPlay: 1 };
    var jssor_1_slider = new $JssorSlider$("jssor_1", options);
</script>
```