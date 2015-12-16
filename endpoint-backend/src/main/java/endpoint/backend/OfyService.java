package endpoint.backend;

import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.googlecode.objectify.ObjectifyService;

import endpoint.backend.entity.PostRecord;

/**
 * Created by bob on 12/10/15.
 *
 * Objectify service wrapper so we can statically register our persistence classes
 * More on Objectify here : https://code.google.com/p/objectify-app engine/
 */

public class OfyService {

    static {
        ObjectifyService.register(PostRecord.class);
        init();
    }

    public static Objectify ofy() {
        return ObjectifyService.ofy();
    }

    public static ObjectifyFactory factory() {
        return ObjectifyService.factory();
    }

    public static void init() {
        System.out.println("---INIT---");

    }
}
