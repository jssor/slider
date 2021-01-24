
Responsive Javascript Image/Text Slider/Slideshow/Gallery/Carousel
--------------------------------------

1. [Live Demo](https://www.jssor.com)
2. [Create Slider Online Free](https://www.jssor.com/demos/new.slider/=edit)
3. [https://www.jssor.com/development](https://www.jssor.com/development)
4. Support: [Ask a question on StackOverflow](https://stackoverflow.com/search?tab=relevance&q=jssor)

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