/**
 * Created by guyazran on 12/14/15.
 */
public class Message {
    String content;
    String sender;
    long timeStamp;

    public Message(String content, String sender) {
        this.content = content;
        this.sender = sender;
        this.timeStamp = System.currentTimeMillis();
    }
}
