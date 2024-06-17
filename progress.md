# Topic & Learned Concepts
### v0.0 - *JavaScript*
- **Motivation**, JavaScript is: 
  - world's most popular programming language
  - programming language of the web
- **Reason to learn**:
  - HTML defines content (& structure) of web pages
  - CSS specifies layout of web pages
  - JavaScript program behavior of web pages
### v0.1 - *hello_world*
- **Introduction**:
  - Change HTML Content
    Example: Change an HTML element (with `id="demo"`) content (`innerHTML`) to "*Hello JavaScript*":
    ```js
    document.getElementById("id").innerHTML = "Hello JavaScript";
    ```
### v0.2 - *lightbulb*
- Change HTML Attribute Values
  Example: Change value of the `src` (source) attribute of an `<img>` tag
  ```js
  onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>
  ```
  - Change HTML Styles (CSS)
    is a variant of changing an HTML attribute,
    Example: Change font size
    ```js
    document.getElementById("demo").style.fontSize = "37px";
    ```
- Change HTML Elements
  Example: Hide/show HTML element by changing `display` style
  ```js
  document.getElementById("demo").style.display = "none";
  document.getElementById("demo").style.display = "block";
  ```