import firebase from '../../../lib/firebase';

export default (req, res) => {
    firebase
        .collection('blogs')
        .doc(req.query.url)
        .get()
        .then((doc) => {
            res.json(doc.data());
        })
        .catch((error) => {
            res.json({ error });
        });
};
