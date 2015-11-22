
var main = function() {
	
	//vizDiv = document.getElementById('viz');
	
	vizDiv = $('#viz')[0];
	
	tabsrvURL = "http://tabsrv.idbhq.org/trusted/"
	
	current_WB = "";
	
	vizURL = "";
}

var starthereClicked = function()
{
	$('#'+current_WB).removeClass( 'active' );
	
	
}


var showSheet = function( sheetName ) {
	
	//$('#mytopline').text( sheetName );
	
	$('#mytopline').hide();
	
	//$('#mypageheader').hide();
	
	$('.main-placeholder').hide();
	
	$('li.active').removeClass( 'active' );
	
	$('#'+sheetName).addClass( 'active' );
	
	
	switch(sheetName){
		
								  
		case "Approvals": vizURL = "/views/OpPlanApprovalsV3/ApprovalsDashNew"; break;				  
						  
		case "Disbursements": vizURL = "/views/Disbursements1436/DisbDash"; break;
		
		case "Portfolio Overview": vizURL= "/views/PortfolioOverview/Overview"; break;
		
		case "Detailed Analysis": vizURL= "/views/PortfolioOverview/DetailedAnalysis";break;
						
		case "CUC": vizURL= "/views/CUCAnalysis/CUCoverview"; 	break;
				
		default:
	}
	
	new_WB=sheetName;
	
	if ( current_WB != new_WB ){
	
	$('#viz').remove();
	
	$('.viz-container').append( "<div id='viz'></div>" );
	
	vizDiv = $('#viz')[0];
	
	vizOptions = {
		width: '1169px',
		height: '877px',
		hideToolbar: true,
		hideTabs: true,
		onFirstInteractive: function () {
		workbook = viz.getWorkbook();
		activeSheet = workbook.getActiveSheet();
		$("#ResetBTN").removeClass("disabled");
		$("#PDFBTN").removeClass("disabled");
		}
	}
	
	
	$.get( "gen_tabsrvkey2.aspx", function( data ) {
		
	vizURL2 = tabsrvURL +  data	+ vizURL;
	viz = new tableau.Viz(vizDiv,vizURL2, vizOptions);
	
	current_WB = new_WB;
	
	});
	
	
	
	}
	/* delete viz; */
	
}


var showMenuSheet = function( workbookName, sheetName ) {
	
	$('#mytopline').text( sheetName );
	
	$('.main-placeholder').hide();
	
	$('li.active').removeClass( 'active' );
	
	$('#'+workbookName).addClass( 'active' );
	
		
	switch(workbookName){
		
		case "Portfolio": vizURL= "/views/PortfolioOverview/Overview"; break;
						
		case "CUC": vizURL= "/views/CUCAnalysis/CUCoverview"; break;
				
		default:
	}
	
	new_WB = workbookName;	
	
	if ( current_WB != new_WB ){
	
	$('#viz').remove();
	
	$('.viz-container').append( "<div id='viz'></div>" );
	
	vizDiv = $('#viz')[0];
	
	vizOptions = {
		width: '1169px',
		height: '877px',
		hideToolbar: true,
		hideTabs: true,
		onFirstInteractive: function () {
		workbook = viz.getWorkbook();
		activeSheet = workbook.activateSheetAsync( sheetName );
		$("#ResetBTN").removeClass("disabled");
		$("#PDFBTN").removeClass("disabled");
		}
	}
	
	//viz = new tableau.Viz(vizDiv,vizURL, vizOptions);
	
	$.get( "gen_tabsrvkey.aspx", function( data ) {
		
	vizURL2 = tabsrvURL +  data	+ vizURL;
	viz = new tableau.Viz(vizDiv,vizURL2, vizOptions);
	
	current_WB = new_WB;
	});
	
	
	
	}
	else{
		
	activeSheet = workbook.activateSheetAsync( sheetName );	
	
	}
	
	//workbook.activateSheetAsync( sheetName );
	
//	workbook = viz.getWorkbook();

	
	/* delete viz; */
	
}


var resetViz = function(){
	
	$('#viz').remove();
	
	$('.viz-container').append( "<div id='viz'></div>" );
	
	vizDiv = $('#viz')[0];
	
	//viz = new tableau.Viz(vizDiv,vizURL, vizOptions);
	
	
	$.get( "gen_tabsrvkey.aspx", function( data ) {
		
	vizURL2 = tabsrvURL +  data	+ vizURL;
	viz = new tableau.Viz(vizDiv,vizURL2, vizOptions);
	
	
	});
	
	
}


var resetViz2 = function(){

	viz.revertAllAsync();

}

var ViztoPDF = function(){
	
	viz.showExportPDFDialog();
	
}




var modalClosed = function(){
	
	$('#mytopline').text( "Operations Complex Dashboards" );
	
	//$('.main-placeholder').append( '<p class="lead"> Select a Dashboard from the navigation menu to view.</p>' );
	
	$('.main-placeholder').show();
	
	$('#viz').remove();
	
	$('.viz-container').append( "<div id='viz'></div>" );
}

$(document).ready(main);