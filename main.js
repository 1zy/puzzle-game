// JavaScript Document
var board=new Array()//定义一个数组
var time=0;//计时时间的初始值为0

var startx=0;
var starty=0;
var endx=0;
var endy=0;

var start=document.getElementById("start");
start.addEventListener('click',function(event){
	 newGame();
	})
$(document).ready(function() {
    newGame();
	setInterval('timeCount()',1000)
	});
function newGame(){
	preparFobileMobile()
	init()//初始化函数
	}
function preparFobileMobile(){
	if(documentWidth>500){
		gridContainerWidth=500;
		cellSpace=10;
		cellSideLength=140;
		cellPadding=20
	    $("#grid-container").css('width',gridContainerWidth);
	    $("#grid-container").css('height',gridContainerWidth);
		$('#headers').css('width','500px')
		$('#headers').css('width',gridContainerWidth)
		
		$(".grid-cell").css('width',cellSideLength);
	    $(".grid-cell").css('height',cellSideLength);
		$(".start").css({'padding-left':'20px','padding-right':'20px','padding-top':'10px','padding-bottom':'10px'})


		}
	else{
	  	$("#grid-container").css('width',gridContainerWidth);
	    $("#grid-container").css('height',gridContainerWidth);
        $("#grid-container").css('padding',cellSpace/2);
	    $("#grid-container").css('border-radius',0.02*gridContainerWidth);
		
		$(".grid-cell").css('width',cellSideLength);
	    $(".grid-cell").css('height',cellSideLength)
		$(".start").css({'padding-left':0.037*documentWidth,'padding-right':0.037*documentWidth,'padding-top':0.019*documentWidth,'padding-bottom':0.019*documentWidth})
  
	}
}
function init(){
  for(var i=0;i<3;i++)
	 for(var j=0;j<4;j++){
		 var gridCell=$('#grid-cell-'+i+'-'+j)//初始化棋盘
		 gridCell.css('top',getTop(i,j))
		 gridCell.css('left',getLeft(i,j))
		 }
	
	for(var i=0;i<3;i++){
		 board[i]=new Array()//二维数组
		 for(var j=0;j<3;j++){
			 board[i][j]=1;//初始化为0
		 }
}
  time=0//时间初始化为0
  updatePic()//图片更新
	}
function updatePic(){
    $('.pic-cell').remove();//初始化
	var dataRan=getPicNumber();//随机图片数组
	 for(var i=0;i<3;i++)
		for(var j=0;j<3;j++){
			$('#grid-container').append('<div class="pic-cell" id="pic-cell-'+i+'-'+j+'"></div>')
			var picCell=$('#pic-cell-'+i+'-'+j)
			board[i][j]=dataRan[i][j];
			if( dataRan[i][j]==0)
				board[i][j]=0
				
			
			if(board[i][j]==0){
				picCell.css('width',cellSideLength);
				picCell.css('height',cellSideLength);
				picCell.css('top',getTop(i,j));
				picCell.css('left',getLeft(i,j));
				}
			else{			
				picCell.css('width',cellSideLength);
				picCell.css('height',cellSideLength);
				picCell.css('top',getTop(i,j));
				picCell.css('left',getLeft(i,j));
				picCell.css('background','url(images/'+dataRan[i][j]+'.gif) no-repeat');
				picCell.css('background-size','cover')
				}
			
			}
}

document.addEventListener('touchstart',function(event){
	  startx=event.touches[0].pageX;
	  starty=event.touches[0].pageY;
	})
document.addEventListener('touchmove',function(event){
	event.preventDefault();
	})
document.addEventListener('touchend',function(event){
	  endx=event.changedTouches[0].pageX;
	  endy=event.changedTouches[0].pageY;
	 
	  var deltax=endx-startx;
	  var deltay=endy-endx;
      
	  var y=$("#grid-container").offset().top
	  
	  if(Math.abs(deltax)<20&&Math.abs(deltay)<20){
		return
		}
	  if(Math.abs(deltax)>=Math.abs(deltay)&&starty>y){
		 if(deltax<0){
			if(moveLeft())
			    setTimeout('moveL(startx)',210)
				setTimeout('isWin(board)',300)
				
				
		 }
		 else{
			 if(moveRight())
				setTimeout('moveR(startx)',210)
				setTimeout('isWin(board)',300)
			 }
		
	  }
	  else if(Math.abs(deltax)<=Math.abs(deltay)&&starty>y) {
		if(deltay<0){
			if(moveUp())
			   console.log('a')
			   setTimeout('moveU(starty)',210)
			   setTimeout('isWin(board)',300)
			
			}
		else{
			if(moveDown())
			   setTimeout('moveD(starty)',210)
			   setTimeout('isWin(board)',300);
			}
	  }
	})
	

function moveLeft(){
 if(!canMoveLeft(board))
	    return false;
	 
	 return true
	}
