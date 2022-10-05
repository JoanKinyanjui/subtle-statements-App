import React from 'react';
import Blog from './Blog'
import BlogContent from './BlogContent'
import './Bloglayout.css';
import Topbar from '../Home/TopBar/Topbar';

function BlogLayout() {
return (
    <div className='BlogLayout'>
      <Topbar />
<Blog />
<BlogContent />

    </div>
  )
}

export default BlogLayout