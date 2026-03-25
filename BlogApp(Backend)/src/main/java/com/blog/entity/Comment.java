package com.blog.entity;
import jakarta.persistence.*;

@Entity
@Table(name="comment")
public class Comment {

 @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
 private int id;

 private String text;

 private int postId;

 private String createdAt = java.time.LocalDateTime.now().toString();

 public int getId(){return id;}
 public void setId(int id){this.id=id;}

 public String getText(){return text;}
 public void setText(String text){this.text=text;}

 public int getPostId(){return postId;}
 public void setPostId(int postId){this.postId=postId;}

 public String getCreatedAt(){return createdAt;}
 public void setCreatedAt(String createdAt){this.createdAt=createdAt;}
}