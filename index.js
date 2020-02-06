	function getTrainInfo(){
		if($('#trainNumber').val().length == 5 ){
		var trainNumber = $('#trainNumber').val()
			$.ajax({
				url: "https://api.railwayapi.com/v2/route/train/"+trainNumber+"/apikey/wtta38q02z/",
				type: "GET",
				success: function(data) { 
					if(data.response_code == 200){
						renderTrainTimeTable(data);
					}
					else{
						alert('Invalid Train Number..!')
					}
					console.log(data)
				}
			});
		}
		else{
			alert('Enter Valid train Number...!')
		}
	}
		
	function renderTrainTimeTable(data){
		var html  ='';
		html+= '<div class="table-responsive">';
		html+= '<table class="table table-bordered table-hover">';
		html+= '<tbody>';
		html+= '<tr>';
		html+= '<th>STN Code</th>';
		html+= '<th>STN Name</th>';
		html+= '<th>Day</th>';
		html+= '<th>Arr</th>';
		html+= '<th>Dep</th>';
		html+= '</tr>';
		data.route.forEach(function(e){
			html+= '<tr>';
			html+= '<td>'+e.station.code+'</td>';
			html+= '<td>'+e.station.name+'</td>';
			html+= '<td>'+e.day+'</td>';
			html+= '<td>'+e.scharr+'</td>';
			html+= '<td>'+e.schdep+'</td>';
			html+= '</tr>';
		})
		html+= '</tbody>';
		html+= '</table>';
		html += '</div>';
		$('#view').empty().append(html);
	}
	
	function showPage(){
		var pageName = this.getAttribute('name');
		$('#menu').addClass('hide');
		console.log(pageName);
		$('#'+pageName).removeClass('hide');			
	}
	
	$(document).ready(function(){
		$('.button').click(showPage);
		$('#btnTrainSearch').click(getTrainInfo)
	})	