package com.blog.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.blog.entity.Post;
import com.blog.repository.PostRepository;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins="http://localhost:3000")
public class PostController {

 private final PostRepository repo;

 public PostController(PostRepository repo){
  this.repo=repo;
 }

 @PostMapping
 public Post create(@RequestBody Post p){
  return repo.save(p);
 }

 @GetMapping
 public List<Post> getAll(){
  return repo.findAll();
 }

 @GetMapping("/{id}")
 public Post getOne(@PathVariable int id){
  return repo.findById(id).orElse(null);
 }

 @GetMapping("/search")
 public List<Post> search(@RequestParam String keyword){
  return repo.findByTitleContainingIgnoreCase(keyword);
 }

 @PutMapping("/{id}")
 public Post update(@PathVariable int id,@RequestBody Post p){
  Post old = repo.findById(id).orElse(null);
  old.setTitle(p.getTitle());
  old.setContent(p.getContent());
  return repo.save(old);
 }

 @DeleteMapping("/{id}")
 public void delete(@PathVariable int id){
  repo.deleteById(id);
 }

 @PutMapping("/like/{id}")
 public Post like(@PathVariable int id){
  Post p = repo.findById(id).orElse(null);
  p.setLikes(p.getLikes()+1);
  return repo.save(p);
 }
}