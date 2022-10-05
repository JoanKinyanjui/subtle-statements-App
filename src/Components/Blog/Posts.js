import React from 'react';
import './Posts.css';

function Post() {
  return (
    <div className='Post'>
        <img className='post-img' src='/Images/jewellery9.jpg' />
        <div className='post-info'>
            <div className='postCats'>
                <span className='postCat' > Life</span>
                <span className='postCat' >Style</span>
            </div>
<span className='postTitle'> Being In A Group of Friends</span>
<span className='postDate'> 8 days ago</span>
        </div>
        <p className='postDesc'>
        One thing no one told me is that being in a group of friends requires the same commitment.....

      
          
</p>

    </div>
  )
}

export default Post;

