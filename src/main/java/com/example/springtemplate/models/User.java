package com.example.springtemplate.models;

import javax.persistence.*;


@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String first_Name;
    private String last_Name;
    private String username;
    private String password;
    private String dateofbirth;
    private String email;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return first_Name; }
    public void setFirstName(String firstName) { this.first_Name = firstName; }
    public String getLastName() { return last_Name; }
    public void setLastName(String lastName) { this.last_Name = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getDateofbirth() { return dateofbirth; }
    public void setDateofbirth(String dateofbirth) { this.dateofbirth = dateofbirth; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public User(String username, String password, String firstName,
        String lastName, String email, String dateofbirth) {
        this.username = username;
        this.password = password;
        this.first_Name = firstName;
        this.last_Name = lastName;
        this.email = email;
        this.dateofbirth = dateofbirth;
    }

    public User() {}
}
