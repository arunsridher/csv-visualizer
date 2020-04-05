module.exports.home = function(req, res){
  //render home page
  return res.render('home', {
    path: "home",
    title: "Home | CSV Visualizer"
  });
}