import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.ServletException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;

/**
 * Created by guyazran on 12/14/15.
 */
public class MainServlet extends javax.servlet.http.HttpServlet {

    ArrayList<Message> messages;

    @Override
    public void init() throws ServletException {
        super.init();
        messages = new ArrayList<Message>();
    }

    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        System.out.println("in doPost");
        StringBuilder stringBuilder = new StringBuilder();
        InputStream inputStream = request.getInputStream();
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        String line;
        while ((line = bufferedReader.readLine()) != null) {
            stringBuilder.append(line);
        }

        try {
            JSONObject jsonRequest = new JSONObject(stringBuilder.toString());
            String action = jsonRequest.getString("action");
            JSONObject jsonResponse = new JSONObject();
            switch (action) {
                case "CheckForMessages":
                    long lastMessage = jsonRequest.getLong("lastMessage");
                    JSONArray jsonNewMessages = new JSONArray();
                    long highestTimeStamp = 0;
                    for (Message msg : messages) {
                        if (msg.timeStamp > lastMessage){
                            JSONObject jsonNewMessage = new JSONObject();
                            jsonNewMessage.put("content", msg.content);
                            jsonNewMessage.put("sender", msg.sender);
                            highestTimeStamp = msg.timeStamp;
                            jsonNewMessages.put(jsonNewMessage);
                        }
                    }
                    jsonResponse.put("messages", jsonNewMessages);
                    jsonResponse.put("highestTimeStamp", highestTimeStamp);
                    break;
                case "SendMessage":
                    String message = jsonRequest.getString("content");
                    String sender = jsonRequest.getString("sender");
                    messages.add(new Message(message, sender));
                    jsonResponse.put("result", "ok");
                    break;
            }
            response.getWriter().write(jsonResponse.toString());
        } catch (JSONException e){
            e.printStackTrace();
        }
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        System.out.println("in doGet");
    }
}
