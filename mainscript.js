
var main = function() {
	
	//vizDiv = document.getElementById('viz');
	
	vizDiv = $('#viz')[0];
	
	tabsrvURL = "http://tabsrv.idbhq.org/trusted/"
	
	tabsrvKeyGen = "gen_tabsrvkey3.cshtml";
	
	current_WB = "";
	
	new_WB = "";
	
	vizURL = "";
	
	//var clicked;
}

var starthereClicked = function()
{
	$('#'+current_WB).removeClass( 'active' );
	
	
}


var loadviz =  function ( pvizURL ){
	
	$.get( tabsrvKeyGen , function( data ) {
		
	vizURL2 = tabsrvURL +  data	+ pvizURL;
	viz = new tableau.Viz(vizDiv,vizURL2, vizOptions);
	
	current_WB = new_WB;
	
	});
	
	
}


var showSheet2 = function( menuName , pworkbookName , pvizname  ) {
	
	
	
	$('#mytopline').hide();
	
		
	$('.main-placeholder').hide();
	
	$('li.active').removeClass( 'active' );
			
	$('#'+ menuName).addClass( 'active' );
		
	vizURL = "/views/" + pworkbookName + "/" + pvizname.replace(/\s/g, '');
	
	new_WB=pworkbookName;
	
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
	
			
	loadviz( vizURL );
	
	}
	/* delete viz; */
	
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
	
			
	loadviz( vizURL );
	
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
	
	
	
	loadviz( vizURL );
	
	
	
	}
	else{
		
	activeSheet = workbook.activateSheetAsync( sheetName );	
	
	}
	
		
}

var showMenuSheet2 = function( menuName, workbookName, sheetName ) {
	
	$('#mytopline').text( sheetName );
	
	$('.main-placeholder').hide();
	
	$('li.active').removeClass( 'active' );
	
	$('#'+menuName).addClass( 'active' );
	
		
	vizURL = "/views/" + workbookName + "/" + sheetName.replace(/\s/g, '');	
		
		
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
	
	
	
	loadviz( vizURL );
	
	
	
	}
	else{
		
	activeSheet = workbook.activateSheetAsync( sheetName );	
	
	}
	
		
}



var resetViz = function(){
	
	$('#viz').remove();
	
	$('.viz-container').append( "<div id='viz'></div>" );
	
	vizDiv = $('#viz')[0];
	
	//viz = new tableau.Viz(vizDiv,vizURL, vizOptions);
	
	
	$.get( tabsrvKeyGen , function( data ) {
		
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