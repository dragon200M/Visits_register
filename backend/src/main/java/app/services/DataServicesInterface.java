package app.services;

import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by maciej on 22.07.17.
 */
@Service
public interface DataServicesInterface<T> {
    T save(T model);
    T delete(Long id);
    List<T> findAll();
    T findById(Long id);
    T update(Long id,T model);
    Boolean exists(Long id);

}
