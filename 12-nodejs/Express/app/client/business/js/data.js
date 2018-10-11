function getData(url) {
    $.get(url, (data) => {
        return data
    });
}

const filesPath = ''
const data = {
    getBlogById: (id) => {
        return requester.get(`/api/blog/${id}`);
    },
    commentBlogById: (id, comment) => {
        const options = {
            data: comment
        }
        return requester.put(`/api/blog/comment/${id}`, options);
    },
    postBlog: (blog) => {
        const options = {
            data: blog
        }
        return requester.post('/api/blog', options);
    },
    getBlogByTag: (tag) => {
        return requester.put(`/api/blog/${tag}`);
    }
}