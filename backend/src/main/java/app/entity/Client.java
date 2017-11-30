package app.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Created by maciej on 22.07.17.
 */
@Entity
@Table(name = "Klienci")
@JsonPropertyOrder({"id","name","surname","services"})
public class Client extends AbstractModel implements Serializable {

    private static  long identy = 0;

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;
    private String name;
    private String surname;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<ClientServices> clientsServices ;

    public Client() {

    }

    public Client(String name, String surname) {
      //this.Id = identy;
        this.name = name;
        this.surname = surname;

    }


    public long getId() {
        return id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surnname) {
        this.surname = surnname;
    }

    public void setId(long id) {
        this.id = id;
    }

    @JsonIgnore
    public long getIdenty() {
        identy +=1;
        this.id = identy;
        return identy;
    }
    @JsonIgnore
    public void addClientService(List<ClientServices> services){
       clientsServices.addAll(services);
    }

    @JsonIgnore
    public void addService(ClientServices a) {
        clientsServices.add(a);
    }

    public List<ClientServices> getServices(){
        return this.clientsServices;
    }

    public void setClientsServices(List<ClientServices> clientsServices) {
        this.clientsServices = clientsServices;
    }
}


