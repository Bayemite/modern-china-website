window.onload = () => {
    let url = 'https://bayemite.github.io/modern-china-website';
    if(localStorage.getItem('debug'))
        url = '..';
    
    document.getElementById('main-navbar').innerHTML = `
<header class="mainTitle">
        
    <h1 class="mainTitle">
        <a href="${url}/index.html" class="logo">
            <img src="${url}/img/china-flag-logo.png" alt="Website logo of Chinese flag" class="logo">
            The Rise of Modern China
        </a>
    </h1>


        <nav class="navbar">
            <ul class="navbar-banner">
                <li class="navbar-content"><a href="${url}/index.html">Home</a></li>
                <li class="navbar-content"><a href="${url}/article-index.html">Index</a></li>
                <li class="navbar-content"><a href="${url}/about-us.html">About Us</a></li>
                <li class="navbar-content"><a href="${url}/search-page.html">Search</a></li>
            </ul>
        </nav>
    </header>
`;
    let searchbar = document.getElementById("searchbar");
    if (searchbar)
        searchbar.onkeyup = () => $("#search-button").click();
};

function refresh() {
    document.getElementById("resultsTitle").style.display = "none";
    var list = document.getElementById("results").getElementsByTagName("li");

    for (var i = 0; i < list.length; i++) {
        list[i].style.display = "none";
    }
}

function search() {
    document.getElementById("resultsTitle").style.display = "block";

    var input, filter, ul, li, a, i, val;
    input = document.getElementById('searchbar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("results");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        val = a.textContent || a.innerText;
        if (val.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}