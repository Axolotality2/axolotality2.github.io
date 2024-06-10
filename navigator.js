const currentChapter = document.querySelector("article.story p:first-child").innerText.toLowerCase();
const chapterLinks = document.querySelectorAll(".side-nav a");
let chapterTest;

window.onload = function() {
  for(let i = 0; i < chapterLinks.length; i++) {
    chapterTest = chapterLinks[i].innerText.trim().toLowerCase();

    if(currentChapter == chapterTest)
      similar(i);
  }
}

function similar(chapter) {
  let currentLink = chapterLinks[chapter];

  currentLink.style.color = "var(--pastelgray)";
  currentLink.style.backgroundColor = "var(--slightsmoothgray)";
  currentLink.href = "";

  currentLink.setAttribute("onclick", "return false;");

  document.title = currentLink.innerText.trim();
}