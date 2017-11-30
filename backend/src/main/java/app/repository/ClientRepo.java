package app.repository;

import app.entity.Client;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by maciej on 13.08.17.
 */
public interface ClientRepo extends CrudRepository<Client,Long> {

    Client save(Client client);
}
