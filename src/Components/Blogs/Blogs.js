import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>1. What is Context API?</h1>
            <p><span>Answer:</span> React Context API is way for React app to effectively produce global variables that can be passed around. React Context API is the alternative to "prop drilling". This is a new feature added in version 16.3 of React. React.createContext() returns a consumer and provider. Provider hold the "store" and be the parent of all components that might need that store. Consumer as it so happen is component that consume and uses the state.</p>
            <h1>2.What are semantic tags?</h1>
            <p><span>Answer:</span> Semantic tags clearly define the purpose of HTML element. Semantic tags also describes the type of content that the element should contain. Semantic tags give more hooks for styling your content. We can do all of these things easily by using semantic tags and smartly applied CSS. Semantic HTML tags that introduce meaning to the web page rather than just presentation. Examples of semantic HTML tags:h1-h6,blockquote,code,p,ul etc.</p>
        </div>
    );
};

export default Blogs;