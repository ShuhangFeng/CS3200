package com.example.springtemplate.models;

import javax.persistence.*;


@Entity
@Table(name="trips")
public class Trip {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String name;
  private String local_season;
  private String started;
  private String ended;


  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
  public String getLocal_season() { return local_season; }
  public void setLocal_season(String local_season) { this.local_season = local_season; }
  public String getStarted() { return started; }
  public void setStarted(String started) { this.started = started; }
  public String getEnded() { return ended; }
  public void setEnded(String ended) { this.ended = ended; }


  public Trip(String name, String local_season, String started, String ended) {
    this.name = name;
    this.local_season = local_season;
    this.started = started;
    this.ended = ended;
  }

  public Trip() {}
}
