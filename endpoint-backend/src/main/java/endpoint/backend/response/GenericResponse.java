package endpoint.backend.response;

import java.util.List;

import endpoint.backend.dto.PostDTO;

/**
 * Created by bob on 12/8/15.
 *
 */
public class GenericResponse {

    int statusCode;

    List<PostDTO> postsList;

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public void setPostsList(List<PostDTO> postsList) {
        this.postsList = postsList;
    }

    public List<PostDTO> getPostsList() {
        return postsList;
    }

    public int getStatusCode() {
        return statusCode;
    }

}
