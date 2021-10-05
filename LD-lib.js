//anonymous contributor from web
function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}


function testLD(){
console.log("LD-lib is working")
}
