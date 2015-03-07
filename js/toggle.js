// Toggle Nav JS

var donateTab = document.querySelector('#donate-tab');
	
	document.querySelector('.donate-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (donateTab.getAttribute('data-state') == 'expanded'){
			
			donateTab.setAttribute('data-state', 'collapsed');
		
		}else{
		
			donateTab.setAttribute('data-state', 'expanded');
		
		}
	});

var volunteerTab = document.querySelector('#volunteer-tab');
	
	document.querySelector('.volunteer-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (volunteerTab.getAttribute('data-state') == 'expanded'){
			
			volunteerTab.setAttribute('data-state', 'collapsed');
		
		}else{
		
			volunteerTab.setAttribute('data-state', 'expanded');
		
		}
	});