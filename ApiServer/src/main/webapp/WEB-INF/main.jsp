<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>


<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ajaxのテスト用サーバ</title>
</head>

<body>
    <h1>Ajaxのテスト用サーバ</h1>
    <form action="/ApiServer/Main" method="post">
        <label for="name">名前</label>
        <input type="text" name="name" id="name">
        <input type="submit" value="送信">
    </form>
    <c:if test="${ empty nameBean}" >
        <p>入力前<p>
     </c:if>
        <h3><c:out value="${nameBean.name}"/></h3>
            <a href="/ApiServer">戻る</a>
</body>

</html>
