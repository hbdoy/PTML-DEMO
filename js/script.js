var App = (function(){

    function _bindEvent(){
        console.log('bond event');
        $('#btn-addTask').on('click', _handleAddTask);
        $('#taskContainer').on('click', '.taskItem .btn-delTask', _handleDelTask);
    }

    function _handleAddTask(){
        console.log('button click');
        var taskName = $('#input-taskName').val();
        var taskDesc = $('#input-taskDesc').val();
        console.log(taskName, taskDesc);
        $('#taskContainer').append(`
            <div class="col-sm-4 taskItem">
                <div class="card">
                    <div class="card-block">
                        <button type="button" class="close btn-delTask" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <h3 class="card-title">${taskName}</h3>
                        <p class="card-text">${taskDesc}</p>
                    </div>
                </div>
            </div>
            `);
        $('#input-taskName').val('');
        $('#input-taskDesc').val('');
    }

    function _handleDelTask(){
        console.log('del btn clicked');
        $(this).parents('.taskItem').remove();
    }

    function init(){
        console.log('init');
        _bindEvent();
    }

    return {
        init
    };
})();