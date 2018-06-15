<?php
  require_once('../init.php');

  $sql = "SELECT fid,fname FROM bm_goods_family";
  $result = mysqli_query($conn, $sql);

  if(!$result) {
    echo("请检查SQL语句：$sql");
  } else {
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($rows);
  }