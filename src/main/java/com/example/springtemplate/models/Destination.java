package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;


@Entity
@Table(name="destinations")
public class Destination {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String location;
  private String activity;

  @ManyToOne
  @JsonIgnore
  private Trip trip;



  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
  public String getLocation() { return location; }
  public void setLocation(String location) { this.location = location; }
  public String getActivity() { return activity; }
  public void setActivity(String activity) { this.activity = activity; }
  public Trip getTrip() { return trip; }
  public void setTrip(Trip trip) {this.trip = trip; }

//  public Integer getTripId() { return trip.getId(); }



  public Destination(String location, String activity) {
    this.location = location;
    this.activity = activity;
  }

  public Destination() {}
}
