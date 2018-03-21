package com.github.KKimishima.controller;

import com.github.KKimishima.model.NameBean;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/Main")
public class Main extends HttpServlet{
  private final static long serialVersionUID = 1L;

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    RequestDispatcher rd = req.getRequestDispatcher(
      "WEB-INF/main.jsp"
    );
    rd.forward(req,resp);
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    req.setCharacterEncoding("UTF-8");

    String name = req.getParameter("name");

    if (!name.isEmpty()){
      NameBean nameBean = new NameBean(name);
      req.setAttribute("nameBean",nameBean);
  }

    RequestDispatcher rd = req.getRequestDispatcher(
        "WEB-INF/main.jsp"
    );

    // Ajaxの実化のため止める
    try{
      Thread.sleep(5000);
    }catch (Exception e){
      e.printStackTrace();
      System.out.println("失敗");
    }
    rd.forward(req,resp);
  }
}
