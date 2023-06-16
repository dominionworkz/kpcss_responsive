# CSS Responsive Solution

This is multiple solutions to CSS challenges to help improve solving CSS coding skills by building realistic projects.

## Table of contents

- [CSS Responsive Solution](#css-responsive-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Some Links:](#some-links)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview
CSS solutions
Overview: The challenge was to build out responsiveness with mainly CSS solutions to challenges.

### Some Links:

- ModernCSS: [Resources here](https://moderncss.dev/)
- SmolCSS: [Resources here](https://smolcss.dev/)

### Built with
- VSCODE Editor
- Semantic HTML5 markup
- Flexbox / Grid
- CSS

### What I learned

A major learning aspect while working through these projects. Was how to effectively apply CSS styling to HTML layouts to make responsive. See code snippets, see below:

Screenshots of the finished code results:
[Click here](image.png)

```html
    <!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 01</title>
 
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="intro">
        <div class="container">
            <div class="intro-content">
                <h1>Responsive layouts don't have to be a struggle</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aspernatur distinctio laudantium dolores. Nulla quibusdam reprehenderit eum sit minused aliquid!</p>

                <button class="btn">
                    <strong>I WANT TO LEARN</strong>
                </button>
            </div>
        </div>  
    </div>
    
</body>
</html>
```
```css
    
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Roboto system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
}
 
h1 {
  font-size: 48px;
}

p {
  font-size: 21px;
}

.intro {
  background: #23424a;
  color: white;
  padding: 1em 0;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.intro-content {
  font-size: 1rem;
  padding: 1em;
  width: 65%;
}

.btn {
  border-radius: 31.5px;
  border: none;
  background: #38CFD9;
  color: #072A2D;
  font-size: 21px;
  padding: 1em;
  margin: 1.5em 0;
  width: 285px;
}

```
### Continued development

I will continue learning in future projects: CSS styling, then JavaScript. Personal goal is to be a FullStack Dev.
## Author

- Website - [work in progress](https://www.your-site.com)
- Frontend Mentor - [@dominionworkz](https://www.frontendmentor.io/profile/dominionworkz)
- Twitter - [@dominionworkz](https://twitter.com/dominionworkz)

## Acknowledgments

No credits at this time.

