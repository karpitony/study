import javax.swing.JOptionPane;

import org.opentutorials.iot.DimmingLights;
import org.opentutorials.iot.Elevator;
import org.opentutorials.iot.Lighting;
import org.opentutorials.iot.Security;

public class OkJavaGoinHomeinput {

    // parameter, 매개변수
    public static void main(String[] args) {

        String id = JOptionPane.showInputDialog("Enter a Path");
        String bright = JOptionPane.showInputDialog("Enter a Bright level");

        // Elevator call
        Elevator myElevator = new Elevator(id);
        myElevator.callForUp(1);

        // Security off
        Security mySecurity = new Security(id);
        mySecurity.off();

        // Light on
        Lighting hallLamp = new Lighting(id+" / Hall Lamp");
        hallLamp.on();

        Lighting floorLamp = new Lighting(id+" / floorLamp");
        floorLamp.on();

        DimmingLights moodLamp = new DimmingLights(id+" MoodLamp");
        moodLamp.setBright(Double.parseDouble(bright));
        moodLamp.on();

    }
}
