package app.repository;

import app.entity.SalonServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by maciej on 30.07.17.
 */
@Repository
public class SalonRepository implements RepoInterface<SalonServices> {
    private final Map<Long,SalonServices> salonMap = new ConcurrentHashMap<>();

    @Autowired
    SalonRepo salonRepo;

    @Override
    public SalonServices save(SalonServices salonServices) {

        return  salonRepo.save(salonServices);
    }

    @Override
    public SalonServices findOne(Long id) {
        return salonRepo.findOne(id);
    }

    @Override
    public List<SalonServices> findAll() {


        return (List<SalonServices>) salonRepo.findAll();
    }

    @Override
    public SalonServices delete(Long id) {
        SalonServices sl = salonRepo.findOne(id);
        salonRepo.delete(id);
        return sl;
    }

    @Override
    public boolean exists(Long id) {

        return salonRepo.exists(id);
    }

    @Override
    public SalonServices update(Long id,SalonServices model) {
        SalonServices salonServices =salonRepo.findOne(id);
        salonServices.setId(id);
        salonServices.setName(model.getName());
        salonServices.setDescription(model.getDescription());

        return salonRepo.save(salonServices);
    }
}
