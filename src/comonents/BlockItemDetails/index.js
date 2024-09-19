import React, { Component } from "react";
import "./index.css"; // Make sure this file contains the required styles

class BlockItemDetails extends Component {
  state = {
    title: "",
    imageUrl: "",
    content: "",
    avatarUrl: "",
    author: "",
  };

  componentDidMount() {
    this.fetchBlockItemData();
  }

  fetchBlockItemData = async () => {
    const { id } = this.props; // Get 'id' from props
    try {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
      const data = await response.json();
      this.setState({
        title: data.title,
        imageUrl: data.image_url,
        content: data.content,
        avatarUrl: data.avatar_url,
        author: data.author,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    const { title, imageUrl, content, avatarUrl, author } = this.state;
    return (
      <div className="block-item-details">
        <h2 className="block-title">{title}</h2>
        {imageUrl && <img src={imageUrl} alt={title} className="block-image" />}
        <p className="block-content">{content}</p>
        {avatarUrl && (
          <img src={avatarUrl} alt={author} className="block-avatar" />
        )}
        <p className="block-author">Author: {author}</p>
      </div>
    );
  }
}

export default BlockItemDetails;
