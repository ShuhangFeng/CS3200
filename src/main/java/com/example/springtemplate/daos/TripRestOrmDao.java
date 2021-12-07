package com.example.springtemplate.daos;

import com.example.springtemplate.models.Trip;
import com.example.springtemplate.repositories.TripRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TripRestOrmDao {
  @Autowired
  TripRestRepository tripRestRepository;

  @PostMapping("/api/trips")
  public Trip createTrip(@RequestBody Trip trip) {
    return tripRestRepository.save(trip);
  }

  @GetMapping("/api/trips")
  public List<Trip> findAllTrips() {
    return tripRestRepository.findAllTrips();
  }

  @GetMapping("/api/trips/{tripId}")
  public Trip findTripById(
      @PathVariable("tripId") Integer id) {
    return tripRestRepository.findTripByid(id);
  }

  @PutMapping("/api/trips/{tripId}")
  public Trip updateTrip(
      @PathVariable("tripId") Integer id,
      @RequestBody Trip tripUpdates) {
    Trip trip = tripRestRepository.findTripByid(id);
    trip.setName(tripUpdates.getName());
    trip.setEnded(tripUpdates.getEnded());
    trip.setStarted(tripUpdates.getStarted());
    trip.setLocal_season(tripUpdates.getLocal_season());
    return tripRestRepository.save(trip);
  }

  @DeleteMapping("/api/trips/{tripId}")
  public void deleteTrip(
      @PathVariable("tripId") Integer id) {
    tripRestRepository.deleteById(id);
  }
}