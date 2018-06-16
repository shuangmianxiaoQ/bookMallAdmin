<?php
  require_once('../init.php');

  @$did = $_REQUEST['did'] or die('{"code":401,"msg":"商品详情id是必需的"}');

  $sql = "DELETE FROM bm_goods_detail WHERE did=$did";
  $result = mysqli_query($conn, $sql);

  if(!$result) {
    echo('{"code": 500, "msg": "请检查SQL语句"}');
  } {
    echo('{"code":200, "msg":"删除成功"}');
  }