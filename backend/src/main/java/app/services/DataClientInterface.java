package app.services;

import app.entity.Client;
import app.entity.ClientServices;

import java.util.List;

/**
 * Created by maciej on 30.07.17.
 */

public interface DataClientInterface extends DataServicesInterface<Client>{
    Client findByName(String name);
    Client findBySurname(String surname);
    List<ClientServices> getAllClientServices(String name);
}
