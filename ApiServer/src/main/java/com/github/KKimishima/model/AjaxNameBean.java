package com.github.KKimishima.model;

import java.io.Serializable;

public class AjaxNameBean implements Serializable{
  private String name;
  public AjaxNameBean(){}
  public AjaxNameBean(String name){
      this.name = name;
  }

  public String getName() {
    return name;
  }
}
