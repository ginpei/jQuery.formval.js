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

	test('gets empty text value', function() {
		g_$form.find('.text').val('text');
		equal(g_$form.val('text'), 'text');
		g_$form.find('.text').val('');
		equal(g_$form.val('text'), '');
	});

	test('gets checkbox values', function() {
		g_$form.find('.checkbox').prop('checked', true);
		deepEqual(g_$form.val('checkbox'), ['A','B']);
	});

	test('gets empty checkbox values', function() {
		g_$form.find('.checkbox').prop('checked', true);
		deepEqual(g_$form.val('checkbox'), ['A','B']);
		g_$form.find('.checkbox').prop('checked', false);
		deepEqual(g_$form.val('checkbox'), []);
	});

	test('gets radio value', function() {
		g_$form.find('.radio').filter('[value=A]').prop('checked', true);
		equal(g_$form.val('radio'), 'A');
	});

	test('gets empty radio value', function() {
		g_$form.find('.radio').filter('[value=A]').prop('checked', true);
		equal(g_$form.val('radio'), 'A');
		g_$form.find('.radio').prop('checked', false);
		equal(g_$form.val('radio'), null);
	});

	test('gets select value', function() {
		g_$form.find('.select').val('B');
		equal(g_$form.val('select'), 'B');
	});

	test('gets empty select value', function() {
		g_$form.find('.select').val('B');
		equal(g_$form.val('select'), 'B');
		g_$form.find('.select').prop('selectedIndex', -1);
		equal(g_$form.val('select'), null);
	});

	test('gets multi-select value', function() {
		g_$form.find('.multi-select').children('[value=A]').prop('selected', true);
		g_$form.find('.multi-select').children('[value=B]').prop('selected', true);
		deepEqual(g_$form.val('multi-select'), ['A', 'B']);
	});

	test('gets empty multi-select value', function() {
		g_$form.find('.multi-select').children('[value=A]').prop('selected', true);
		g_$form.find('.multi-select').children('[value=B]').prop('selected', true);
		deepEqual(g_$form.val('multi-select'), ['A', 'B']);
		g_$form.find('.multi-select').children('[value=A]').prop('selected', false);
		g_$form.find('.multi-select').children('[value=B]').prop('selected', false);
		deepEqual(g_$form.val('multi-select'), []);
	});

	test('gets textarea value', function() {
		g_$form.find('.textarea').val('textarea');
		equal(g_$form.val('textarea'), 'textarea');
	});

	test('gets empty textarea value', function() {
		g_$form.find('.textarea').val('textarea');
		equal(g_$form.val('textarea'), 'textarea');
		g_$form.find('.textarea').val('');
		equal(g_$form.val('textarea'), '');
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

	test('sets checkbox values by a string', function() {
		g_$form.find('.checkbox').eq(0).attr('value', 'A');
		g_$form.find('.checkbox').eq(1).attr('value', 'AB');
		g_$form.val('checkbox', 'AB');
		equal(g_$form.find('.checkbox').filter(':checked').length, 1);
		ok(!g_$form.find('.checkbox').eq(0).prop('checked'));
		ok(g_$form.find('.checkbox').eq(1).prop('checked'));
	});

	test('sets radio value', function() {
		g_$form.val('radio', 'A');
		equal(g_$form.find('.radio').filter(':checked').val(), 'A');
	});

	test('unsets radio if specified value is not found', function() {
		g_$form.val('radio', 'C');
		equal(g_$form.find('.radio').filter(':checked').val(), null);
	});

	test('sets select value', function() {
		g_$form.val('select', 'B');
		equal(g_$form.find('.select').val(), 'B');
	});

	test('sets multi-select value', function() {
		g_$form.val('multi-select', ['A', 'B']);
		deepEqual(g_$form.find('.multi-select').val(), ['A', 'B']);
	});

	test('sets multi-select value by a string', function() {
		g_$form.find('.multi-select').children().eq(0).attr('value', 'A');
		g_$form.find('.multi-select').children().eq(1).attr('value', 'AB');
		g_$form.val('multi-select', 'AB');
		deepEqual(g_$form.find('.multi-select').val(), ['AB']);
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

})(window.$);
