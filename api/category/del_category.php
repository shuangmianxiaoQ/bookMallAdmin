<?php
  require_once('../init.php');

  @$fid = $_REQUEST['fid'] or die('{"code":401,"msg":"商品类别id是必需的"}');

  $sql = "DELETE FROM bm_goods_family WHERE fid=$fid";
  $result = mysqli_query($conn, $sql);

  if(!$result) {
    echo('{"code": 500, "msg": "请检查SQL语句"}');
  } {
    echo('{"code":200, "msg":"删除成功"}');
  }