$(document).ready(function(){
    $(".team_button1").click(function(){
      $(".info_team1").toggle();
    });
  });

  $(document).ready(function(){
    $(".team_button2").click(function(){
      $(".info_team2").toggle(); 
    });
    
  });
  

  $(document).ready(function(){
    $(".team_button3").click(function(){
      $(".info_team3").toggle();
    });
  });

  $(document).ready(function(){
    $(".team_button4").click(function(){
      $(".info_team4").toggle();
    });
  });


  $(document).ready(function(){
    $('#about2').pagepiling({
      direction:'horizontal',
    })
  })

  $(document).ready(function(){
    $("#btn1").click(function(){
      $(".all_img").show();
      
    });
  });

  $(document).ready(function(){
    $("#btn2").click(function(){
      $("#img2").show();
      
    });
  });

  $(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});


window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer",
  {
    theme: "light2",
    title:{
      text: "GLOBAL SALES 2020-2021"
    },		
    data: [
    {       
      type: "pie",
      showInLegend: true,
      toolTipContent: "{y} - #percent % {indexLabel}",
      yValueFormatString: "#,##0,,.## Million",
      legendText: "{indexLabel}",
      dataPoints: [
        {  y: 50, indexLabel: "GERMANY" },
        {  y: 9.40, indexLabel: "USA" },
        {  y: 8.15, indexLabel: "ISRAEL" },
        {  y: 6.21, indexLabel: "UNITED KINGDOM"},
        {  y: 5.61, indexLabel: "ITALY" },
        {  y: 2.75, indexLabel: "SWEDEN"},
        {  y: 2.63, indexLabel: "SPAIN"},
        {  y: 2.44, indexLabel: "FRANCE"},
        {  y: 2.22, indexLabel: "POLAND"},
        {  y: 2.15, indexLabel: "RUSIA"},
        {  y: 1.78, indexLabel: "INDIA"},
        {  y: 1.65, indexLabel: "NETHERLANDS"},
        {  y: 1.15, indexLabel: "TURKEY"},
        {  y: 0.51, indexLabel: "AUSTRALIA"},
        {  y: 0.47, indexLabel: "FINLAND"},
        {  y: 0.38, indexLabel: "SOUTH AFRICA"},
        {  y: 0.32, indexLabel: "ESTONIA"},
        {  y: 0.27, indexLabel: "AUSTRIA"},
        {  y: 0.27, indexLabel: "SWITZERLAND"},
        {  y: 0.25, indexLabel: "CZECH REPUBLIC"},
        {  y: 0.15, indexLabel: "SLOVEINA"},
        {  y: 0.11, indexLabel: "MEXICO"},
        {  y: 0.09, indexLabel: "PORTUGAL"},
        {  y: 0.05, indexLabel: "BELGIUM"},
        {  y: 0.02, indexLabel: "CHINA"},
        {  y: 0.02, indexLabel: "JAPAN"},
        {  y: 0.02, indexLabel: "CANADA"},
        {  y: 0.01, indexLabel: "HONG KONG"}

        
      ]
    }
    ]
  });
  chart.render();
}

  
 




  