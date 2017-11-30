package app.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * Created by maciej on 22.07.17.
 */
@Entity
@JsonPropertyOrder({"dataService","salonServices","description"})
public class ClientServices  {

    @JsonProperty(value = "service")
    private String salonServices;
    @JsonProperty(value = "date")
    private LocalDate dataService;
    @JsonProperty(value = "desc")
    private String description;

    private static  long identy = 0;

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;


    public ClientServices(){}

    public ClientServices(LocalDate localDate, String salonServices, String description) {
        this.salonServices = salonServices;
        this.dataService = localDate;
        this.description = description;
        //this.Id = identy;
    }

    @JsonFormat(pattern = "dd-MM-yyyy")
    public LocalDate getDataService() {
        return dataService;
    }

    public void setDescription(String description) {

        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public String getSalonServices() {
        return salonServices;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    @JsonIgnore
    public long getIdenty() {
        identy +=1;
        Id = identy;
        return identy;
    }


}
