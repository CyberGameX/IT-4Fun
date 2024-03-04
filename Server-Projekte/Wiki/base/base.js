document.write(`
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
<script type="text/javascript" src="JS/search_funktion.js"></script>
 `);