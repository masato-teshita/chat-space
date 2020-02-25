$(function() {
  var search_result = $('#user-search-result');

  function addUser(user) {
    var html = `
                <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>
                `
    search_result.append(html);
  }

  function addErrMsgHTML(msg) {
    var html = `
                <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${msg}</p>
                </div>
               `
    search_result.append(html)
  }

  $('#user-search-field').on('keyup', function(){
    var input = $('#user-search-field').val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword_name: input },
      dataType: 'json'
    })
    .done(function(users){
      search_result.empty();
      if (users.length !== 0){
        users.forEach(function(user){
          addUser(user);
        });
      } else if (input == "") {
        return false;
      } else {
        addErrMsgHTML("ユーザーが見つかりません");
      }
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    })
  });

  $('.chat-group-form__field--right').on('click', '.chat-group-user__btn', function(){
    console.log("OK")
  });
});