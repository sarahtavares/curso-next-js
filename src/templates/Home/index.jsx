import { Component } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerṔage: 5
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerṔage } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerṔage),
      allPosts: postsAndPhotos 
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerṔage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerṔage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerṔage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});
    
    console.log("Load more posts chamado");
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
        <div class="button-container"></div>
        <Button 
          text="Load more posts"
          onClick={this.loadMorePosts}
        />
      </section>
    );
  }
};


export default Home;
