package app.controller;

import app.entity.Client;
import app.entity.ClientServices;
import app.services.DataClientInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by maciej on 22.07.17.
 */
@RestController
@RequestMapping("/client")
public class ClientController implements ControllerInterface<Client> {


    private DataClientInterface dataClientInterface;
    @Autowired
    public void setDataClientInterface(DataClientInterface dataClientInterface) {
        this.dataClientInterface = dataClientInterface;
    }


    @RequestMapping(value = "/all",method = RequestMethod.GET)
    public List<Client> getAll() {

        return this.dataClientInterface.findAll();
    }

    @RequestMapping(value = "/byId/{id}", method = RequestMethod.GET)
    public Client getById(@PathVariable Long id) {
        return this.dataClientInterface.findById(id);
    }

    @RequestMapping(value = "/exists/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean exists(@PathVariable Long id) {

        return this.dataClientInterface.exists(id);
    }

    @RequestMapping(value = "/new" , method = RequestMethod.POST)
    public ResponseEntity<Client> createNew(@RequestBody Client client) {
        HttpStatus status = HttpStatus.CREATED;
        Client cl =  dataClientInterface.save(client);

        //TODO co jeśli istnieje
        //TODO mapa nie zwraca klienta

        return new ResponseEntity<Client>(cl,status);
    }

    @RequestMapping(value = "/{id}/addServices" , method = RequestMethod.POST)
    public ResponseEntity<List<ClientServices>> addClientServices(@PathVariable Long id,@RequestBody List<ClientServices> services) {
        Client client = dataClientInterface.findById(id);
        client.addClientService(services);
        dataClientInterface.update(id,client);
        HttpStatus status = HttpStatus.CREATED;


        return new ResponseEntity<List<ClientServices>>(services , status);
    }

    @Override
    @RequestMapping(value = "/{id}/update" , method = RequestMethod.POST)
    public ResponseEntity<Client> update(@PathVariable Long id, @RequestBody  Client model) {
        System.out.println(model);
        if(this.dataClientInterface.exists(id)) {
            HttpStatus status = HttpStatus.CREATED;

            Client cl = dataClientInterface.update(id, model);

            return new ResponseEntity<Client>(cl,status);
        }

        HttpStatus status = HttpStatus.NOT_MODIFIED;

        return new ResponseEntity<Client>(model,status);
    }


    @RequestMapping(value = "/{id}/update" , method = RequestMethod.PUT)
    public ResponseEntity<Client> updatePUT(@PathVariable Long id, @RequestBody  Client model) {
        System.out.println(model);
        if(this.dataClientInterface.exists(id)) {
            HttpStatus status = HttpStatus.CREATED;

            Client cl = dataClientInterface.update(id, model);

            return new ResponseEntity<Client>(cl,status);
        }

        HttpStatus status = HttpStatus.NOT_MODIFIED;

        return new ResponseEntity<Client>(model,status);
    }

    @Override
    @RequestMapping(value = "/delete/{id}",method = RequestMethod.DELETE)
    public ResponseEntity<Client> delete(@PathVariable Long id) {
        Client cl = dataClientInterface.findById(id);
        if(null == cl) {
            System.out.println("Brak klienta");
            return new ResponseEntity<Client>(HttpStatus.NOT_FOUND);
        }
        dataClientInterface.delete(id);
        return new ResponseEntity<Client>(HttpStatus.OK);
    }
}






















