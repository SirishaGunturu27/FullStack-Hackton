package com.blog.controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.blog.entity.Comment;
import com.blog.repository.CommentRepository;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins="http://localhost:3000")
public class CommentController {

 private final CommentRepository repo;

 public CommentController(CommentRepository repo){
  this.repo=repo;
 }

 @PostMapping
 public Comment add(@RequestBody Comment c){
  return repo.save(c);
 }

 @GetMapping("/{postId}")
 public List<Comment> get(@PathVariable int postId){
  return repo.findByPostId(postId);
 }
}