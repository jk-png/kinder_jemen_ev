import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class Page {

    private final String page;

    public Page(String file) throws IOException {
        Path filePath = Path.of(file);
        this.page = Files.readString(filePath);
    }

    public String getPage() {
        return page;
    }
}
