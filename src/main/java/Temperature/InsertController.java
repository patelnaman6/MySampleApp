package Temperature;

import java.io.IOException;
import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class InsertController {
    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    public void insert(@RequestParam("country")String country, @RequestParam("month")String month, @RequestParam("date")String date, @RequestParam("temp")double temp) throws IOException{

        Reader reader = Resources.getResourceAsReader("configuration.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        SqlSession session = sqlSessionFactory.openSession();

        Temperature Temp = new Temperature("'"+country+"'","'"+month+"'","'"+date+"'", temp);
        session.insert("Temperature.Temperature.insert", Temp);
        System.out.println("record inserted successfully");
        session.commit();
        session.close();

    }

    /*@RequestMapping("/tempInsert")
    public static void main(String[] args) throws IOException {

        Reader reader = Resources.getResourceAsReader("configuration.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        SqlSession session = sqlSessionFactory.openSession();

        Temperature temp = new Temperature("'India'", "'February'", "'6-Feb-2016'", 36);
        session.insert("Temperature.Temperature.insert", temp);
        System.out.println("record inserted successfully");
        session.commit();
        session.close();
    }*/
}
