<?php
  require_once('../init.php');

  @$fname = $_REQUEST['fname'];

  $sql = "INSERT INTO bm_goods_family VALUES(NULL,'$fname')";
  $result = mysqli_query($conn, $sql);
  if(!$result) {
    echo('{"code": 500, "msg": "请检查SQL语句"}');
  } else {
    $count = mysqli_affected_rows($conn);
    if($count !== 1) {
      echo('{"code": 201, "msg": "添加失败"}');
    } else {
      echo('{"code": 200, "msg": "添加成功"}');
    }
  }
