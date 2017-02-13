package Temperature;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.Reader;

public class myBatisInsert {
    public static void insert(String Country, String Month, String Date, double Temp) throws IOException {

        Reader reader = Resources.getResourceAsReader("configuration.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        SqlSession session = sqlSessionFactory.openSession();

        Temperature temp = new Temperature("'"+Country+"'","'"+Month+"'","'"+Date+"'", Temp);
        session.insert("Temperature.Temperature.insert", temp);
        System.out.println("record inserted successfully");
        session.commit();
        session.close();
    }
}
