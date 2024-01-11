$(function () {
  $(document).on('turbolinks:load', function () {
      if ($('#calendar').length) {
          create_event = function(title, start, end){

              $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
                  var token;
                  if (!options.crossDomain) {
                      token = $('meta[name="csrf-token"]').attr('content');
                      if (token) {
                          return jqXHR.setRequestHeader('X-CSRF-Token', token);
                      }
                  }
              });

              $.ajax({
                  type: "post",
                  url: "/events",
                  data: JSON.stringify({
                      title: title,
                      start_date: start.toISOString(),
                      end_date: end.toISOString()
                  }),
                  contentType: 'application/JSON'
              }).done(function(data){
                  alert("登録しました!");
              }).fail(function(data){
                  alert("登録できませんでした。");
              });
          };

          $('#calendar').fullCalendar({

              navLinks: true,
              selectable: true,
              selectHelper: true,

              select: function(start, end) {
                  var title = prompt('イベントを追加');
                  var eventData;
                  if (title) {
                      eventData = {
                          title: title,
                          start: start,
                          end: end
                      };
                      $('#calendar').fullCalendar('renderEvent', eventData, true);
                      $('#calendar').fullCalendar('unselect');
                      create_event(title, start, end);
                  }
              },
            })
          }})})