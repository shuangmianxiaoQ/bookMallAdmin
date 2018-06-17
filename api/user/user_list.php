<?php
  require_once('../init.php');

  $sql = "SELECT * FROM bm_user";
  $result = mysqli_query($conn, $sql);

  if(!$result) {
    echo("请检查SQL语句：$sql");
  } else {
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    for($i=0; $i<count($rows); $i++) {
      $uid = $rows[$i]['uid'];
      $sql = "SELECT * FROM bm_user_address WHERE uid=$uid";
      $result = mysqli_query($conn, $sql);
      $rows[$i]['addressList'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
    }
    echo json_encode($rows);
  }