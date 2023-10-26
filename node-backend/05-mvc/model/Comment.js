exports.commentInfos = () => {
    // mysql 연결
    // select * from comment;
    return [
        {
            id: 1,
            userId: "lily", 
            date: "2023-10-26", 
            comment: "hello"
        },
        {
            id: 2, 
            userId: "seobon", 
            date: "2023-10-27", 
            comment: "hello world"
        },
    ];
}