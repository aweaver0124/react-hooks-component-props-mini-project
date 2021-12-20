import React from 'react';
import Article from './Article';

function ArticleList( { posts }){
    
    const post = posts.map((post) => {
        return <Article key={post.title} title={post.title} date={post.date} preview={post.preview} />
    })
    return (
        <main>
            {post}
        </main>
    )
}

export default ArticleList