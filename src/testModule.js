import createStoryPageContent from "./modules/page_story.js";
import { promiseCheck} from "./modules/Debug.js";

$(function(){
   $("#storyPage").click(fillInStoryPage) 
  })

function fillInStoryPage(){
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eaglemt2019")
    .then((response) => response.json()) // without {} the value will be the succes return
    .then((data) => {
        return createStoryPageContent(data.items)
    })
    .then((data)=>{
        let htmlContent=data.reduce((s,e)=>s+e)
        $("#app").append(`
        <div class="row">
          ${htmlContent}
        </div>
        `)
    })

}

    