$(function() {
  var search_result = $('#user-search-result');
  var group_users = $('#chat-group-users')


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

  function addGroupUser(userName, userId){

    var html = `
                <div class='chat-group-user'>
                  <input name='group[user_ids][]' type='hidden' value='${userId}'>
                  <p class='chat-group-user__name'>${userName}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>
                `
    group_users.append(html)
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

  $(document).on('click', '.chat-group-user__btn--add', function(){
    $(this)
      .parent()
      .remove();
      console.log($(this).data())
    const userName = $(this).data('user-name');
    const userId = $(this).data('user-id');
    addGroupUser(userName, userId)
  });

  $(document).on('click', '.chat-group-user__btn--remove', function(){
    $(this).parent().remove();
  });
});