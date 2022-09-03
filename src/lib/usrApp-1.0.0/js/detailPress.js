$(function(){
    $front =$("#front");
    $back=$("#back");
    $detailReturn=$("#detail-return");
    $iconDetail=$($(".btnDetail")[0]);
    $iconReturn=$($(".btnReturn")[0]);
    $detailReturn.click(toggleInfo);
});
function toggleInfo(){
    $front.toggle();
    $back.toggle();
    $iconDetail.toggle();
    $iconReturn.toggle();
}