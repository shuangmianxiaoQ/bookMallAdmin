<?php
  require_once('../init.php');

  @$gid = $_REQUEST['gid'];
  @$edition = $_REQUEST['edition'];
  @$page_count = $_REQUEST['page_count'];
  @$word_count = $_REQUEST['word_count'];
  @$format = $_REQUEST['format'];
  @$printing_time = $_REQUEST['printing_time'];
  @$paper = $_REQUEST['paper'];
  @$package = $_REQUEST['package'];
  @$goods_features = $_REQUEST['goods_features'];
  @$editor_recommend = $_REQUEST['editor_recommend'];
  @$brief_introduction = $_REQUEST['brief_introduction'];
  @$author_introduction = $_REQUEST['author_introduction'];
  @$wonderful_digest = $_REQUEST['wonderful_digest'];

  $sql = "INSERT INTO bm_goods_detail VALUES(NULL,$gid,$edition,$page_count,$word_count,$format,$printing_time,'$paper','$package','$goods_features','$editor_recommend','$brief_introduction','$author_introduction','$wonderful_digest')";
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
