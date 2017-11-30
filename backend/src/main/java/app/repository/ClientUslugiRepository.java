package app.repository;

import app.entity.ClientServices;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by maciej on 02.08.17.
 */
@Repository
public class ClientUslugiRepository  implements  RepoInterface<ClientServices>{

    private final Map<Long,ClientServices> sMap = new ConcurrentHashMap<>();
    public ClientServices save(ClientServices clientServices) {

        return this.sMap.put(clientServices.getIdenty(),clientServices);
    }

    @Override
    public ClientServices findOne(Long id) {
        return null;
    }

    @Override
    public List<ClientServices> findAll() {
        return null;
    }

    @Override
    public ClientServices delete(Long id) {
        return null;
    }

    @Override
    public boolean exists(Long id) {
        return false;
    }


    @Override
    public ClientServices update(Long id,ClientServices model) {
        return null;
    }
}
