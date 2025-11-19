<!-- HERE ARE THREE CORRECT WAYS TO INCLUDE JS TO YOUR HTML FILE -->
<!-- WAY - 1 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="./1_Basics-DOM.js"></script>
</head>

<body>

    <h1 id="heading">I am heading</h1>
    
</body>

</html>



<!-- WAY - 2 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h1 id="heading">I am heading</h1>
    

    <script src="./1_Basics-DOM.js"></script>
</body>

</html>


<!-- WAY - 3 -->
JS ko change kardo
window.onload = function () {
    console.log(document)

    let h = document.getElementById('heading');
    console.log(h);
}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./1_Basics-DOM.js"></script>
</head>

<body>

    <h1 id="heading">I am heading</h1>


</body>

</html>