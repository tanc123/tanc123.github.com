// 控制全局购物袋
function displayShoppingBag(bag_info){
  //console.log(bag_info);
  var bag = $('#shoppingBag'); // 全局购物袋
  if (bag.length > 0) { // 全局购物袋标志动态更新
    if (bag_info.count > 0) {
      bag.css('opacity', '.75');
      bag.find('.am-badge').text(bag_info.count);
      
      $('#shopping-bag-confirm').modal({
        relatedTarget: this,
        onConfirm: function(options) {
          window.location.href=shopping_bag_url;
        },
        closeViaDimmer: false,
        closeOnConfirm: false,
        onCancel: function() {
          $('#shopping-bag-alert').modal();
        }
      });
      
      
    }else{
      bag.css('opacity', '0');
      bag.find('.am-badge').text(0);
    }
  }else{
    window.location.reload();
  }
}
// 购物袋商品添加备注成功，回调
function remarkNotify(JsonHttpResponse){
  console.log(JsonHttpResponse);
}
// 清空购物袋成功，回调
function clearNotify(JsonHttpResponse){
  if (JsonHttpResponse) {
    if (JsonHttpResponse.status == 1) {
      
      window.location.href='../goods/';
    }else{
      console.log(JsonHttpResponse.info.message);
    }
  }
}
// 增加购物袋成功，回调
function increaseNotify(JsonHttpResponse){
  if (JsonHttpResponse) {
    if (JsonHttpResponse.status == 1) {
      // 增加成功
      displayShoppingBag(JsonHttpResponse.info.bag);
    }else{
      console.log(JsonHttpResponse.info.message);
    }
  }
}
// 减少购物袋成功，回调
function reduceNotify(JsonHttpResponse){
  if (JsonHttpResponse) {
    if (JsonHttpResponse.status == 1) {
      // 增加成功
      displayShoppingBag(JsonHttpResponse.info.bag);
    }else{
      console.log(JsonHttpResponse.info.message);
    }
  }
}
// 操作购物袋完成，回调
function complateNotify(XMLHttpRequest, HttpStatus){
  console.log(XMLHttpRequest);
  console.log(HttpStatus);
}
// 操作购物袋错误，回调
function errorNotify(XMLHttpRequest, error, exception){
  console.log(XMLHttpRequest);
  console.log(error);
  console.log(exception);
  alert(error+":"+exception);
}
// 购物袋商品添加备注
function shoppingBagRemark(god_id,remark){
  var option = {
    url       : remark_url,
    type      : "POST",
    datatype  : "JSON",
    data      : {god_id:god_id, remark:remark},
    success   : remarkNotify,
    complate  : complateNotify,
    error     : errorNotify
  }
  $.ajax(option);
}
// 添加商品进购物袋
function shoppingBagIncrease(god_id,count,remark) {
  var option = {
    url       : increase_url,
    type      : "POST",
    datatype  : "JSON",
    data      : {god_id:god_id, count:count, remark:remark},
    success   : increaseNotify,
    complate  : complateNotify,
    error     : errorNotify
  }
  $.ajax(option);
}
// 减少商品出购物袋
function shoppingBagReduce(god_id,count) {
  
  var option = {
    url       : reduce_url,
    type      : "POST",
    datatype  : "JSON",
    data      : {god_id:god_id, count:count},
    success   : reduceNotify,
    complate  : complateNotify,
    error     : errorNotify
  }
  $.ajax(option);
}
// 丢掉购物袋
function shoppingBagDrop(){
  var option = {
    url       : clear_url,
    type      : "POST",
    datatype  : "JSON",
    success   : clearNotify,
    complate  : complateNotify,
    error     : errorNotify
  }
  $.ajax(option);
}