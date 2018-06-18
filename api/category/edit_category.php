<?php
  require_once('../init.php');

  @$fid = $_REQUEST['fid'] or die('{"code":401,"msg":"商品类别id是必需的"}');
  @$fname = $_REQUEST['fname'];

  $sql = "UPDATE bm_goods_family SET fname='$fname' WHERE fid=$fid";
  $result = mysqli_query($conn, $sql);
  if(!$result) {
    echo($sql);
    echo('{"code": 500, "msg": "请检查SQL语句"}');
  } else {
    $count = mysqli_affected_rows($conn);
    if($count !== 1) {
      echo('{"code": 201, "msg": "修改失败"}');
    } else {
      echo('{"code": 200, "msg": "修改成功"}');
    }
  }
