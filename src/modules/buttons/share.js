function sharebuttons(share){
/**
 * share: Array of shareBtn constructor
 *
 */
  let shareBtns=share.reduce((s,e)=>{return s+e()}, "")
  return `<div class="share-group">
  <div class="share-group" id="share-icon" style="display:none">
  ${shareBtns}
  </div>
  <div class="btn-group mr-2" role="group" aria-label="Second group">  
  <button type="button" class="btn btn-secondary">分享</button>
  </div>
</div>`
}

