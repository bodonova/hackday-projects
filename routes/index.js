
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Brian\'s app based on Cloudant Boiler Plate' });
};
