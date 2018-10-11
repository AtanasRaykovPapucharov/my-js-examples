module.exports = (data) => {
    return data.Video.getAll().then((data) => {
        console.log('get all: ' + data);
    })
}