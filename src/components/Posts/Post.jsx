/* eslint-disable react/prop-types */
import './Post.css';

function Post({post}) {
    return <div className='post-card'>
        <div className='post-info'>
            <div style={{marginBottom: '0.5em'}}><b>Title:</b> {post.title}</div>
            <div><b>Body:</b> {post.body}</div> 
        </div>
    </div>
}

export default Post;