$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"customerDetails.json",
		dataType:"json",
		success: function(data){
		var cust = data.cust_details;
		for(var i in cust){
		  var table = '';
		    table = table +'<table>'
			
				table = table + '<tr>'
					table = table +'<td>'+cust[i].customerName+'</td>'
					table = table +'<td>'+cust[i].gender+'</td>'
				table = table + '</tr>'
				
				table = table + '<tr>'
				var image_url = cust[i].pic;
					cust[i].pic="<img align = 'left' src='"+image_url+"'/>";
					table = table +'<td>'+cust[i].pic+'</td>'+'<td>'+cust[i].Address+' '+cust[i].orders+'orders'+,'</td>'
				table = table + '</tr>'
				
			table = table +'</table>'
			
			$(".destination").append(table);
			$("table").addClass("customerTable");
			$("table").css("border","1px solid red");
			$("td").css("border","1px solid blue");
		}
		},
		error: function(error){
		 alert("Json Not loaded");
		}
	});
});