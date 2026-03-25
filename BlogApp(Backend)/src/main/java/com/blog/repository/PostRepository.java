package com.blog.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.blog.entity.Post;

public interface PostRepository extends JpaRepository<Post,Integer>{
 List<Post> findByTitleContainingIgnoreCase(String keyword);
}