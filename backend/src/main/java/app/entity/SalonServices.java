package app.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.io.Serializable;

/**
 * Created by maciej on 22.07.17.
 */
@Entity
@JsonPropertyOrder({"id","name","description"})
public class SalonServices implements Serializable{

    private String name;
    private String description;
    private static  long identy = 0;
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    public SalonServices() {}

    public SalonServices(String name, String description) {
        //this.Id = identy;
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    @JsonIgnore
    public long getIdenty() {
        identy +=1;
        Id = identy;
        return identy;
    }
}
