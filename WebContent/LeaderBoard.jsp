<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="board.Record"%>
<%@ page import="board.Leader"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>상품 목록</title>
</head>
<body>
	<%
		Leader leaderboard = Leader.getInstance();
		ArrayList<Record> highscore = leaderboard.highscore;
	%>
	<table border="1" style="margin:0 auto;">
      	<tr>
        		<th>순위</th>
        		<th>이름</th>
        		<th>점수</th>
      	</tr>
	<%
		for (int i = 0; i < 10; i++) {
			Record record = highscore.get(i);
			if (record == null) 
				record = Record.DEFAULT;
	%>
      	<tr>
        		<td><%= i+1 %></td>
        		<td><%= record.getName() %></td>
        		<td><%= record.getScore() %></td>
      	</tr>
	
	<%
		}
	%>
	</table>
</body>
</html>