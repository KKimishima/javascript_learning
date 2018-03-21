package com.github.KKimishima.controller;

import com.github.KKimishima.model.AjaxNameBean;
import com.github.KKimishima.model.NameBean;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/AjaxDemo")
public class AjaxDemo extends HttpServlet{

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    req.setCharacterEncoding("UTF-8");
    String name = req.getParameter("name");

    // Ajaxの実験のため止める
    try{
      Thread.sleep(3000);
    }catch (Exception e){
      e.printStackTrace();
      System.out.println("失敗");
    }

    // 送るデータの準備
    resp.setContentType("text/plain;charset=UTF-8");
    PrintWriter pw = resp.getWriter();
    pw.print("POST:"+ name);
    pw.close();
  }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    req.setCharacterEncoding("UTF-8");
    String name = req.getParameter("name");

    // Ajaxの実験のため止める
    try{
      Thread.sleep(3000);
    }catch (Exception e){
      e.printStackTrace();
      System.out.println("失敗");
    }

    // 送るデータの準備
    resp.setContentType("text/plain;charset=UTF-8");
    PrintWriter pw = resp.getWriter();
    pw.print(name);
    pw.close();
 }
}
