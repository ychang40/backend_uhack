var thresh1=0.4;
var thresh2=4;


module.exports = function (score,magnitude) {
    var sentiment='neutral';
    if (score > thresh1 && score > thresh2){
        sentiment='positive';
    } else { // (score < -1*thresh1 && score > thresh2)
        sentiment='negative'
    }


    
  };