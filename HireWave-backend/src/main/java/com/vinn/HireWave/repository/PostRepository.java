package com.vinn.HireWave.repository;

import com.vinn.HireWave.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post,String> {
}
