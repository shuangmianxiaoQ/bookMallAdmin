<?php
  require_once('../init.php');

  $output = [
    'userCount' => null,
    'bookCount' => null,
    'categoryCount' => null,
    'detailCount' => null
  ];

  $sql = "SELECT COUNT(*) FROM bm_user";
  $result = mysqli_query($conn, $sql);
  $rows = mysqli_fetch_row($result);
  $output['userCount'] = intval($rows[0]);

  $sql = "SELECT COUNT(*) FROM bm_goods";
  $result = mysqli_query($conn, $sql);
  $rows = mysqli_fetch_row($result);
  $output['bookCount'] = intval($rows[0]);

  $sql = "SELECT COUNT(*) FROM bm_goods_family";
  $result = mysqli_query($conn, $sql);
  $rows = mysqli_fetch_row($result);
  $output['categoryCount'] = intval($rows[0]);

  $sql = "SELECT COUNT(*) FROM bm_goods_detail";
  $result = mysqli_query($conn, $sql);
  $rows = mysqli_fetch_row($result);
  $output['detailCount'] = intval($rows[0]);

  echo json_encode($output);
