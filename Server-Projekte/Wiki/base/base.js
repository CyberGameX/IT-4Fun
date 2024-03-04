document.write(`
<meta charset="UTF-8">
<meta name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">

<nav class="navbar">
<ul class="nav-list" id="topic_list">
    <li><a href="index.html">Home</a></li>
    <li><a href="netzwerk.html">Netzwerk-Technik</a></li>
    <li><a href="programmieren.html">Programmieren</a></li>
</ul>
<!-- "return false;" prevents the side from reloading  -->
<form onsubmit="searchFunction('search_input', 'topic_list'); return false;"> 
    <label>
        <input type="text" placeholder="Suche" id="search_input">
    </label>
    <button type="submit">Suchen</button>
</form>
</nav>
<script type="text/javascript" src="JS/js_functions/search_funktion.js"></script>
 `);