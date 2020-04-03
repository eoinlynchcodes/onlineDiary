// Not in use now. 
// Can be used to prevent users seeing entire list of users 
// Or other acccesses that should be prevented.

// module.exports = (res, res, next) => {
//     if(req.session && req.session.user){
//         next();
//     } else {
//         res.status(401).json({ message: 'Unauthorized'});
//     }
// };