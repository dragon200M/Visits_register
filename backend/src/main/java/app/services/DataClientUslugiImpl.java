package app.services;

import app.entity.ClientServices;
import app.repository.ClientUslugiRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by maciej on 02.08.17.
 */
@Service
public class DataClientUslugiImpl implements DataServicesInterface<ClientServices> {

    private ClientUslugiRepository clRepo = new ClientUslugiRepository();
    @Override
    public ClientServices save(ClientServices model) {
        return this.clRepo.save(model);
    }

    @Override
    public ClientServices delete(Long id) {
        return null;
    }

    @Override
    public List<ClientServices> findAll() {
        return null;
    }

    @Override
    public ClientServices findById(Long id) {
        return null;
    }

    @Override
    public Boolean exists(Long id) {
        return null;
    }

    @Override
    public ClientServices update(Long id,ClientServices model) {
        return null;
    }
}
