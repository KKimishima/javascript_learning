package com.github.KKimishima.controller;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URL;

//http://b.hatena.ne.jp/entry/jsonlite/?url=http://weblog.rubyonrails.org/2018/3/20/Rails-5-2-RC2/
@WebServlet("/JsonApiDemo")
public class JsonApiDemo  extends HttpServlet{
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    req.setCharacterEncoding("UTF-8");
    String reUrl = req.getParameter("url");
    String readLine     = "";
    String writeContent = "";

    String apiUrl = "http://b.hatena.ne.jp/entry/jsonlite/?url=";
    URL url = new URL( apiUrl + reUrl);

    // 提携webApi
    InputStreamReader isr = new InputStreamReader( url.openStream() );
    BufferedReader br  = new BufferedReader( isr );
    while ( ( readLine = br.readLine() ) != null ){
      //ここで読み込んだ内容を変数に保存している
      writeContent = writeContent + readLine;
    }

    // 送るデータの準備
    resp.setContentType("application/json;charset=UTF-8");
    PrintWriter pw = resp.getWriter();
    pw.print(writeContent);
    pw.close();
  }

}
