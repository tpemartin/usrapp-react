$(function(){

    $("#app").append(`
    <div class="row">
    ${cardLarge()}
    ${cardSmall()}${cardSmall()}${cardSmall()}${cardSmall()}${cardSmall()}
    </div>
    `)

})


function cardLarge(imgSrc="lib/usrApp-1.0.0/img/storyimage.jpeg",
title="USR與鳶山協會為在地老人據點介紹長照資源", text="..."
){
    
 return   `
<style>
    .card {
    border-style: solid;
    border-width: thin;
    border-color: #a5a5a5;
    }
    .card-img-overlay {
    /* overlay */


position: absolute;
/* height: 204px; */
left: 0px;
right: 0px;
top: 0px;

background: rgba(242, 205, 76, 0.25);
mix-blend-mode: multiply;

    }
    .card-body {
    max-height: 159px;
    overflow: hidden;
    }
    .card-text {
    font-family: 'Noto Serif TC';
    }

</style>
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-6">
      <img src="${imgSrc}" style="width:100%" alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${text}</p></div>
    </div>
  </div>
</div>`
}
function cardSmall(imgSrc="lib/usrApp-1.0.0/img/storyimage.jpeg",
title="楊麗蘭理事長談「在宅沐浴服務」"){
    
    return `
<style>

</style>
<div class="card mb-3 col-md-6">
  <div class="row no-gutters">
    <div class="col-6">
      <img src="${imgSrc}" style="width:100%" alt="..."/>
    </div>
    <div class="col-6">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
      </div>
    </div>
  </div>
</div>`
}


