package app.controller;

import app.entity.SalonServices;
import app.services.DataSalonServicesImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by maciej on 01.08.17.
 */
@RestController
@RequestMapping("/services")
public class SalonController implements ControllerInterface<SalonServices> {

    private DataSalonServicesImpl dataServices;

    @Autowired
    public void setSalonServiceImpl(DataSalonServicesImpl clientServices){
        this.dataServices= clientServices;
    }

    @Override
    @RequestMapping(value = "/all",method = RequestMethod.GET)
    public List<SalonServices> getAll() {
        return this.dataServices.findAll();
    }

    @Override
    @RequestMapping(value = "byId/{id}", method = RequestMethod.GET)
    public SalonServices getById(@PathVariable  Long id) {
        //TODO responseEntity

        return dataServices.findById(id);
    }

    @Override
    @RequestMapping(value = "/exists/{id}", method = RequestMethod.GET)
    public boolean exists(@PathVariable  Long id) {

        return dataServices.exists(id);
    }

    @Override
    @RequestMapping(value = "/new",method = RequestMethod.POST)
    public ResponseEntity<SalonServices> createNew(@RequestBody SalonServices model) {
        HttpStatus status = HttpStatus.CREATED;


        SalonServices s = dataServices.save(model);

        return new ResponseEntity<SalonServices>(s,status);
    }

    @Override
    @RequestMapping(value = "/{id}/update" , method = RequestMethod.POST)
    public ResponseEntity<SalonServices> update(@PathVariable Long id,@RequestBody SalonServices model) {
        if(dataServices.exists(id)) {
            HttpStatus status = HttpStatus.CREATED;
            SalonServices salonServices = dataServices.update(id,model);

            return new ResponseEntity<SalonServices>(salonServices,status);
        }
         HttpStatus status = HttpStatus.NOT_MODIFIED;

        return new ResponseEntity<SalonServices>(model,status);
    }

    @Override
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<SalonServices> delete(@PathVariable Long id) {
        SalonServices salonServices=dataServices.findById(id);

        if (null == salonServices){
            System.out.println("brak usługi");
            return new ResponseEntity<SalonServices>(HttpStatus.NOT_FOUND);
        }

        dataServices.delete(id);
        return new ResponseEntity<SalonServices>(HttpStatus.OK);
    }
}
























