
var main = function() {
	
	//vizDiv = document.getElementById('viz');
	
	vizDiv = $('#tableauViz')[0];
	
	tabsrvURL = "http://tabsrv/trusted/"
	
	current_WB = "";
	
	vizURL = "/views/OpPlanApprovalsV3/ApprovalsDashNew";
	
	vizOptions = {
		width: '1169px',
		height: '877px',
		hideToolbar: true,
		hideTabs: true,
		onFirstInteractive: function () {
		workbook = viz.getWorkbook();
		activeSheet = workbook.getActiveSheet();
		}
	}
	
	
	$.get( "gen_tabsrvkey.aspx", function( data ) {
		
	vizURL2 = tabsrvURL +  data	+ vizURL;
	viz = new tableau.Viz(vizDiv,vizURL2, vizOptions);
	
	});
	
	
	
}

$(document).ready(main);
