import React, { useCallback, useEffect, useRef, useState } from "react";
import PostCards from "./PostCards";
import Loading from "../../commonComponents/Loading";

const Posts = () => {
  const [page, setPage] = useState(1);
  const [postsData, setPostsData] = useState([]);
  const [postComment, setPostComment] = useState([]);

  const [loading, setLoading] = useState(true);
  const [scrollLoading, setScrollLoading] = useState(false);
  const [error, setError] = useState(null);

  const sentinelRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "500px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setScrollLoading(true);
        setPage((prev) => prev + 1);
      }
    }, options);
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [loading]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
          {
            signal: controller.signal,
          }
        );
        const data = await res.json();
        setPostsData((prev) => [...prev, ...data]);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }
    if (page <= 10) {
      fetchData();
    }
    return () => {
      controller.abort();
    };
  }, [page]);

  const handlePostClick = useCallback(
    async (postId) => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        const data = await res.json();
        setPostComment(data);
      } catch (err) {
        setError(err);
      }
    },
    []
  );

  return loading ? (
    <Loading />
  ) : (
    <PostCards
      postsData={postsData}
      postComment={postComment}
      handlePostClick={(postId) => handlePostClick(postId)}
      scrollLoading={postsData.length === 100 ? false : scrollLoading}
      ref={sentinelRef}
    />
  );
};

export default Posts;
