package endpoint.backend;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.config.Named;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import endpoint.backend.dto.PostDTO;
import endpoint.backend.entity.PostRecord;
import endpoint.backend.response.GenericResponse;

/**
 * Created by bob on 12/2/15.
 *
 */
@Api(
        name = "casaDeLaTaraEndpoint",
        version = "v1",
        namespace = @ApiNamespace(
                ownerDomain = "backend.endpoint",
                ownerName = "backend.endpoint",
                packagePath = ""))

public class Endpoint {

    @ApiMethod(name = "getPosts")
    public GenericResponse getPosts() {

        List<PostRecord> records = OfyService.ofy().load().type(PostRecord.class).list();

        GenericResponse response = new GenericResponse();
        response.setStatusCode(0);

        List<PostDTO> returnList = new ArrayList<>();

        for (PostRecord record : records) {
            returnList.add(new PostDTO(record));
        }

        response.setPostsList(returnList);

        return response;
    }

    @ApiMethod(name = "postPost")
    public GenericResponse postPosts(@Named("name") String name, @Named("description") String description, @Named("imageURL") String imageURL, @Named("numberOfItems") int nrItems) {

        PostRecord record = new PostRecord();
        record.setName(name);
        record.setDescription(description);
        record.setImageUrl(imageURL);
        record.setNumberOfItems(nrItems);
        record.setDate(new Date());

        OfyService.ofy().save().entity(record).now();

        GenericResponse response = new GenericResponse();
        response.setStatusCode(0);

        return response;
    }

    @ApiMethod(name = "deletePost")
    public GenericResponse deletePosts(@Named("id") Long id) {

        PostRecord record = findPostInternal(id);
        GenericResponse response = new GenericResponse();
        response.setStatusCode(0);

        if(record == null) {
            response.setStatusCode(1);

            return response;
        }

        OfyService.ofy().delete().entity(record).now();

        return response;
    }

    //Private method to retrieve a <code>PostRecord</code> record
    private PostRecord findPostInternal(Long id) {
        return OfyService.ofy().load().type(PostRecord.class).id(id).now();
    }

}
