package app.repository;

import java.util.List;

/**
 * Created by maciej on 23.07.17.
 */
public interface RepoInterface<E> {

    E save(E e);
    E findOne(Long id);
    List<E> findAll();
    E delete(Long id);
    boolean exists(Long id);
    E update(Long id,E model);


}
