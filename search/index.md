---
title: Rechercher
layout: page
hero_height: is-fullwidth
hero_image: /assets/img/herobackground.jpg
---

<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" placeholder="Rechercher...">
<ul id="results-container"></ul>
</div>

<!-- Script pointing to search-script.js -->
<script src="/assets/js/search.min.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>
