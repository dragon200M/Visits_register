package app.services;

import app.entity.SalonServices;
import app.repository.SalonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by maciej on 30.07.17.
 */
@Service
public class DataSalonServicesImpl implements DataServicesInterface<SalonServices> {

    @Autowired
    private SalonRepository salonRepository;

    public DataSalonServicesImpl(){
//        String[] arr = {"cięcie","farbowanie","mycie","paznokcie","męskie"};
//        for(int i =0;i<10;i++){
//            SalonServices a = new SalonServices(arr[i%arr.length],Integer.toString(i));
//            salonRepository.save(a);
//        }

    }

    @Override
    public SalonServices save(SalonServices model) {
        return this.salonRepository.save(model);
    }
    @Override
    public SalonServices delete(Long id) {

        return salonRepository.delete(id);
    }
    @Override
    public List<SalonServices> findAll() {
        return this.salonRepository.findAll();
    }

    @Override
    public SalonServices findById(Long id) {

        return salonRepository.findOne(id);
    }

    @Override
    public Boolean exists(Long id) {

        return salonRepository.exists(id);
    }

    @Override
    public SalonServices update(Long id,SalonServices model) {

        return salonRepository.update(id,model);
    }
}
