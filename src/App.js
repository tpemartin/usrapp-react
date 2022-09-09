import createStoryPageContent from "./modules/page_story.js";

$(function(){
  $("#app").append(`<div class="row">`)
  fillInStories()
})

function fillInStories(){
  fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eaglemt2019")
    .then((response) => response.json()) // without {} the value will be the succes return
    .then((data) => {
      return createStoryPageContent(data.items)}
      )
    .then((contentHtml)=>{
      $("#app > div.row").append(contentHtml)
    }
    )
    
}


