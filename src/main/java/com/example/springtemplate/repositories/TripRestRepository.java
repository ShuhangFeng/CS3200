package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Trip;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TripRestRepository
    extends CrudRepository<Trip, Integer> {
  @Query(value = "SELECT * FROM trips",
      nativeQuery = true)
  public List<Trip> findAllTrips();
  @Query(value = "SELECT * FROM trips WHERE id=:tripId",
      nativeQuery = true)
  public Trip findTripByid(@Param("tripId") Integer id);
}
