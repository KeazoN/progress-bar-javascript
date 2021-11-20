let lookid = document.getElementById("allbar");

let kralkeazon = 0;


function keazongorun(){
	lookid.style.display= "block";
	if(kralkeazon == 0){
		kralkeazon = 1;
		var lookidjunior = document.getElementById("normalbar");
		var width = 0;
	    var id = setInterval(frame, 280);
	    function frame() {
	      if (width >= 100) {
	        clearInterval(id);
	        kralkeazon = 0;
	      } else {
	        width++;
	        lookidjunior.style.width = width + "%";
	        lookidjunior.innerHTML = width  + "%";
	      }
	    }
	  }
	}
