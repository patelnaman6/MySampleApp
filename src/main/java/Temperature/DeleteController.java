package Temperature;

import java.io.IOException;
import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class DeleteController {
    @RequestMapping(value = "/DeleteData.html", method = RequestMethod.POST)
    public void delete(@RequestParam("country")String country, @RequestParam("month")String month, @RequestParam("date")String date) throws IOException{
        Reader reader = Resources.getResourceAsReader("configuration.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        SqlSession session = sqlSessionFactory.openSession();

        Temperature temp = new Temperature("'"+country+"'","'"+month+"'","'"+date+"'", 30.0);

        //Delete operation
        session.delete("Temperature.Temperature.delete", temp);
        session.commit();
        session.close();
        System.out.println("Record deleted successfully");
    }
}