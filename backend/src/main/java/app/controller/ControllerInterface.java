package app.controller;

import org.springframework.http.ResponseEntity;

import java.util.List;

/**
 * Created by maciej on 01.08.17.
 */
public interface ControllerInterface<T> {

    public List<T> getAll();
    public T getById( Long id);
    public boolean exists(Long id);
    public ResponseEntity<T> createNew(T model) ;
    public ResponseEntity<T> update(Long id,T model);
    public ResponseEntity<T> delete(Long id);

}
