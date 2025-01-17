package socgen.iiht.stockexchangeservice.repository;

import socgen.iiht.stockexchangeservice.model.StockExchange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StockExchangeRepo extends JpaRepository<StockExchange,Integer> {
    public List<StockExchange> findAll();
    public StockExchange findStockExchangeById(int id);
    public void deleteStockExchangeById(int id);

}
