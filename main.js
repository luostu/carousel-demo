
var allButtons=$("#buttons>ul>li")
for(let i=0;i<allButtons.length;i++){
  $(allButtons[i]).on('click',
  function(x){
    var index=$(x.currentTarget).index()
    var p=index * -920
    $('#images').css({
      transform:'translate('+p+'px)'
    })
    let n=index
    activeButton(allButtons.eq(n))
  }
  )
}
function activeButton($button){
  $button
  .addClass('color')
 .siblings('.color') .removeClass('color')
  
}
var n=0
var size=allButtons.length
allButtons.eq(n % size).trigger('click')

var timerId=setTimer()
function setTimer(){
  return setInterval(()=>
{
   n+=1
  allButtons.eq(n % size).trigger('click')

},2000)
}

$('.window').on('mouseenter',function(){
  window.clearInterval(timerId)
})
$('.window').on('mouseleave',function(){
 timerId=setTimer()
  })
  
  



