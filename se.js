function Plugin(settings) {

	this.addFile = function (source, path) {
		//если нужно добавить в проект какие то файлы
		//пути относительно папки плагина
		var rq = new XMLHttpRequest();
		if(settings.plugin_id) {
	    var fd = new FormData();
	    fd.set('plugin', settings.plugin_id);
	    fd.set('project', $("#idval").val() );
	    fd.set('path',  path);
	    fd.set('source', source);

		rq.open('POST', 'plugin_api/addfile.php');
	    rq.send(fd);
	    if(rq.responseText == 'success') {return true} else {return false}
		} else { return false }

	}

	this.addToWorkspace = function (block_key) {
	  $("#block_selecter")[0].innerHTML += add(blocks.get(block_key) );
	}

	
}

/*
Пример.
plugins.push('pluginname');
var pluginname = new Plugin({id: 'pluginname'});
blocks.set('blockname', block({
    text: 'Текст. Можно использовать %textInput% для ввода',
    block_type: 'action' //если это действие, то 'action', Если это событие - 'event',
    'block_key': 'blockname' // то же значение что и в первом аргументе blocks.set,
    plugin: 'pluginname',
}) );

javascript['blockname'] = function (block) { return '\nфункция возвращает код. можно юзать'+inputval(block, 0)+'и т д для того что в инпуте ;' }
php['blockname'] = function (block) { return '\nфункция возвращает код. можно юзать'+inputval(block, 0)+'и т д для того что в инпуте ;' }
csharp['blockname'] = function (block) { return '\nфункция возвращает код. можно юзать'+inputval(block, 0)+'и т д для того что в инпуте ;' }


Если же Вы хотите добавить функцию, которая что-либо возвращает,
для системы выражений, то

javascript.se_utils += '\nкод функции;'
(вместо javascript может быть javascript, csharp, php, python)

САМ ПЛАГИН ПИСАТЬ В ОТДЕЛЬНОМ ФАЙЛЕ

*Вы можете добавлять свои кнопки, окна и т д*

*/

