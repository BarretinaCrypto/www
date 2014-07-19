
$(function() {

  $(".scroll").click(function(event) {
    event.preventDefault();
    //calculate destination place
    var dest = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
      dest = $(document).height() - $(window).height();
    } else {
      dest = $(this.hash).offset().top;
    }
    //go to destination
    console.log(dest);
    $('html,body').animate({
      scrollTop: dest
    }, 400, 'swing');
  });

  $(function() {
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      scrollDistance: 300, // Distance from top/bottom before showing element (px)
      scrollFrom: 'top', // 'top' or 'bottom'
      scrollSpeed: 300, // Speed back to top (ms)
      easingType: 'linear', // Scroll to top easing (see http://easings.net/)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa fa-fw fa-caret-up fa-2x">', // Text for element, can contain HTML
      scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
      scrollImg: false, // Set true to use image
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      zIndex: 2147483647 // Z-Index for the overlay
    });
  });

  $(function() {
    $('#countdown').countdown({
      until: $.countdown.UTCDate(0, new Date(2014, 03 - 1, 01)),
      timezone: 0,
      padZeroes: true,
      layout: '<div class ="timer-wrap-all"><div class="timer-wrap"> <span class="timer-unit">{dnn}</span> <div class="timer-unit-desc">{dl}</div> </div> <div class="timer-wrap"> <span class="timer-unit-sep">:</span> </div> <div class="timer-wrap"> <span class="timer-unit">{hnn}</span> <div class="timer-unit-desc">{hl}</div> </div> <div class="timer-wrap"> <span class="timer-unit-sep">:</span> </div> <div class ="timer-wrap"> <span class="timer-unit">{mnn}</span> <div class="timer-unit-desc">{ml}</div> </div> <div class="timer-wrap"> <span class="timer-unit-sep">:</span> </div> <div class="timer-wrap"> <span class="timer-unit">{snn}</span> <div class="timer-unit-desc">{sl}</div> </div></div>',
    });
  });

  (function(){
    var activeFeatureIndex = 0;
    var updateFeature = function(direction) {
      //direction should be a positive or negative value
      //to indicate how many elements to walk, i.e. 2 for forwards 2, -1 for backwards

      var newActiveFeatureIndex = activeFeatureIndex + direction;

      var children = $('#content-circle').children();
      var maxIndex = children.length - 1;

      // display prev and next button
      var disablePrev = newActiveFeatureIndex <= 0;
      var disableNext = newActiveFeatureIndex >= maxIndex;

      $('#how button.paging.prev').prop('disabled', disablePrev);
      $('#how button.paging.next').prop('disabled', disableNext);

      // display feature
      children.eq(activeFeatureIndex).fadeOut('fast', function() {
        $(this).removeClass('active');
        children.eq(newActiveFeatureIndex).fadeIn('slow', function(){
          $(this).addClass('active');
          activeFeatureIndex = newActiveFeatureIndex;
        });
      });
    };

    $('#content-circle').children().removeClass('active');
    updateFeature(0);

    $('#how button.paging.prev').click(function() {
      updateFeature(-1);
    });
    $('#how button.paging.next').click(function() {
      updateFeature(1);
    });
  }());

  $('#news-slider').liquidSlider({
    autoSlide: false,
    dynamicTabs: true,
    dynamicTabsHtml: true,
    dynamicArrows: false,
    slideEaseDuration: 600,
    autoHeight: true,
    includeTitle: false
  });
  window.api = $.data($('#news-slider')[0], 'liquidSlider');
  $('#who-slider').liquidSlider({
    autoSlide: false,
    dynamicTabs: false,
    dynamicArrows: false,
    slideEaseDuration: 600,
  });
  $('#code-slider').liquidSlider({
    autoSlide: false,
    dynamicTabs: false,
    slideEaseDuration: 600,
    autoHeight: true,
    dynamicArrows: false,
    dynamicArrowsGraphical: false,
    // dynamicArrowLeftText: '<i class="fa fa-angle-left fa-3x" data-liquidslider-ref="#code-slider">',
    // dynamicArrowRightText: '<i class="fa fa-angle-right fa-3x" data-liquidslider-ref="#code-slider">',
    crossLinks: true
  });
  $('#press-slider').liquidSlider({
    autoSlide: false,
    pauseOnHover: true,
    dynamicTabs: false,
    slideEaseDuration: 600,
    autoHeight: true,
    dynamicArrows: false,
    dynamicArrowsGraphical: false,
    // dynamicArrowLeftText: '<i class="fa fa-angle-left fa-3x" data-liquidslider-ref="#code-slider">',
    // dynamicArrowRightText: '<i class="fa fa-angle-right fa-3x" data-liquidslider-ref="#code-slider">',
    crossLinks: true
  });
  $('#media-slider').liquidSlider({
    autoSlide: false,
    dynamicTabs: false,
    slideEaseDuration: 600,
    autoHeight: true,
    dynamicArrows: false,
    dynamicArrowsGraphical: false,
    // dynamicArrowLeftText: '<i class="fa fa-angle-left fa-3x" data-liquidslider-ref="#code-slider">',
    // dynamicArrowRightText: '<i class="fa fa-angle-right fa-3x" data-liquidslider-ref="#code-slider">',
    crossLinks: true
  });
  $('#philosophy-slider').liquidSlider({
    autoSlide: false,
    dynamicTabs: false,
    dynamicArrows: false,
    slideEaseDuration: 600,
    crossLinks: true
  });

  $(".nano").nanoScroller();

  var initPresaleCounters = function(){
    /* UPDATE these constants with real values */
    var ETHER_FOR_BTC = 2000,
        DECREASE_AMOUNT_PER_DAY = 30,
        MIN_ETH_FOR_BTC = 1337.07714935,
        FUNDRAISING_ADDRESS = "3HE73tDm7q6wHMhCxfThDQFpBX9oq14ZaG",
        SATOSHIS_IN_BTC = 100000000,
        START_DATETIME = "2014-06-12 00:00:00",
        DECREASE_AFTER = 14,
        ENDS_AFTER = 42,
        $qrDepAddr = $("#qr-deposit-address"),
        $purchaseCancel = $("#purchase-cancel"),
        $backToStart = $("#back-to-start"),
        $entropyProgress = $("#entropy-progress"),
        $downloadLink = $("#downloadLink"),
        $downloadLinkTemp = $("#downloadLinkTemp"),
        purchaseInputs = {
          $email: $("#purchase-email"),
          $emailRepeat: $("#purchase-email-repeat"),
          $password: $("#password"),
          $passwordRepeat: $("#password-checks")
        },
        $startBtn = $("#start-ether-purchase"),
        $terms = $("#terms-modal"),
        $termsText = $("#terms-text-container"),
        $docs = $("#docs-modal"),
        $docsContainer = $("#docs-container"),
        btcToSend = 1,
        didNotifyRememberPassword = false,
        mainSlider,
        appStepsSlider,
        ethForBtcCalc = 2000,
        nextEthForBtc = ethForBtcCalc - DECREASE_AMOUNT_PER_DAY,
        timerConfirmations,
        $purchaseForm = $("[name=purchase_form]");

    $downloadLink.click(function(e){
      e.preventDefault();
    });

    $downloadLinkTemp.click(function(e){
      e.preventDefault();
    });

    var dhms = function(t){
      var cd = 24 * 60 * 60 * 1000,
          ch = 60 * 60 * 1000,
          cm = 60 * 1000,

          d = Math.floor(t / cd),
          h = Math.floor( (t - d * cd) / ch),
          m = Math.floor( (t - d * cd - h * ch) / cm),
          s = Math.round( (t - d * cd - h * ch - m * cm) / 1000);

      return {
        days: d,
        hours: h,
        minutes: m,
        seconds: s
      };
    };

    var reset = function(){
      purchaseInputs.$email.val("");
      purchaseInputs.$emailRepeat.val("");
      purchaseInputs.$password.val("");
      purchaseInputs.$passwordRepeat.val("");
      appStepsSlider.setNextPanel(0);
      mainSlider.setNextPanel(1);
      didNotifyRememberPassword = false;
      $purchaseCancel.show();
      $purchaseForm.find("input").each(function(){
        $(this).attr("disabled", false);
      });
      $entropyProgress.show();
      $(".step-breadcrumbs").attr("data-step", "1");
      clearInterval(timerConfirmations);
      return false;
    };

    $purchaseCancel.click(reset);
    $backToStart.click(reset);

    var resizeTerms = function(){
      $termsText.height($(window).height() - 185);
    };

    var closeTerms = function(){
      $terms.modal("hide");
      $(window).off("resize", resizeTerms);
      $terms.find("[name=confirm-terms]").prop("checked", false);
    };

    $startBtn.click(function(e){
      $terms.modal();
      resizeTerms();
      $(window).on("resize", resizeTerms);
      $termsText.animate({scrollTop: 0}, 1000);
      $terms.find("[name=confirm-terms]").attr("disabled", '');
      $terms.find("[for=confirm-terms]").removeClass("disabled").addClass("disabled");
      return false;
    });

    $terms.find(".close-modal").click(function(e){
      closeTerms();
      return false;
    });

    $terms.find(".print").click(function(){
      $termsText.css("overflow", "visible").printArea();
      $termsText.css("overflow", "auto");
      return false;
    });

    $termsText.scroll(function(){
      if($termsText.scrollTop() + $termsText.innerHeight() + 30 > $termsText.prop("scrollHeight")){
        $terms.find("[name=confirm-terms]").attr("disabled", false);
        $terms.find("[for=confirm-terms]").removeClass("disabled");
      }
    });

    $terms.find("[name=confirm-terms]").change(function(){
      if($(this).is(":checked")){
        mainSlider.setNextPanel(2);
        closeTerms();
      }
    });

    purchaseInputs.$password.focus(function(){
      if(!didNotifyRememberPassword){
        $('#remember-password-modal').modal();
        didNotifyRememberPassword = true;
      }
    });

    var knobDefaults = {
      readOnly: true,
      thickness: 0.05,
      width: 40,
      fgColor: "#333",
      bgColor: "#ddd",
      font: "inherit"
    };
    var startsAt = moment( START_DATETIME ).utc(),
        decreasesAt = moment( START_DATETIME ).utc().add( 'days', DECREASE_AFTER ),
        endsAt = moment( START_DATETIME ).utc().add( 'days', ENDS_AFTER ),
        $saleDurationDials = $(".sale-duration-container"),
        $rateCountdownDials = $(".rate-countdown-container");

    var createKnob = function($el, settings){
      $el.knob(_.extend({}, knobDefaults, settings));
    };


    var setupTimerDials = function($container,maxdays){
      createKnob($container.find(".dial.days"), {max: maxdays });
      createKnob($container.find(".dial.hours"), {max: 24});
      createKnob($container.find(".dial.minutes"), {max: 60});
      createKnob($container.find(".dial.seconds"), {max: 60});
    };

    setupTimerDials($saleDurationDials, dhms( endsAt.diff(startsAt)).days );

    var deltaForTimeTillNextRate = dhms( 1000 * (decreasesAt.unix() - moment().utc().unix()) - moment().zone()*60*1000 ).days;

    setupTimerDials($rateCountdownDials, (deltaForTimeTillNextRate < -22 ? dhms( endsAt.diff(startsAt)).days : deltaForTimeTillNextRate));


    $(".countdown-dials input").css({
      height: "26px",
      "margin-top": "7px",
      "font-size": "18px"
    });

    var updateTimerDial = function($container, type, delta){
      $container.find(".dial." + type).val(delta[type]).change();
    };

    var updateTimerDials = function($container, delta){
      updateTimerDial($container, "days", delta);
      updateTimerDial($container, "hours", delta);
      updateTimerDial($container, "minutes", delta);
      updateTimerDial($container, "seconds", delta);
    };
    var updateAllDials = function(){
      if(endsAt.isAfter(moment().utc()))
      {
        updateTimerDials($saleDurationDials, dhms(1000*(endsAt.unix() - moment().utc().unix()) - moment().zone()*60*1000));

        var delta = dhms(moment().utc().diff(startsAt));
        delta.days = delta.days + 1;
        delta.hours = 24 - delta.hours - 1;
        delta.minutes = 60 - delta.minutes - 1;
        delta.seconds = 60 - delta.seconds;

        if(delta.days > -DECREASE_AFTER)
        {
          ethForBtcCalc = ETHER_FOR_BTC - DECREASE_AMOUNT_PER_DAY * Math.max(delta.days - DECREASE_AFTER, 0);
        }
        else
        {
          ethForBtcCalc = ETHER_FOR_BTC;
        }

        ethForBtcCalc = Math.max(ethForBtcCalc, MIN_ETH_FOR_BTC);

        nextEthForBtc = Math.max(ethForBtcCalc - DECREASE_AMOUNT_PER_DAY, MIN_ETH_FOR_BTC);

        $(".eth-to-btc").text( numeral(ethForBtcCalc).format("0,0") );
        $(".min-eth-to-btc").text( numeral(ethForBtcCalc/100).format("0,0.00") );
        $(".next-eth-to-btc").text( numeral(nextEthForBtc).format("0,0") );
        $(".max-eth-to-buy").text( numeral( MAX_ETH_TO_BUY ).format("0,0") );
        $(".max-btc-to-buy").text( numeral( MAX_ETH_TO_BUY/ethForBtcCalc ).format("0,0.00") );

        if(ethForBtcCalc === MIN_ETH_FOR_BTC)
        {
          updateTimerDials($rateCountdownDials, dhms(1000*(endsAt.unix() - moment().utc().unix()) - moment().zone()*60*1000));
          $('.nextPriceInfo').hide();
        }
        else
        {
          updateTimerDials($rateCountdownDials, delta.days <= DECREASE_AFTER ? dhms(1000*(decreasesAt.unix() - moment().utc().unix()) - moment().zone()*60*1000) : delta);
        }
      }
      else
      {
        $(".hide-after-end").hide();
      }
    };

    _.extend(window, {
      ethForBtc: function(btc){
        return Math.round((typeof btc == "number" ? btc : 1) * ethForBtcCalc * 10000) / 10000;
      },
      btcForEth: function(eth){
        return Math.round((typeof eth == "number" ? eth : 1) / ethForBtcCalc * 10000) / 10000;
      }
    });

    var $step4 = $(".step4-content");

    $("#print-purchase-page").click(function(e){
      e.preventDefault();
      $step4.css("width", "100%");
      var $noPrint = $step4.find(".no-print").hide();
      $step4.printArea();
      $noPrint.show();
      $step4.css("width", "20%");
    });

    updateAllDials();

    window.setInterval(function(){
      updateAllDials();
    },1000);


    $.ajax({
      type: "GET",
      url: BLOCKCHAIN_URL + "/q/getreceivedbyaddress/" + FUNDRAISING_ADDRESS + "?cors=true&api_code=" + BLOCKCHAIN_API,
      crossDomain: true,
      success: function( response )
      {
        var btc = Math.round(parseInt(response,10)/SATOSHIS_IN_BTC);
        $("#total-sold-container .total").text(numeral(btc*2000).format("0,0"));
      },
      error: function( error )
      {
        console.log( "ERROR:", error );
      }
    });




    var $emailConfDial = $("#email-confirmations-dial");

    $emailConfDial.knob({
      readOnly: true,
      thickness: 0.05,
      width: 90,
      fgColor: "#333",
      bgColor: "#ddd",
      font: "inherit",
      max: 3,
      displayInput: false
    });

    $emailConfDial.val("0").change();
    $("#email-dial-shim").text("0/6");

    window.onFormReady = function(){
      appStepsSlider.setNextPanel(1);
    };

    window.onWalletReady = function(downloadLinkHref){
      $entropyProgress.hide();
      appStepsSlider.setNextPanel(2);
      $(".step-breadcrumbs").attr("data-step", "2");
      $downloadLink.attr("href", downloadLinkHref);
      $downloadLinkTemp.attr("href", downloadLinkHref);
    };



    // hack to make qr code render (not sure why the original code doesn't work)
    window.showQrCode = function(address, amount){
      $qrDepAddr.empty();
      $qrDepAddr.qrcode({width: 175, height: 175, text: 'bitcoin:' + address + '?amount=' + amount + '&label=Ether%20presale ' + amount + ' BTC'});
    };

    window.onTransactionComplete = function(downloadLinkHref, transactionHash){
      $entropyProgress.hide();
      appStepsSlider.setNextPanel(3);
      $(".step-breadcrumbs").attr("data-step", "3");

      $purchaseCancel.hide();

      clearInterval(timerConfirmations);
      timerConfirmations = startConfirmationsInterval(transactionHash);

      $downloadLink.attr("href", downloadLinkHref);
    };



    function startConfirmationsInterval(transactionHash){
      return setInterval(function() {
        $.getJSON(BLOCKCHAIN_URL + "/rawtx/" + transactionHash + "?cors=true&api_code=" + BLOCKCHAIN_API + "&format=json", function(data){
          if( data.block_height === undefined ){
            $('.confirmations-dial-shim').text("0/6");
            return false;
          }

          $.get(BLOCKCHAIN_URL + "/q/getblockcount?api_code=" + BLOCKCHAIN_API, function(blockHeight)
          {
            confirmations = blockHeight - data.block_height + 1;

            if(confirmations == 6)
            {
              clearInterval(timerConfirmations);
            }
            $('.confirmations-dial-shim').text(confirmations + "/6");
          });
        });
      }, 20000);
    }

    appStepsSlider = $("#app-steps-content").liquidSlider({
      autoSlide: false,
      dynamicTabs: false,
      dynamicArrows: false,
      hideSideArrows: false,
      continuous: false,
      firstPanelToLoad: 1,
      swipe: false,
      slideEaseDuration: 600
    }).data("liquidSlider");

    mainSlider = $('#presale-counters-slider').liquidSlider({
      autoSlide: false,
      dynamicTabs: false,
      dynamicArrows: false,
      hideSideArrows: true,
      slideEaseDuration: 600,
      swipe: false,
      firstPanelToLoad: 2
    }).data("liquidSlider");

    $('.btn-show-charts').on('click', function(){
      $("#fundsChart").empty();

      var margin = {top: 20, right: 20, bottom: 30, left: 50},
          width = 960 - margin.left - margin.right,
          height = 250 - margin.top - margin.bottom;

      var parseDate = d3.time.format("%d/%m/%Y %H:%M:%S").parse;

      var x = d3.time.scale()
          .range([0, width]);

      var y = d3.scale.linear()
          .range([height, 0]);

      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom");

      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left");

      var line = d3.svg.line()
          .x(function(d) { return x(d.date); })
          .y(function(d) { return y(d.amount); });

      var svg = d3.select("#fundsChart").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      d3.json(ETHERSALE_URL + "/chart/" + FUNDRAISING_ADDRESS, function(error, json) {
          var data = json.slice();
          var total = 0;

          console.log(data);

          data.forEach(function(d) {
            d.date = parseDate(d.date);
            total += parseFloat(d.amount);
            d.amount = total;
          });

          console.log(data);

          x.domain(d3.extent(data, function(d) { console.log(d); return d.date; }));
          y.domain(d3.extent(data, function(d) { return d.amount; }));

          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);

          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
            .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Funds (BTC)");

          svg.append("path")
              .datum(data)
              .attr("class", "line")
              .attr("d", line);
      });
    });

    var resizeDocs = function(){
      $docsContainer.height($(window).height() - 155);
    };

    var closeDocs = function(){
      $docs.modal("hide");
      $(window).off("resize", resizeDocs);
    };

    $('.showDocs').click(function(e){
      e.preventDefault();
      $docs.modal();
      resizeDocs();

      var myPDF = new PDFObject(
      {
        url: $(this).attr('href'),
        pdfOpenParams: {
          navpanes: 0,
          view: "FitH",
          pagemode: "bookmarks"
        }
      }).embed("docs-container");

      $docs.find('a.download').attr('href', $(this).attr('href'));
      $docs.find('a.download').attr('download', $(this).attr('href'));

      $(window).on("resize", resizeDocs);
      return false;
    });

    $docs.find(".close-modal").click(function(e){
      closeDocs();
      return false;
    });
  };

  initPresaleCounters();

  function getYoutubeID(url) {
      var id = url.match("[\\?&]v=([^&#]*)");

      id = id[1];
      return id;
  }

  $('.video-responsive').on('click', function(e)
  {
    e.preventDefault();

    var id = getYoutubeID( $(this).find('a').attr('href') );

    var video_url = "//www.youtube.com/embed/" + id + "?autoplay=1";
    $(this).html('<iframe src="' + video_url + '" frameborder="0" allowfullscreen></iframe>').css('background', 'none');
  });

  $('a.youtube').each(function()
  {
    var id = getYoutubeID( $(this).attr('href') );

    var thumb_url = "/images/videos/" + id + ".jpg";
    $('<img width="100%" src="' + thumb_url + '" />').appendTo( $(this) );
  });
});
