package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Destination;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DestinationRestRepository
    extends CrudRepository<Destination, Integer> {
  @Query(value = "SELECT * FROM destinations",
      nativeQuery = true)
  public List<Destination> findAllDestinations();
  @Query(value = "SELECT * FROM destinations WHERE id=:destinationId",
      nativeQuery = true)
  public Destination findDestinationById(@Param("destinationId") Integer id);
}


