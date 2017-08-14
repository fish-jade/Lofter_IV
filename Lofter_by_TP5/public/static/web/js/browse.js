$(function(){
	
	let obj=$('#page_center').children('div'),
	$nav_obj=$('.bro-tab-ul li'),
	$waterfall=$('.waterfall-col'),
	height_arr=[],
	flag=true,
	$doc=$(document);

	// tab选项卡
	$nav_obj.on('click',function(){
		let index = $($nav_obj).index(this);
		$nav_obj.eq(index).children().addClass('tab-border')
				.end().siblings().children()
				.removeClass('tab-border');
		obj.eq(index).stop().show(300).siblings().hide(300);
	})

	// 滚动事件
	$doc.scroll(function(e) {
		let page_h=$doc.height();			//文档高度（总高度）
		let screen_h=$(window).height();	//浏览器窗口高度
		let scroll_h=$doc.scrollTop();		//滚动条高度
		let height=page_h - screen_h;		
		if(page_h - screen_h - scroll_h <= 300){			
			if (flag) {
				flag=false;
				// 调用接口，获取数据数组
				$.post("",function(data){
					
					if (data) {
						// 如果有数据,添加到最小索引的列
						flag=true;
					}else if(data){
						// 如果返回一个空数据数组,flag=false,永远关闭，不会再请求接口
						flag=false;
					}					
				})
			}else{
				return;
			}
		}
	});

	// 获取每列高度返回最小索引
	function min_index(){
		$waterfall.each(function(index, el) {
			height_arr[height_arr.length]=$(el).height();					
		});
		let result_index = compare();
		return result_index;
	}

	// 比较返回最小索引
	function compare(){
		let result=height_arr[0];
		let result_index=0;
		$.each(height_arr,function(index, arr) {			
			if(result>arr){
				result=arr;
				result_index=index;
			}
		});
		height_arr=[];
		return result_index;
	}
})