function moveL(startx){
	for(var i=0;i<3;i++)
	   for(var j=0;j<3;j++)
	      if(board[i][j]!=0){
			  for(var k=0;k<j;k++){
				  if(board[i][k]==0){   
					   if(k==0&&startx<0.7*documentWidth){
							 var h=k+1
							 var picCellBlank=document.getElementById('pic-cell-'+i+'-'+k);
							 var picCellMoveLeft=document.getElementById('pic-cell-'+i+'-'+h);
							 var picInter= picCellMoveLeft.style.background;
							 picCellMoveLeft.style.background=picCellBlank.style.background
							 picCellBlank.style.background=picInter
							  picCellBlank.style.backgroundSize='cover'
							 board[i][k]=board[i][h]
							 board[i][h]=0
						   }
						else if(startx>0.7*documentWidth){
							 var picCellBlank=document.getElementById('pic-cell-'+i+'-'+k);
							 var picCellMoveLeft=document.getElementById('pic-cell-'+i+'-'+j);
							 var picInter= picCellMoveLeft.style.background;
							 picCellMoveLeft.style.background=picCellBlank.style.background
							 picCellBlank.style.background=picInter
							 picCellBlank.style.backgroundSize='cover'
							 board[i][k]=board[i][j];
							 board[i][j]=0;
							}
		   
				       }
			        }  
			  }
			
		
	}
	

function moveRight(){
	if(!canMoveRight(board))
	    return false
	return true
	}

function moveR(startx){
	for(var i=0;i<3;i++)
	    for(var j=0;j<3;j++)
		   if(board[i][j]!=0){
			   for(var k=2;k>j;k--){
				   if(board[i][k]==0){
					  if(k==2&&startx>0.3*documentWidth){
						  var h=k-1
						  var picCellBlank=document.getElementById('pic-cell-'+i+'-'+k);
						  var picCellMoveRight=document.getElementById('pic-cell-'+i+'-'+h);
						  var picInter= picCellMoveRight.style.background;
						  picCellMoveRight.style.background=picCellBlank.style.background
						  picCellBlank.style.background=picInter
						  picCellBlank.style.backgroundSize='cover'
						  board[i][k]=board[i][h]
						  board[i][h]=0
						  }
					   else if(startx<0.3*documentWidth){
						  var h=k-1
						  var picCellBlank=document.getElementById('pic-cell-'+i+'-'+k);
					      var picCellMoveRight=document.getElementById('pic-cell-'+i+'-'+h);
					      var picInter= picCellMoveRight.style.background;
					      picCellMoveRight.style.background=picCellBlank.style.background
					      picCellBlank.style.background=picInter
						  picCellBlank.style.backgroundSize='cover'
					      board[i][k]=board[i][h]
						  board[i][h]=0
						  }
					   }
				      
				   }
			   }
}		
		
function moveUp(){
	if(!canMoveUp(board))
	     return false	 
	 return true
	}
function moveU(starty){
	for(var i=0;i<3;i++)
	   for(var j=0;j<3;j++)
	      if(board[i][j]!=0){
			  for(var k=0;k<i;k++){
				  if(board[k][j]==0){ 
					   if(k==0&&starty<0.7*documentHeight){
							 var h=k+1
							 var picCellBlank=document.getElementById('pic-cell-'+k+'-'+j);
							 var picCellMoveLeft=document.getElementById('pic-cell-'+h+'-'+j);
							 var picInter= picCellMoveLeft.style.background;
							 picCellMoveLeft.style.background=picCellBlank.style.background
							 picCellBlank.style.background=picInter
							 picCellBlank.style.backgroundSize='cover'
							 board[k][j]=board[h][j]
							 board[h][j]=0
						   }
						else if(starty>0.7*documentHeight){
							 console.log('a')
							 var picCellBlank=document.getElementById('pic-cell-'+k+'-'+j);
							 var picCellMoveLeft=document.getElementById('pic-cell-'+i+'-'+j);
							 var picInter= picCellMoveLeft.style.background;
							 picCellMoveLeft.style.background=picCellBlank.style.background
							 picCellBlank.style.background=picInter
							 picCellBlank.style.backgroundSize='cover'
							 board[k][j]=board[i][j];
							 board[i][j]=0;
							}
		   
				       }
			        }  
			  }
			
		
	}
function moveDown(){
	if(!canMoveDown(board))
	    return false
		
	return true;
	}
function moveD(starty){
	for(var i=0;i<3;i++)
	    for(var j=0;j<3;j++)
		   if(board[i][j]!=0){
			   for(var k=2;k>i;k--){
				   if(board[k][j]==0){
					  if(k==2&&starty>0.7*documentHeight){
						  var h=k-1
						  var picCellBlank=document.getElementById('pic-cell-'+k+'-'+j);
						  var picCellMoveRight=document.getElementById('pic-cell-'+h+'-'+j);
						  var picInter= picCellMoveRight.style.background;
						  picCellMoveRight.style.background=picCellBlank.style.background
						  picCellBlank.style.background=picInter
					      picCellBlank.style.backgroundSize='cover'
						  board[k][j]=board[h][j]
						  board[h][j]=0
						  }
					   else if(starty<0.7*documentHeight){
						  var h=k-1
						  var picCellBlank=document.getElementById('pic-cell-'+k+'-'+j);
					      var picCellMoveRight=document.getElementById('pic-cell-'+h+'-'+j);
					      var picInter= picCellMoveRight.style.background;
					      picCellMoveRight.style.background=picCellBlank.style.background
					      picCellBlank.style.background=picInter
						  picCellBlank.style.backgroundSize='cover'
					      board[k][j]=board[h][j]
						  board[h][j]=0
						  }
					   }
				      
				   }
			   }
}		
	
function isWin(board){
	var winNum=[[1,2,3],[4,5,6],[7,8,0]]
    if(board.toString()==winNum.toString()){
		alert('win')
		}
	}
