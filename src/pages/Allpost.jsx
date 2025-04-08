import React, { useState, useEffect } from "react";
import { PostCard, Container } from "../components";
import appwriteService from "../appwrite/configuration";

function Allpost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService
    .getPosts([])
    .then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    })
    .catch(Error);

  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              {" "}
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Allpost;
