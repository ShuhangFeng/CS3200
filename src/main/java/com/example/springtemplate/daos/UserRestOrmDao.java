package com.example.springtemplate.daos;

import com.example.springtemplate.models.Trip;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.TripRestRepository;
import com.example.springtemplate.repositories.UserRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserRestOrmDao {
    @Autowired
    UserRestRepository userRepository;

    @Autowired
    TripRestRepository tripRestRepository;

    @PostMapping("/api/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/api/trips/{tripId}/users")
    public User createUserForTrip(
        @PathVariable("tripId") Integer tid,
        @RequestBody User user) {
        user = userRepository.save(user);
        Trip trip = tripRestRepository.findById(tid).get();
        user.setTrip(trip);
        return userRepository.save(user);
    }

    @GetMapping("/api/trips/{tripId}/users")
    public List<User> findUsersForTrip(
        @PathVariable("tripId") Integer tid) {
        Trip trip = tripRestRepository.findById(tid).get();
        System.out.println(trip.getUsers().size());
        return trip.getUsers();
    }
    
    @GetMapping("/api/users")
    public List<User> findAllUsers() {
        return userRepository.findAllUsers();
    }
    
    @GetMapping("/api/users/{userId}")
    public User findUserById(
            @PathVariable("userId") Integer id) {
        return userRepository.findUserById(id);
    }
    
    @PutMapping("/api/users/{userId}")
    public User updateUser(
            @PathVariable("userId") Integer id,
            @RequestBody User userUpdates) {
        User user = userRepository.findUserById(id);
        user.setFirstName(userUpdates.getFirstName());
        user.setLastName(userUpdates.getLastName());
        user.setUsername(userUpdates.getUsername());
        user.setPassword(userUpdates.getPassword());
        user.setDateofbirth(userUpdates.getDateofbirth());
        user.setEmail(userUpdates.getEmail());
        return userRepository.save(user);
    }
    
    @DeleteMapping("/api/users/{userId}")
    public void deleteUser(
            @PathVariable("userId") Integer id) {
        userRepository.deleteById(id);
    }
}