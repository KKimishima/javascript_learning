package com.github.KKimishima.model;

import java.io.Serializable;

public class NameBean implements Serializable{
  private String name;
  public NameBean(){}
  public NameBean(String name){
    this.name = name;
  }

  public String getName() {
    return name;
  }
}
