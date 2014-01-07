(function($){

	// 定义问题集
	var allQuestions = [
	{ 
		question: "美国宪法规定每届美国总统的任期是几年？",
		choices: ["1年","2年","3年","4年"],
		answer: 3
	},
	{ 
		question: "朋友间会以恶作剧的方式来互开玩笑的愚人节在每年的几月几号？",
		choices: ["4月1号","5月1号","6月1号","7月1号"],
		answer: 0
	},
	{ 
		question: "2000年夏季奥运会是在哪个城市举办的？",
		choices: ["北京","悉尼","东京","伦敦"],
		answer: 1
	}
	];

	// 定义问题的长度和分数(全局)
	var questionNum = allQuestions.length,//问题数量
			questionScore = 0,//初始化个人分数
			currentNum = 0;//初始化当前问题索引

	// 获取问题,传入参数为要获取的问题的索引
	function getQuestion(num){
		// 获取问题题目，获取问题答案(局部)
		var question = allQuestions[num].question,
				choices = allQuestions[num].choices;
		// 清空模板
		$('.question').empty().append(question);
		$('.selections').empty();
		for(i=0;i<choices.length;i++){
			var option = '<input class="option" type="radio" name="Q'+ currentNum +'"value="'+ i +'" id="'+ i +'"/><label for="'+ i +'">'+ choices[i] +'</label><br>'
			$('.selections').append(option);
		}
	};

	// 获取下一个问题
	function getNext(){
		score();
		// 索引下一个问题
		currentNum ++;
		// 如果问完题目清空模板返回用户的分数
		if( currentNum == questionNum ){
			$('.wrapper').empty().append('<p>your score is ' + questionScore + '</p>');
			return false;
		}
		// 获取下一个问题
		getQuestion(currentNum);
	}

	function score(){
		// 获取当前问题的答案以及用户所选答案(局部)
		var answer = allQuestions[currentNum].answer,
				chosen = $('input[type="radio"]:checked').val();
		// 判断是否正确并加分或者不加分
		if( chosen == answer ) { questionScore ++ };
	}

	// 进入下个问题
	$('.next').click(function(){
		getNext();
		return false;
	});

	// 弹出分数
	$('.result').click(function(){
		alert('your score is '+ questionScore +'');
		return false;
	});

	// 初始化
	getQuestion(currentNum);

})(jQuery);