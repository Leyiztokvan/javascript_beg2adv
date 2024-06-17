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
## v0.3 - *scripts*
- **Internal Script - JavaScript in <body> or <head>**
  - JavaScript code is inserted between 'script' tags..
  - Scripts can be placed in the body, or in the head section of an HTML page, or in both..
  - Any number of scripts can be placed in an HTML document.
    Example:
    ```js
    <script>
        function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
        }
    </script>
    ```
- **External Scripts - Load Script From another File**
   - To use an external script, put the name of the script file in the src (source) attribute of a `script` tag:
    ```js
    <script src="myScript.js"></script>
    ```
  - To add several script files to one page - use several script tags:
      ```js
      <script src="myScript1.js"></script>
      <script src="myScript2.js"></script>
      ```
- **Referencing External Scripts**
  An external script can be referenced in 3 different ways:
  - With a full URL (a full web address)
    ```js
      <script src="https://www.w3schools.com/js/myScript.js" ></script>
    ```
  - With a file path (like /js/)
    ```js
      <script src="/js/myScript.js"></script>
    ```
  - Without any path.
    ```js
      <script src="myScript.js"></script>
    ```

- **External JavaScript Scripts Advantages**
  Placing scripts in external files has some advantages:
  - It separates HTML and JavaScript code.
  - It makes HTML and JavaScript easier to read and maintain.
  - Cached JavaScript files can speed up page loads.
  
  
- **Where to place scripts in HTML?**
  - Place scripts at the bottom of the body element --> improves the display speed, because script interpretation slows down the display.




