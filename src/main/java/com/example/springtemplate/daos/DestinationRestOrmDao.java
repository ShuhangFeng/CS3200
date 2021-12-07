package com.example.springtemplate.daos;

import com.example.springtemplate.models.Destination;
import com.example.springtemplate.repositories.DestinationRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class DestinationRestOrmDao {
  @Autowired
  DestinationRestRepository destinationRestRepository;

  @PostMapping("/api/destinations")
  public Destination createDestination(@RequestBody Destination destination) {
    return destinationRestRepository.save(destination);
  }

  @GetMapping("/api/destinations")
  public List<Destination> findAllDestinations() {
    return destinationRestRepository.findAllDestinations();
  }

  @GetMapping("/api/destinations/{destinationId}")
  public Destination findDestinationById(
      @PathVariable("destinationId") Integer id) {
    return destinationRestRepository.findDestinationById(id);
  }

  @PutMapping("/api/destinations/{destinationId}")
  public Destination updateDestination(
      @PathVariable("destinationId") Integer id,
      @RequestBody Destination destinationUpdates) {
    Destination destination = destinationRestRepository.findDestinationById(id);
    destination.setActivity(destinationUpdates.getActivity());
    destination.setLocation(destinationUpdates.getLocation());
    return destinationRestRepository.save(destination);
  }

  @DeleteMapping("/api/destinations/{destinationId}")
  public void deleteDestination(
      @PathVariable("destinationId") Integer id) {
    destinationRestRepository.deleteById(id);
  }
}