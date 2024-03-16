import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import "./PostCard.css";
import Loading from "../../commonComponents/Loading";

const PostCards = forwardRef((props, ref) => {
  let { postsData, postComment = null, handlePostClick, scrollLoading } = props;
  
  const handleClick = (e) => {
    if (e.target.tagName.toLowerCase() === "button") {
      const postId = e.target.id.split("-").slice(-1)[0];
      handlePostClick(postId);
    }
  };

  // const customRef = useRef();
  // useImperativeHandle(ref, function () {}, []);
  // useImperativeHandle(
  //   ref, // forwarded ref
  //   function () {
  //     return {
  //       focus() {
  //         customRef.current.focus();
  //       },
  //       blur() {
  //         customRef.current.blur();
  //       },
  //     }; // the forwarded ref value
  //   },
  //   []
  // );

  return (
    <>
      <div className="post-card-container" onClick={handleClick}>
        {postsData?.length > 0
          ? postsData.map((post, i) => {
              return (
                <div className="post-card" key={post.id || i}>
                  <h3>{post.title || null}</h3>
                  <h4>{post.body || null}</h4>
                  <button className="btn" id={`btn-post-id-${post.id || null}`}>
                    Get Comments
                  </button>
                  {postComment?.length > 0 &&
                  postComment[0].postId === post.id ? (
                    <ul>
                      {postComment.map((comment) => {
                        return <li key={comment.id}>{comment.body || null}</li>;
                      })}
                    </ul>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
      <div ref={ref} style={{ background: "transparent" }}>
        {/* Sentinel Element */}
      </div>
      {/* <input ref={customRef} pattern="Sentinel Element" /> */}
      {scrollLoading && <Loading />}
    </>
  );
});

export default React.memo(PostCards);
