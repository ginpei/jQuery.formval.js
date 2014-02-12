;(function($) {
	var g_$form;

	// ----------------------------------------------------------------
	// Get all

	module('Get all', {
		setup: function() {
			g_$form = $('#the-form');
			g_$form[0].reset();
		}
	});

	test('gets all values', function() {
		g_$form.find('.text').val('text');
		g_$form.find('.checkbox').prop('checked', true);
		g_$form.find('.radio').filter('[value=A]').prop('checked', true);
		g_$form.find('.select').val('B');
		g_$form.find('.multi-select').children('[value=A]').prop('selected', true);
		g_$form.find('.multi-select').children('[value=B]').prop('selected', true);
		g_$form.find('.textarea').val('textarea');
		deepEqual(g_$form.val(), {
			text:     'text',
			checkbox: ['A', 'B'],
			radio:    'A',
			select:   'B',
			'multi-select': ['A', 'B'],
			textarea: 'textarea'
		});
	});

	// ----------------------------------------------------------------
	// Set all

	module('Set all', {
		setup: function() {
			g_$form = $('#the-form');
			g_$form[0].reset();
		}
	});

	test('sets all values', function() {
		g_$form.val({
			text:     'text',
			checkbox: ['A', 'B'],
			radio:    'A',
			select:   'B',
			'multi-select': ['A', 'B'],
			textarea: 'textarea'
		});
		equal(g_$form.find('.text').val(), 'text', 'text');
		equal(g_$form.find('.checkbox').filter('[value=A]').prop('checked'), true, 'checkbox A');
		equal(g_$form.find('.checkbox').filter('[value=B]').prop('checked'), true, 'checkbox B');
		equal(g_$form.find('.radio').filter('[value=A]').prop('checked'), true, 'radio');
		equal(g_$form.find('.select').val(), 'B', 'select');
		deepEqual(g_$form.find('.multi-select').val(), ['A', 'B'], 'multi-select');
		equal(g_$form.find('.textarea').val(), 'textarea', 'textarea');
	});

	// ----------------------------------------------------------------
	// Get one

	module('Get one', {
		setup: function() {
			g_$form = $('#the-form');
			g_$form[0].reset();
		}
	});

	test('gets text value', function() {
		g_$form.find('.text').val('text');
		equal(g_$form.val('text'), 'text');
	});

	test('gets checkbox values', function() {
		g_$form.find('.checkbox').prop('checked', true);
		deepEqual(g_$form.val('checkbox'), ['A','B']);
	});

	test('gets radio value', function() {
		g_$form.find('.radio').filter('[value=A]').prop('checked', true);
		equal(g_$form.val('radio'), 'A');
	});

	test('gets select value', function() {
		g_$form.find('.select').val('B');
		equal(g_$form.val('select'), 'B');
	});

	test('gets multi-select value', function() {
		g_$form.find('.multi-select').children('[value=A]').prop('selected', true);
		g_$form.find('.multi-select').children('[value=B]').prop('selected', true);
		deepEqual(g_$form.val('multi-select'), ['A', 'B']);
	});

	test('gets textarea value', function() {
		g_$form.find('.textarea').val('textarea');
		equal(g_$form.val('textarea'), 'textarea');
	});

	// ----------------------------------------------------------------
	// Set one

	module('Set one', {
		setup: function() {
			g_$form = $('#the-form');
			g_$form[0].reset();
		}
	});

	test('sets text value', function() {
		g_$form.val('text', 'text');
		equal(g_$form.find('.text').val(), 'text');
	});

	test('sets checkbox values', function() {
		g_$form.val('checkbox', ['A','B']);
		equal(g_$form.find('.checkbox').filter(':checked').length, 2);
	});

	test('sets radio value', function() {
		g_$form.val('radio', 'A');
		equal(g_$form.find('.radio').filter(':checked').val(), 'A');
	});

	test('sets select value', function() {
		g_$form.val('select', 'B');
		equal(g_$form.find('.select').val(), 'B');
	});

	test('sets multi-select value', function() {
		g_$form.val('multi-select', ['A', 'B']);
		deepEqual(g_$form.find('.multi-select').val(), ['A', 'B']);
	});

	test('unsets multi-select value that not specified', function() {
		g_$form.find('.multi-select').children('[value=A]').prop('selected', true);
		g_$form.find('.multi-select').children('[value=B]').prop('selected', false);
		g_$form.val('multi-select', ['B']);
		deepEqual(g_$form.find('.multi-select').val(), ['B']);
	});

	test('sets textarea value', function() {
		g_$form.val('textarea', 'textarea');
		equal(g_$form.find('.textarea').val(), 'textarea');
	});

})(window.jQuery);
