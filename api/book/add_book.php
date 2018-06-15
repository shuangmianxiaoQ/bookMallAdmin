<?php
  require_once('../init.php');

  @$fid = $_REQUEST['fid'];
  @$isbn = $_REQUEST['isbn'];
  @$gname = $_REQUEST['gname'];
  @$title = $_REQUEST['title'];
  @$sub_title = $_REQUEST['sub_title'];
  @$author = $_REQUEST['author'];
  @$publishing = $_REQUEST['publishing'];
  @$publish_time = $_REQUEST['publish_time'];
  @$price = $_REQUEST['price'];
  @$discount_price = $_REQUEST['discount_price'];
  @$introduction = $_REQUEST['introduction'];

  $sql = "INSERT INTO bm_goods VALUES(NULL,$fid,'$isbn','$gname','$title','$sub_title','$author','$publishing',$publish_time,'$price','$discount_price','$introduction')";
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
