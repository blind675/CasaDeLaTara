package endpoint.backend.dto;

import java.util.Date;

import endpoint.backend.entity.PostRecord;

/**
 * Created by bob on 12/8/15.
 * The object model for the post data we are sending through endpoints.
 */

public class PostDTO {

    long id;

    Date date;

    String name;

    String description;

    String imageURL;

    int numberOfItems;

    public void setId(long id) {
        this.id = id;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImageUrl(String imageURL) {
        this.imageURL = imageURL;
    }

    public void setNumberOfItems(int numberOfItems) {
        this.numberOfItems = numberOfItems;
    }

    public long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImageURL() {
        return imageURL;
    }

    public int getNumberOfItems() {
        return numberOfItems;
    }

    public PostDTO() {

    }

    public PostDTO( PostRecord record) {

        this.id = record.getId();
        this.date = record.getDate();
        this.name = record.getName();
        this.description = record.getDescription();
        this.imageURL = record.getImageUrl();
        this.numberOfItems = record.getNumberOfItems();
    }
}
