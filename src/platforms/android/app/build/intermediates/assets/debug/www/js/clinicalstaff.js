$(document).ready(function (){
	$("#role").on('change', function(){
	
		if($(this).val() == 1){
			$('.clinicalstaff').append('  <select id="clinicalstaff" class="form-control" required><small id="emailHelp" class="form-text text-muted">Choose from "Contractor or Business Owner"</small>  <option value="RDH">RDH</option><option value="RDA">RDA</option> <option value="DDS,DMD">DDS,DMD</option> <option value="BS">Business Coordinator</option></select>');
			
				$('#clinicalstaff').on('change', function(){
					if($(this).val() == "RDA" || $(this).val() == "DDS,DMD"){
						$('.speciality').children('select').remove();
						$('.speciality').append('<select id="speciality" name="speciality" class="form-control"><option value="0" selected="">endodontist</option><option value="1">general dentist</option><option value="2">periodontist</option><option value="3">oral surgeon</option><option value="4">orthodontist</option></select>');
					}else{
						$('.speciality').children('select').remove();
					}
			});
		}else{
			$('.clinicalstaff').children('select').remove();
			$('.speciality').children('select').remove();
		}							
	});		
});	