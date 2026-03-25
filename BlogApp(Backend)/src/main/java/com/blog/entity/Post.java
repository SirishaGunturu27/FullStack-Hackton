package com.blog.entity;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="posts")
public class Post {

 @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
 private int id;

 private String title;

 @Column(length=5000)
 private String content;

 private LocalDateTime createdAt = LocalDateTime.now();

 private int likes = 0;

 public int getId(){return id;}
 public void setId(int id){this.id=id;}

 public String getTitle(){return title;}
 public void setTitle(String title){this.title=title;}

 public String getContent(){return content;}
 public void setContent(String content){this.content=content;}

 public LocalDateTime getCreatedAt(){return createdAt;}
 public void setCreatedAt(LocalDateTime createdAt){this.createdAt=createdAt;}

 public int getLikes(){return likes;}
 public void setLikes(int likes){this.likes=likes;}
}