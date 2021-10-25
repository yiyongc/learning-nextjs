import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../util/posts-util";

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;