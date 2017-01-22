window.onload=function(){
	
	(function(d){
			//获取wrap
			var wrap = d.querySelector('.wrap');
			//声明数组
			var data = [
				{
				  'title' : 'aaa',
				  'info' : ['1','2','3','4'],
				  'imgs' : ['1.jpg','2.jpg','3.jpg','4.jpg']
				},
				{
				  'title' : 'bbb',
				  'info' : ['1','2','3'],
				  'imgs' : ['5.jpg','6.jpg','7.jpg']
				},
				{
				  'title' : '初音',
				  'info' : ['1','2','3'],
				  'imgs' : ['8.jpg','9.jpg','10.jpg']
				},
				{
				  'title' : 'ddd',
				  'info' : ['1','2','3'],
				  'imgs' : ['11.jpg','12.jpg','13.jpg']
				}
			];
			
		var len = data.length;
		var str1 = '<div class="title">',
		    str2 = '';
		    
		for(var i=0;i<len;i++){
			var str3 = str4 = '';
			//生成左侧标签
			str1 += '<a href="#"><span>'+data[i].title+'</span></a>';
			//生成右侧
			for(var j=0, len1=data[i].info.length; j<len1; j++){
				str3+='<img src="img/'+data[i].imgs[j]+'" alt="" />'//生成图片
				str4+='<a href="#">'+data[i].info[j]+'</a>'//生成标签
			}
			//生成右侧div
			str2+= '<div class="right"><div class="imgs">'+str3+'</div><div class="info">'+str4+'</div></div>';
		}
		str1+='</div>';
		wrap.innerHTML+=str1+str2;
		var rights = d.querySelectorAll('.right'),//获取所有的right
			as = d.querySelectorAll('.title a'); //获取左侧标题
			
		for(var i=0;i<len;i++){
			fn(rights[i])
		}
		
		var prev = 0;
		
		function fn(x){
			var imgs_ = x.querySelectorAll('img'),
				as2 = x.querySelectorAll('a');
			imgs_[0].className=as2[0].className=as[0].className='active';
			rights[0].className+=' active';
			
			for(var i=0; i<len;i++){ 
				as[i].index=i;
				as[i].onclick=function(){ //点击切换标题
					as[prev].className='';
					rights[prev].className='right';
					this.className='active';
					rights[this.index].className+=' active';
					prev=this.index;
				}
			}
			var prev2 = 0;
			for(var i=0; i<imgs_.length;i++){
				as2[i].index = i;
				as2[i].onclick=function(){ //点击切换标签
					as2[prev2].className =imgs_[prev2].className = '';
					this.className = imgs_[this.index].className='active';
					prev2=this.index;
					
				}
				
			}
		};
		
		
	})(document)
};
