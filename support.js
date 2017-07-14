documentWidth=window.screen.availWidth;
documentHeight=window.screen.availHeight;
gridContainerWidth=0.85*documentWidth;
cellSideLength=0.238*documentWidth;
cellSpace=0.025*documentWidth;
cellPadding=0.023*documentWidth

function getTop(i,j){
	return cellPadding+(cellSideLength+cellSpace)*i
	}
function getLeft(i,j){
	return cellPadding+(cellSideLength+cellSpace)*j
	}

function getPicNumber(){
	var num=[4,8,2,1,0,3,7,5,6]
	var n=[];
	var picNum=[];
	
	for(var i=0;i<9;i++){//乱序
        n[i]=parseInt(Math.floor(Math.random()*8));
		if(picNum.indexOf(n[i])==-1){
			picNum.push(n[i]);
			}	
		if(picNum.indexOf(num[i])==-1){
			 picNum.push(num[i]);
			 }
		
		}	
	var picArr=[]//二维数组
	for(var j=0;j<picNum.length;j++){
		if(j%3==0)
		   picArr.push(picNum.slice(j,j+3))
		  
		}
	return picArr
}

function canMoveLeft(board){//判断是否可以左移动
	for(var i=0;i<3;i++)
	   for(var j=1;j<3;j++)
			if(board[i][j]!=0)
				if(board[i][j-1]==0)
					return true
					
		  return false
	}
function canMoveRight(board){//判断是否可以左移动
	for(var i=0;i<3;i++)
	   for(var j=1;j>=0;j--)
			if(board[i][j]!=0)
				if(board[i][j+1]==0)
					return true
					
		  return false
	}
function canMoveUp(board){
	for(j=0;j<3;j++)
	   for(i=1;i<3;i++)
	      if(board[i][j]!=0)
		     if(board[i-1][j]==0)
			    return false
				
	     return true
	}
function canMoveDown(board){
	for(j=0;j<3;j++)
	   for(var i=1;i>=0;i--)
	      if(board[i][j]!=0)
		     if(board[i+1][j]==0)
			 return true
			 
	     return false
	}
