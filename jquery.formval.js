;(function($) {
	var val = $.fn.val;
	$.fn.val = function(arg0, arg1) {
		var $form = this.eq(0);
		if ($form.prop('tagName') !== 'FORM') {
			if (arguments.length) {
				return val.call(this, arg0);
			}
			else {
				return val.call(this);
			}
		}

		// get all
		if (arg0 === undefined && arg1 === undefined) {
			var result = {};
			$form.find('input, select, textarea').filter('[name]').each(function(index, el) {
				var name = el.name;
				result[name] = $form.val(name);
			});
			return result;
		}
		else if (arg0 !== undefined && arg1 === undefined) {
			// get one
			if (typeof arg0 === 'string') {
				var $input = $form.find('[name='+arg0+']');
				var type = $input.attr('type');
				if (type === 'checkbox') {
					return $.map($input.filter(':checked'), function(el, index) {
						return el.value;
					});
				}
				else if (type === 'radio') {
					return $input.filter(':checked').val();
				}
				else {
					return $input.val();
				}
			}
			// set all
			else {
				for (var key in arg0) {
					this.val(key, arg0[key]);
				}
			}
		}
		// set one
		else {
			var $input = $form.find('[name='+arg0+']');
			var type = $input.prop('type');
			if (type === 'radio') {
				var $target = $input.filter('[value='+arg1+']');
				if ($target.length) {
					$target.prop('checked', true);
				}
				// uncheck all if not matched
				else {
					$input.prop('checked', false);
				}
			}
			else {
				$input.val(arg1);
			}
		}
	};
})(window.jQuery || window.$);
