window.onload = function () {

	var buttonUp = document.querySelector('.footer_down .button_to_up');

	var scrolled;
	var timer;

	buttonUp.addEventListener('click', function(e){
		scrolled = window.pageYOffset;
		getUp();
	});

	function getUp(){
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled -= 20;
			timer = setTimeout(getUp, 1);
		}
		else{
			clearTimeout(timer);
			window.scrollTo(0, 0);
		}		
	};

	var imgBox = document.getElementsByClassName('img_box'),
		imgOne = imgBox[0].getElementsByClassName('photo'),
		widthImg = parseFloat(getComputedStyle(imgBox[0]).width),
		widthImgOne = widthImg / imgOne.length,
		flank = 0,
		btnName = document.getElementsByClassName('btn');

		for (var i = 0; i < btnName.length; i++) {
			btnName[i].addEventListener('click', getSelect);
		}

		function getMove(e){
			if (flank != e * widthImgOne) {
				flank = flank + e * widthImgOne * 0.01;
				imgBox[0].style.left = flank + 'px';
				setTimeout(function(){getMove(e)}, 10);		
			}else{
				if (e == -1) {
					var newImg = imgOne[0];
					var imgClon = newImg.cloneNode(true);
					imgBox[0].appendChild(imgClon);
					flank = 0;
					imgBox[0].removeChild(imgOne[0]);
					imgBox[0].style.left = 0;	
				} else {
					var lastImg = imgOne[imgOne.length - 1];
					var imgClon2 = lastImg.cloneNode(true);
					imgBox[0].removeChild(imgOne[imgOne.length - 1]);
					imgBox[0].insertBefore(imgClon2, imgOne[0]);
					flank = 0;
					
					imgBox[0].style.left = 0;
				}		
			}
		}

	function getSelect(){
		//console.log(this)
		if (this.classList[0] == 'btn_prev'){
			getMove(-1);
		}
		if (this.classList[0] == 'btn_next'){
			getMove(1);
		}
	}
	// var btn = document.querySelectorAll('.showing .btn'),
	// 	imgOne = document.querySelectorAll('.showing .img_box img'),
	//     imgBox = document.querySelector('.showing .img_box'),
	//     imgBoxStyle = getComputedStyle(document.querySelector('.img_box')),
	//     widthImgBox = parseInt(imgBoxStyle.width),
	//     step = widthImgBox / imgOne.length,
	//     flank = 0;

	console.log(imgBox[0].firstChild);

	

	// function getMove(e){
	// 	flank = flank + step * e;
	// 	if (flank > 0){
	// 		flank = 0;
	// 	}
	// 	if (flank < -widthImgBox + step){
	// 		flank = -widthImgBox + step;
	// 	}
	// 	imgBox.style.left = flank + 'px';
	// }

	// for (var i = 0; i < btn.length; i++) {
	// 	btnName = btn[i]; 
	// 	btnName.addEventListener('click', getSelect); 
	// }

	// function getRotate() {
	// 	return imgOne[0] = imgOne[imgOne.length - 1];
	// }



	/*function getLeft(){
		if (pics > -step) {
			pics -= 10;
			imgBox.style.marginLeft = pics + '%';
			setTimeout(getLeft, 50);
		} else if(step != 500){
			step += 100;
		} else {
			pics = 0;
			step = 100;
			imgBox.style.marginLeft = pics + '%';
		}
	}*/
	// function getLeft(intBtn){
	// 	if (pics > step * intBtn) {
	// 		pics += 10 * intBtn;
	// 		imgBox.style.marginLeft = pics + '%';
	// 		setTimeout(getLeft, 50);
	// 	} else if (step != (500 * intBtn)){
	// 		step += (100 * intBtn);
	// 	} else {
	// 		pics = 0;
	// 		step = 100;
	// 		imgBox.style.marginLeft = pics + '%';
	// 	}
	// }
	/*for (var i = 0; i < numberBtn.length; i++) {
		var number = numberBtn[i];
		number.addEventListener('click', function(e){
			getNumber(e.srcElement.innerHTML);
		});
	};

	for (var i = 0; i < optionBtn.length; i++) {
		var option = optionBtn[i];
		option.addEventListener('click', function(e){
			getOption(e.srcElement.innerHTML);
		});
	};*/
	/*function getDec(point){
		var localDecimal = desk.innerHTML;
		if (NewNumber) {
			localDecimal = '0.';
			NewNumber = false;
		} else {
			if (localDecimal.indexOf('.') == -1 ) {
			localDecimal += point;
			}
		};
		desk.innerHTML = localDecimal;
		
	};*/

	/*optionBtn.addEventListener('click', function option());
	decimalBtn.addEventListener('click', function decimal());
	resetBtn.addEventListener('click', function reset());

	function numbers(){
		console.log('Нажата кномка с цифрой!');
	}*/
}