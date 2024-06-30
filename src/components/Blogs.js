import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { serverURL } from '../helper/Helper';
import { Box, Typography } from '@mui/material';
import Swal from 'sweetalert2';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const sendRequest = async () => {
    try {
      const res = await axios.get(`${serverURL}/api/blog/`);
      const data = await res.data;
      return data;
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while fetching the blogs!',
      });
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest().then((data) => {
      setBlogs(data.blogs);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <Blog
            key={blog._id}
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user._id}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={blog.user.name}
          />
        ))
      ) : (
        <Box textAlign="center" mt={4}>
          <Typography variant="h4">No blogs available</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Blogs;
