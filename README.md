
Responsive Javascript Image/Text Slider/Carousel/Slideshow/Gallery/HTML5 Ad
--------------------------------------

1. [Live Demo](https://www.jssor.com)
2. [https://www.jssor.com/development](https://www.jssor.com/development)
2. [https://www.jssor.com/help](https://www.jssor.com/help)
2. [https://www.jssor.com/tutorial](https://www.jssor.com/tutorial)
3. Support: [Ask a question on StackOverflow](https://stackoverflow.com/search?tab=relevance&q=jssor)

--------------------------------------
#### Example
```html
<script type="text/javascript" src="jssor.slider.min.js"></script>
<script>
    jssor_slider1_init = function (containerId) {
        var options = { $AutoPlay: 1 };
        var jssor_slider1 = new $JssorSlider$(containerId, options);
    };
</script>
<div id="jssor_slider1_container" style="position:relative;top:0px;left:0px;width:600px;height:300px;">
    <div u="slides" style="position:absolute;overflow:hidden;left:0px;top:0px;width:600px;height:300px;">
        <div><img u="image" src="image1.jpg" /></div>
        <div><img u="image" src="image2.jpg" /></div>
    </div>
</div>
<script>
    jssor_slider1_init("jssor_slider1_container");
</script>
```