import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;

public class WebsiteGenerator {

    public static final String ROOT_PATH = "../";

    private List<Page> pageList;

    public void findFiles() {
        FileUtils
    }


    public WebsiteGenerator() {
        this.pageList = new ArrayList<>();
    }

    public static void main(String[] args) throws IOException {
        Page testFile = new Page(String.format("%sindex.html", ROOT_PATH));
        System.out.println(testFile.getPage());
    }

}
