package app.repository;

import app.entity.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by maciej on 23.07.17.
 */
@Repository
@Transactional
public class ClientRepository implements RepoInterface<Client>{
    private final Map<Long,Client> clientMap = new ConcurrentHashMap<>();

    @Autowired
    ClientRepo clientRepo;

    @Override
    public Client save(Client client) {


        return clientRepo.save(client);
    }

    @Override
    public Client findOne(Long id) {
        return clientRepo.findOne(id);
    }

    @Override
    public List<Client> findAll() {
        return (List<Client>) clientRepo.findAll();
    }

    @Override
    public Client delete(Long id) {
        Client cl = clientRepo.findOne(id);
        clientRepo.delete(id);
        return cl;
    }

    @Override
    public boolean exists(Long id) {

        return clientRepo.exists(id);
    }

    @Override
    public Client update(Long id,Client model) {
        Client cl = clientRepo.findOne(id);
        cl.setId(id);
        cl.setName(model.getName());
        cl.setSurname(model.getSurname());

        return clientRepo.save(cl);
    }
}
