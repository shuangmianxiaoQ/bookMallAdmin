<?php
  require_once('../init.php');

  @$pno = $_REQUEST['pno'];

  if(!$pno) {
    $pno = 1;
  } else {
    $pno = intval($pno);
  }

  $output = [
    'totalItems' => 0,          // 查询到的总记录数
    'itemsPerPage' => 10,       // 每页显示的数量
    'pno' => $pno,              // 当前页在第几页
    'detailLists' => null         // 当前页的数据
  ];

  $sql = "SELECT COUNT(*) FROM bm_goods_detail";
  $result = mysqli_query($conn, $sql);
  $rows = mysqli_fetch_row($result);
  $output['totalItems'] = intval($rows[0]);

  $start = $output['itemsPerPage'] * ($pno - 1);
  $end = $output['itemsPerPage'];
  $sql = "SELECT * FROM bm_goods_detail d,bm_goods g WHERE d.gid=g.gid LIMIT $start, $end";
  $result = mysqli_query($conn, $sql);

  if(!$result) {
    echo("请检查SQL语句：$sql");
  } else {
    $output['detailLists'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
  }
  echo json_encode($output);
