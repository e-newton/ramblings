import {firestore} from '../../../lib/firebase';

export default (req, res) => {
    firestore
        .collection('blogs')
        .orderBy('date', 'desc')
        .get()
        .then((blogs) => {
            var rv = [];
            blogs.forEach(blog => {
                let b = {
                    title: blog.data().title,
                    date: blog.data().date,
                    body: blog.data().body,
                    id: blog.id
                }
                rv.push(b)
            })
            res.json(rv);
        })
        .catch((error) => {
            res.json({ error: error });
        });
};
