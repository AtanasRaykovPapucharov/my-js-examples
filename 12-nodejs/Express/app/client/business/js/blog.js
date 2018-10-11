const blog = {
    newBlog: () => {
        let formObj = {};

        $('#add-form-blog').serializeArray().forEach((el) => {
            formObj[el.name] = el.value;
        });

        let allTags = $('#all-tags').val();
        formObj.tags = allTags.split(/[\s,;]+/);
        formObj.tags.forEach((tag) => {
            tag = tag.toLowerCase();
        });

        formObj.comments = [];
        let date = new Date();
        formObj.date = date.toLocaleDateString();

        data.postBlog(formObj)
            .then((resp) => {
                console.log(resp);
                notifier.success('Blog post success!');
            })
            .catch((err) => {
                throw ('Server error: ' + err);
            })
    }
}