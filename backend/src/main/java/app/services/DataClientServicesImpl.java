package app.services;

import app.entity.Client;
import app.entity.ClientServices;
import app.entity.SalonServices;
import app.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by maciej on 22.07.17.
 */

@Service
public class DataClientServicesImpl implements DataClientInterface {

    private Client a = new Client("Maciej","Michalik");
    private Client b = new Client("Łucja","Michalik");
    private SalonServices salon = new SalonServices("ciecie", "meskie");
    private SalonServices salon1 = new SalonServices("ciecie2", "meskie");
    private SalonServices salon2 = new SalonServices("ciecie3", "meskie");

    @Autowired
    private ClientRepository clientRepository;

    public DataClientServicesImpl() {
//        LocalDate ld = LocalDate.now();
//
//
//        for ( int i=0;i<10;i++){
//            Client abc =new Client(Integer.toString(i)+'A',Integer.toString(i)+'B');
//            clientRepository.save(abc);
//        }
//
//        clientRepository.save(a);
//        clientRepository.save(b);
//
    }

    @Override
    public Client save(Client client) {
        return this.clientRepository.save(client);
    }

    @Override
    public Client delete(Long id) {

        return this.clientRepository.delete(id);
    }

    @Override
    public List<Client> findAll() {

        return this.clientRepository.findAll();
    }

    @Override
    public Client findById(Long id) {
        return this.clientRepository.findOne(id);
    }

    @Override
    public Client findByName(String name) {
        return null;
    }

    @Override
    public Client findBySurname(String surname) {
        return null;
    }

    @Override
    public List<ClientServices> getAllClientServices(String name) {


        return null;
    }

    @Override
    public Boolean exists(Long id) {
        return this.clientRepository.exists(id);
    }

    @Override
    public Client update(Long id, Client model) {

        return this.clientRepository.update(id,model);
    }
}
