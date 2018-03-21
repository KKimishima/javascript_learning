<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="./main.js"></script>
  <title>Ajaxのテスト用サーバ</title>
</head>

<body>
  <h1>Ajaxのテスト用サーバ</h1>
  <form>
    <label for="name">名前</label>
    <input type="text" name="name" id="ajx1-2">
    <input type="button" value="送信" id="ajx1-0">
    <input type="button" value="文法変更" id="ajx-2">
    <input type="button" value="POSTの場合" id="ajx-3">
  </form>

  <p>Ajax結果<div id="a"></div></p>

  <a href="/ApiServer">戻る</a>
</body>

</html>