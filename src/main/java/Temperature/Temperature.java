package Temperature;

/**
 * Created by NAPatel on 06-Feb-17.
 */
public class Temperature {
    private String country;
    private String spe_month;
    private String spe_date;
    private double temp;

    public Temperature(String country, String spe_month, String spe_date, double temp) {
        super();
        this.country = country;
        this.spe_month=spe_month;
        this.spe_date=spe_date;
        this.temp=temp;
    }

    public Temperature() {}

    public  String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public  String getMonth() {
        return this.spe_month;
    }

    public void setMonth(String month) {
        this.spe_month = month;
    }

    public  String getDate() {
        return this.spe_date;
    }

    public void setDate(String date) {
        this.spe_date = date;
    }

    public  double getTemp() {
        return this.temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }

    public String toString(){
        StringBuilder sb = new StringBuilder();

        sb.append("Country = ").append(country).append(" - ");
        sb.append("Month = ").append(spe_month).append(" - ");
        sb.append("Date = ").append(spe_date).append(" - ");
        sb.append("Temperature.Temperature = ").append(temp).append(" - ");
        return sb.toString();
    }

}
