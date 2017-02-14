package Temperature;

/**
 * Created by NAPatel on 14-Feb-17.
 */
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.Reader;
import java.util.List;

import org.json.simple.JSONObject;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class ReadAllController {
    @RequestMapping(value = "/ReadAllRecordsData", method = RequestMethod.GET)
    public Temperature[] readAll() throws IOException{
        Reader reader = Resources.getResourceAsReader("configuration.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        SqlSession session = sqlSessionFactory.openSession();
        //ObjectMapper objectMapper = new ObjectMapper();
        //JSONObject json;
        Temperature TEMP[];
        int count = 0;

        List<Temperature> Temperature = session.selectList("Temperature.Temperature.getAll");
        //objectMapper.writeValue(new FileOutputStream("C:/Users/napatel/Desktop/demo/src/main/resources/static/records.json"), Temperature);

        //json = new JSONObject();
        TEMP = new Temperature[Temperature.size()];
        for(Temperature temp : Temperature) {
            /*JSONObject j = new JSONObject();
            j.put("country", temp.getCountry());
            j.put("month", temp.getMonth());
            j.put("date", temp.getDate());
            j.put("temperature", temp.getTemp());*/

            Temperature t = new Temperature(temp.getCountry(), temp.getMonth(), temp.getDate(), temp.getTemp());
            //System.out.println(t.getCountry()+" "+t.getDate()+" "+t.getMonth()+" "+t.getTemp());
            TEMP[count++] = t;
        }

        /*return json;*/
        //return Temperature;
        return TEMP;
    }
}
