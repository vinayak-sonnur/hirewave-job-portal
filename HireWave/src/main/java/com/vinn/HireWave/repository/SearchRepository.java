package com.vinn.HireWave.repository;

import com.vinn.HireWave.model.Post;

import java.util.List;

public interface SearchRepository {

    List<Post> findByText(String text);
}
