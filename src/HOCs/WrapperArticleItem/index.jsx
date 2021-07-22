import React from 'react';

function WrapperArticleItem(WrappedArticle) {
  return function NewsArticleItem(props) {
    return <WrappedArticle {...props} />;
  };
}
export default WrapperArticleItem;
