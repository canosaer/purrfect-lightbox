# purrfect-lightbox
 
Welcome to purrfect-lightbox by Eric Canosa, second quarter creative technologist at the Creative Circus

GENERAL DIRECTIONS

To use purrfect-lightbox, follow the steps below:

1) Download lightboxify.js from this repo

2) Link lightboxify.js to the HTML page on which you want to use the purrfect-lightbox plugin. This plugin is designed to be called from your main JavaScript file, so it should be linked before your Javascript file is linked at the end of your HTML "body" element. My script tag look like this, but you might need to change the path according to your directory structure.
    <script src="dist/js/lightboxify.js"></script>

3) For purrfect-lightbox to work, you need to include paths for the thumbnail image and the image you want to display in the lightbox. They can be the same image, or the thumbnail image can be a smaller version.

4) This plugin will enable lightbox magnification for any anchor link elements with a specified class. In my HTML, I chose the class "lightboxify", but you can choose any class name you want as long as all the anchor links you want purrfect-lightbox to work on have that class. See my code below setting up a lightbox anchor link.
    <a class="lightboxify" href="dist/img/GRUMPYCAT.jpg">
		<img class="thumbnail" alt="Grumpy Cat looking grumpy" src="dist/img/GRUMPYCAT.jpg">
	</a>

5) Call lightboxify from your JavaScript file with the CSS selector for the class name you gave to the anchor links as an argument like so:
    lightboxify(`.lightboxify`)

6) That's it! You've lightboxified your images using purrfect-lightbox!

OPTIONS

The purrfect-lightbox plugin can be customized in several ways. Configuration is accomplished by passing in an object with your various options. Below is an example calling the function with several of its default settings:

    lightboxify(`.lightboxify`, {
    overlayOpacity: 0.75,
    escapeClosesLightbox: true,
    lightboxPadding: 30,
})

Here are the configuration options for purrfect-lightbox. You can include any or all of them in the object you pass in as an argument when you call the lightboxify function.

1) overlayOpacity
- Value should be any real number between 0 and 1
- Default: 0.75
- Determines the percentage opacity of the lightbox overlay that covers the screen when an image is magnified

2) escapeClosesLightbox
- Value should be true or false
- Default: true
- Determines whether the lightbox can be closed by pressing the escape key

3) lightboxBackground
- Value should be a string containing any color valid in CSS including hex color codes
- Default: white
- Determines the color of the padding around the lightbox image

4) maxImageWidth
- Value should be any real number between 0 and 100
- Default: 90
- Determines the maximum width of the lightbox image in terms of the percentage of the viewport (screen) it occupies

5) maxImageHeight
- Value should be any real number between 0 and 100
- Default: 80
- Determines the maximum height of the lightbox image in terms of the percentage of the viewport (screen) it occupies

6) lightboxPadding
- Value should be any real number
- Default: 30
- Determines the padding around the lightbox image in pixels 
** The color of the padding can be specified using lightboxBackground

7) transition
- Value should be true or false
- Default: true
- Determines whether a brief animation occurs when the lightbox image is displayed