package app.repository;

import app.entity.SalonServices;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by maciej on 13.08.17.
 */
public interface SalonRepo extends CrudRepository<SalonServices,Long> {

    SalonServices save(SalonServices salonServices);
}
