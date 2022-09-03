$(function(){
  $("#app").append(`<div class="row">`)
  fillInStories()
})

// helpers
function storyCardLarge(imgSrc="lib/usrApp-1.0.0/img/storyimage.jpeg", title="USR與鳶山協會為在地老人據點介紹長照資源", text="..."){
  return `<div class="card mb-3">
    <div class="row no-gutters">
    <div class="col-md-6">
    <img src="${imgSrc}" style="width:100%" alt="...">
  </div>
  <div class="col-md-6">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${text}</p>
    </div>
  </div>
  </div></div>`
  }
  
  function storyCardSmall(imgSrc="lib/usrApp-1.0.0/img/storyimage.jpeg", title="楊麗蘭理事長談「在宅沐浴服務」"){
  return `<div class="card mb-3 col-md-6">
    <div class="row no-gutters">
  <div class="col-6">
    <img src="${imgSrc}" style="width:100%" alt="...">
  </div>
  <div class="col-6">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
    </div>
  </div>
  </div>
  </div>`
  }


function fillInStories(){
  fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eaglemt2019")
    .then((response) => response.json()) // without {} the value will be the succes return
    .then((data) => {
      console.log(createStoryPageContent(data.items))
      return createStoryPageContent(data.items)}
      )
    .then((contentHtml)=>{
      $("#app > div.row").append(contentHtml)
    }
    )
}

function createStoryPageContent(items){
  console.log(items)
  let storyContent = items.map((e,i)=>{
     if(i===0){
      return latestStory(e)
     } else {
      return pasteStory(e)
     }
  })
  return storyContent
}

function latestStory(item){
  return storyCardLarge(imgSrc=item.thumbnail, title=item.title, text=item.content)
}
function pasteStory(item){
  return storyCardSmall(imgSrc=item.thumbnail, title=item.title)
}