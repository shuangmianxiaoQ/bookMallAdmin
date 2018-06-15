<?php
  require_once('../init.php');

  @$gid = $_REQUEST['gid'] or die('{"code":401,"msg":"商品id是必需的"}');
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

  $sql = "UPDATE bm_goods SET fid=$fid,isbn=$isbn,gname=$gname,title=$title,sub_title=$sub_title,author=$author,publishing=$publishing,publish_time=$publish_time,price=$price,discount_price=$discount_price,introduction=$introduction WHERE gid=$gid";
  $result = mysqli_query($conn, $sql);
  if(!$result) {
    echo('{"code": 500, "msg": "请检查SQL语句"}');
  } else {
    $count = mysqli_affected_rows($conn);
    if($count !== 1) {
      echo('{"code": 201, "msg": "修改失败"}');
    } else {
      echo('{"code": 200, "msg": "修改成功"}');
    }
  }
